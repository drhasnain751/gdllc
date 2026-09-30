import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  serviceNeeded: z.enum(["Store Management", "LLC Infrastructure", "Joint Venture"]),
  message: z.string().trim().min(10, "Please share a little more about your goals.").max(2000),
  website: z.string().max(0),
});

export const submitConsultation = createServerFn({ method: "POST" })
  .validator((data) => consultationSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("consultation_leads").insert({
      name: data.name,
      email: data.email,
      service_needed: data.serviceNeeded,
      message: data.message,
    });

    if (error) throw new Error("We couldn’t save your request. Please try again.");
    return { success: true };
  });