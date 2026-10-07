import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const optionalText = (max: number, fieldName: string, minLength = 0) =>
  z
    .string()
    .trim()
    .max(max, `${fieldName} is too long.`)
    .refine((value) => value.length === 0 || value.length >= minLength, {
      message: `${fieldName} is too short.`,
    });

const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  company: optionalText(200, "Company name", 2).default(""),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  phone: z
    .string()
    .trim()
    .max(40, "Please enter a valid phone number.")
    .refine((value) => value.length === 0 || value.replace(/\D/g, "").length >= 7, {
      message: "Please enter a valid phone number.",
    })
    .default(""),
  serviceNeeded: z.string().trim().min(1, "Please select a service.").max(200),
  message: z.string().trim().min(10, "Please share a little more about your goals.").max(2000),
  website: z.string().max(0),
});

export { consultationSchema };

const mailTo = process.env["MAIL_TO"] ?? "info@globaldealz.site";
const smtpHost = process.env["SMTP_HOST"];
const smtpPort = Number(process.env["SMTP_PORT"] ?? "587");
const smtpSecure = (process.env["SMTP_SECURE"] ?? "false").toLowerCase() === "true";
const smtpUser = process.env["SMTP_USER"];
const smtpPass = process.env["SMTP_PASS"];
const smtpFrom = process.env["SMTP_FROM"] ?? smtpUser ?? mailTo;

function isSmtpConfigured() {
  return Boolean(smtpHost && smtpUser && smtpPass);
}

function buildEmailContent(data: z.infer<typeof consultationSchema>) {
  const submittedAt = new Date().toISOString();

  return {
    subject: "New Consultation Request — GlobalDealz LLC",
    text: [
      "New Consultation Request — GlobalDealz LLC",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Company: ${data.company || "Not provided"}`,
      `Requested Service: ${data.serviceNeeded}`,
      `Submitted At: ${submittedAt}`,
      "",
      "Message:",
      data.message,
      "",
      "GlobalDealz LLC",
      "info@globaldealz.site",
      "+1 (901) 443-2051",
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 680px; margin: 0 auto;">
        <h2 style="margin: 0 0 16px; color: #0f172a;">New Consultation Request — GlobalDealz LLC</h2>
        <table cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;">
          <tr><td style="font-weight: 700; width: 180px;">Name:</td><td>${data.name}</td></tr>
          <tr><td style="font-weight: 700;">Email:</td><td>${data.email}</td></tr>
          <tr><td style="font-weight: 700;">Phone:</td><td>${data.phone || "Not provided"}</td></tr>
          <tr><td style="font-weight: 700;">Company:</td><td>${data.company || "Not provided"}</td></tr>
          <tr><td style="font-weight: 700;">Requested Service:</td><td>${data.serviceNeeded}</td></tr>
          <tr><td style="font-weight: 700;">Submitted At:</td><td>${submittedAt}</td></tr>
        </table>
        <p style="margin-top: 18px; font-weight: 700;">Message:</p>
        <div style="padding: 14px 16px; background: #f1f5f9; border-left: 4px solid #0ea5e9; border-radius: 8px; white-space: pre-wrap;">${data.message.replace(/\n/g, "<br />")}</div>
        <p style="margin-top: 20px; color: #334155;">
          <strong>GlobalDealz LLC</strong><br />
          info@globaldealz.site<br />
          +1 (901) 443-2051
        </p>
      </div>
    `,
  };
}

async function sendConsultationEmail(data: z.infer<typeof consultationSchema>) {
  if (!isSmtpConfigured()) {
    throw new Error("EMAIL_SERVICE_UNAVAILABLE");
  }

  // Lazy-load nodemailer at runtime so the Vite bundler doesn't try to resolve
  // it while building client-side artifacts. This keeps SMTP creds server-only
  // and avoids rollup resolution errors in the cloud build environment.
  const mailerModule = (await import("nodemailer")) as any;
  const nodemailerLib = mailerModule.default ?? mailerModule;

  const transporter = nodemailerLib.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const { subject, text, html } = buildEmailContent(data);

  const info = await transporter.sendMail({
    from: smtpFrom,
    to: mailTo,
    replyTo: data.email,
    subject,
    text,
    html,
  });

  if (!info.messageId) {
    throw new Error("EMAIL_SEND_FAILED");
  }
    // Log the messageId for successful deliveries so we can verify live sends in logs
    try {
      console.info("[consultation] Email sent", { messageId: info.messageId });
    } catch {}
  
  return info;
}

export const submitConsultation = createServerFn({ method: "POST" })
  .validator((data) => consultationSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      await sendConsultationEmail(data);
    } catch (emailError) {
      const message =
        emailError instanceof Error && emailError.message === "EMAIL_SERVICE_UNAVAILABLE"
          ? "We couldn't send your request right now. Please email info@globaldealz.site directly."
          : "We couldn't send your request right now. Please email info@globaldealz.site directly.";

        // Log safe, non-secret error details for diagnosis
        try {
          const errDetails: Record<string, any> = {
            message: emailError instanceof Error ? emailError.message : String(emailError),
          };
          // nodemailer-specific fields (if present) - do not log credentials
          if (emailError && typeof emailError === "object") {
            // @ts-ignore
            if (emailError.code) errDetails.code = emailError.code;
            // @ts-ignore
            if (emailError.response) errDetails.response = String(emailError.response).slice(0, 512);
          }
          console.error("[consultation] Email delivery failed", errDetails);
        } catch (e) {
          console.error("[consultation] Email delivery failed: (unable to serialize error)");
        }

      throw new Error(message);
    }

    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("consultation_leads").insert({
        name: data.name,
        company: data.company || "",
        email: data.email,
        phone: data.phone || "",
        service_needed: data.serviceNeeded,
        message: data.message,
      });

      if (error) {
        console.error("[consultation] Supabase save failed", error);
      }
    } catch (supabaseError) {
      console.error("[consultation] Supabase save failed", supabaseError);
    }

    return { success: true };
  });
