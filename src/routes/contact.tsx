import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, Check, Mail, MessageSquareText, Phone, type LucideIcon } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

import { BrandMark } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { consultationSchema, submitConsultation } from "@/lib/consultation.functions";
import { GLOBALDEALZ } from "@/lib/site-info";

import { SiteFooter } from "@/components/site-footer";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GlobalDealzLLC" },
      {
        name: "description",
        content:
          "Contact GlobalDealzLLC about managed e-commerce, infrastructure, warehousing, or partnerships.",
      },
      { property: "og:title", content: "Contact GlobalDealzLLC" },
      {
        property: "og:description",
        content: "Start a conversation about global e-commerce infrastructure and managed growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});
function ContactInquiryForm() {
  const submit = useServerFn(submitConsultation);
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      serviceNeeded,
      message: String(form.get("message") ?? ""),
      website: String(form.get("website") ?? ""),
    };

    const parsed = consultationSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      await submit({ data: parsed.data });
      formElement.reset();
      setServiceNeeded("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
        <span className="grid size-14 place-items-center rounded-full bg-accent text-accent-strong">
          <Check />
        </span>
        <h3 className="mt-6 text-2xl font-medium">Your request is in.</h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Thank you. Our team will review your request and follow up by email.
        </p>
        <Button className="mt-7 rounded-full" variant="outline" onClick={() => setStatus("idle")}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors["name"]}>
          <Input name="name" placeholder="Your full name" maxLength={100} className="h-12 rounded-xl" />
        </Field>
        <Field label="Company" error={errors["company"]}>
          <Input name="company" placeholder="Company name" maxLength={200} className="h-12 rounded-xl" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" error={errors["email"]}>
          <Input name="email" type="email" placeholder="you@company.com" maxLength={255} className="h-12 rounded-xl" />
        </Field>
        <Field label="Phone" error={errors["phone"]}>
          <Input name="phone" type="tel" placeholder="(555) 123-4567" maxLength={40} className="h-12 rounded-xl" />
        </Field>
      </div>

      <Field label="Service needed" error={errors["serviceNeeded"]}>
        <Select value={serviceNeeded} onValueChange={setServiceNeeded}>
          <SelectTrigger className="h-12 rounded-xl">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Store Management",
              "LLC Infrastructure",
              "Joint Venture",
            ].map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label="What are you looking to build?" error={errors["message"]}>
        <Textarea
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="Tell us about your current operation, target markets, and goals."
          className="min-h-36 resize-none rounded-xl"
        />
      </Field>

      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          We couldn’t save your request. Please try again or email {GLOBALDEALZ.email}.
        </p>
      )}

      <Button size="lg" className="w-full rounded-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string | undefined; children: ReactNode }) {
  return (
    <div>
      <Label className="mb-2 block">{label}</Label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <Link to="/">
            <BrandMark />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </div>
      </header>
      <main className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.95fr_1.05fr] md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase text-accent-strong">Contact</p>
          <h1 className="mt-5 text-5xl font-light">Let’s talk about what’s next.</h1>
          <p className="mt-6 leading-8 text-muted-foreground">
            For store operations, infrastructure, warehousing, and partnership inquiries, use the
            inquiry form or contact us directly.
          </p>

          <div className="mt-10 space-y-5">
            <ContactDetail icon={Mail} label="Email" value={GLOBALDEALZ.email} href={`mailto:${GLOBALDEALZ.email}`} />
            <ContactDetail icon={Phone} label="Phone" value={GLOBALDEALZ.phone} href={`tel:${GLOBALDEALZ.phone.replace(/[^+0-9]/g, "")}`} />
            <ContactDetail icon={MessageSquareText} label="WhatsApp" value="WhatsApp us" href={GLOBALDEALZ.whatsappUrl} />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <ContactInquiryForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ContactDetail({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value: string; href: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex items-start gap-4 rounded-2xl border border-border p-4 transition hover:border-cyan-400/40">
      <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-strong">
        <Icon className="size-4" />
      </span>
      <span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
        <span className="mt-1 block text-base text-foreground">{value}</span>
      </span>
    </a>
  );
}
