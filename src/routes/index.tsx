import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Building2, Check, ChevronRight, CircleDollarSign, Globe2, Handshake, Headphones, Landmark, PackageCheck, ShieldCheck, Sparkles, Store, Warehouse, type LucideIcon } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { consultationSchema, submitConsultation } from "@/lib/consultation.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GlobalDealzLLC | Global E-Commerce Infrastructure & Managed Growth" },
      { name: "description", content: "Scale global commerce with managed stores, verified US and UK infrastructure, payment gateways, warehousing, and joint venture partnerships." },
      { property: "og:title", content: "GlobalDealzLLC | Global E-Commerce Infrastructure & Managed Growth" },
      { property: "og:description", content: "The infrastructure, operations, and partnerships behind global e-commerce growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const platforms = ["Amazon", "eBay", "Etsy", "TikTok Shop", "Walmart", "Stripe", "Elevate Pay", "Payoneer"];
const services = [
  { icon: Store, title: "End-to-End Store Management", copy: "From product discovery to listings, support, and daily operations—handled as one growth system.", tag: "OPERATIONS", to: "/services" as const },
  { icon: Landmark, title: "Corporate Infrastructure & Banking", copy: "US LLC and UK LTD formation, verified payment rails, and secure remote access infrastructure.", tag: "FOUNDATION", to: "/infrastructure" as const },
  { icon: Warehouse, title: "Global Warehousing & 3PL", copy: "Flexible inventory positioning and fulfillment across four strategic international markets.", tag: "LOGISTICS", to: "/infrastructure" as const },
  { icon: Handshake, title: "B2B Joint Venture Partnerships", copy: "Aligned equity models pairing your capital or audience with our operating infrastructure.", tag: "PARTNERSHIPS", to: "/joint-ventures" as const },
];

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl pb-8 pt-8" aria-label="GlobalDealz sales performance dashboard illustration">
      <div className="absolute left-0 top-0 z-20 w-44 -rotate-6 rounded-2xl border border-border/70 bg-card/90 p-4 shadow-2xl backdrop-blur-xl sm:-left-8">
        <div className="flex items-center justify-between"><span className="text-xs text-muted-foreground">Payout</span><CircleDollarSign className="size-4 text-accent-strong" /></div>
        <p className="mt-4 text-xl font-semibold">$42,850</p><p className="mt-1 text-xs text-muted-foreground">Arrives tomorrow</p>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/85 p-4 shadow-[0_30px_80px_-35px_color-mix(in_oklab,var(--foreground)_30%,transparent)] backdrop-blur-xl sm:p-6">
        <div className="mb-6 flex items-center justify-between"><div><p className="text-xs text-muted-foreground">Consolidated revenue</p><p className="mt-1 text-2xl font-semibold">$1,284,680</p></div><span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">+24.8%</span></div>
        <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
          <div className="mb-5 flex items-center justify-between text-xs text-muted-foreground"><span>Net sales</span><span>Last 12 months</span></div>
          <svg viewBox="0 0 600 230" className="h-auto w-full" role="img" aria-label="Upward sales chart">
            {[40,90,140,190].map((y) => <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="currentColor" className="text-border" />)}
            <path d="M0 190 C55 182,85 145,130 158 S210 116,260 130 S350 65,410 92 S505 43,600 30 L600 230 L0 230Z" fill="color-mix(in oklab, var(--accent-strong) 16%, transparent)" />
            <path d="M0 190 C55 182,85 145,130 158 S210 116,260 130 S350 65,410 92 S505 43,600 30" fill="none" stroke="var(--accent-strong)" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {["6 live stores", "4 regions", "98.5% rating"].map((label) => <div key={label} className="rounded-xl border border-border bg-background/70 p-3 text-center text-xs text-muted-foreground">{label}</div>)}
        </div>
      </div>
      <div className="absolute -bottom-1 right-2 z-20 w-48 rotate-3 rounded-2xl border border-border/70 bg-primary p-4 text-primary-foreground shadow-2xl sm:-right-5">
        <div className="flex justify-between"><span className="text-xs opacity-70">GlobalDealz</span><Sparkles className="size-4" /></div><div className="mt-10 flex items-end justify-between"><span className="font-mono text-sm">•••• 7842</span><span className="text-xs opacity-70">VIRTUAL</span></div>
      </div>
    </div>
  );
}

function CountUp({ value, prefix = "", suffix = "" }: { value: number; prefix?: string | undefined; suffix?: string | undefined }) {
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1200, 1);
        setShown(value * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick); observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(node); return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{prefix}{Number.isInteger(value) ? Math.round(shown) : shown.toFixed(1)}{suffix}</span>;
}

function WorldMap() {
  const points = [{ x: 155, y: 122, label: "United States" }, { x: 355, y: 88, label: "United Kingdom" }, { x: 387, y: 105, label: "Germany" }, { x: 682, y: 250, label: "Australia" }];
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-8">
      <svg viewBox="0 0 800 360" className="w-full" role="img" aria-label="Warehouse network map with locations in the United States, United Kingdom, Germany, and Australia">
        <title>Global fulfillment network</title><desc>Active warehouse locations across the United States, United Kingdom, Germany, and Australia.</desc>
        <defs><pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.4" fill="currentColor" /></pattern><mask id="world"><path fill="currentColor" d="M35 90l95-55 122 16 52 57-30 47-61 20-32 76-83-15-20-75-53-30zm282-34l67-27 79 22 36 49 61 17 38 70-56 40-65-14-29 75-57-18-12-89-54-54zm241 67l92-47 83 26 47 70-43 38-43-26-31 10-48-37zm57 105l90-15 57 45-31 57-92-16-38-40z" /></mask></defs>
        <rect width="800" height="360" fill="url(#dots)" mask="url(#world)" className="text-dark-panel-foreground/25" />
        {points.map((p) => <g key={p.label} className="group cursor-pointer" tabIndex={0} role="button" aria-label={`${p.label} warehouse`}><circle cx={p.x} cy={p.y} r="16" fill="var(--accent-strong)" className="marker-ring" /><circle cx={p.x} cy={p.y} r="5" fill="var(--dark-panel-foreground)" /><g className="opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100"><rect x={p.x - 54} y={p.y - 42} width="108" height="27" rx="7" fill="var(--dark-panel-foreground)" /><text x={p.x} y={p.y - 24} textAnchor="middle" fill="var(--dark-panel)" fontSize="11" fontWeight="600">{p.label}</text></g></g>)}
      </svg>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{points.map((p) => <div key={p.label} className="flex items-center gap-2 text-xs text-white/65"><span className="size-1.5 rounded-full bg-accent-strong" />{p.label}</div>)}</div>
    </div>
  );
}

function ConsultationForm() {
  const submit = useServerFn(submitConsultation);
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = { name: String(form.get("name") ?? ""), email: String(form.get("email") ?? ""), serviceNeeded, message: String(form.get("message") ?? ""), website: String(form.get("website") ?? "") };
    const parsed = consultationSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {}; parsed.error.issues.forEach((issue) => { const key = String(issue.path[0]); if (!next[key]) next[key] = issue.message; }); setErrors(next); return;
    }
    setErrors({}); setStatus("submitting");
    try { await submit({ data: parsed.data }); formElement.reset(); setServiceNeeded(""); setStatus("success"); }
    catch { setStatus("error"); }
  };
  if (status === "success") return <div className="flex min-h-96 flex-col items-center justify-center text-center"><span className="grid size-14 place-items-center rounded-full bg-accent text-accent-strong"><Check /></span><h3 className="mt-6 text-2xl font-medium">Your request is in.</h3><p className="mt-3 max-w-sm text-muted-foreground">Thank you. Our team will review your goals and follow up at the email you provided.</p><Button className="mt-7 rounded-full" variant="outline" onClick={() => setStatus("idle")}>Send another request</Button></div>;
  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2"><Field label="Name" error={errors["name"]}><Input name="name" placeholder="Your full name" maxLength={100} className="h-12 rounded-xl bg-background" /></Field><Field label="Email" error={errors["email"]}><Input name="email" type="email" placeholder="you@company.com" maxLength={255} className="h-12 rounded-xl bg-background" /></Field></div>
      <Field label="Service needed" error={errors["serviceNeeded"]}><Select value={serviceNeeded} onValueChange={setServiceNeeded}><SelectTrigger className="h-12 rounded-xl bg-background"><SelectValue placeholder="Select a service" /></SelectTrigger><SelectContent>{["Store Management", "LLC Infrastructure", "Joint Venture"].map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select></Field>
      <Field label="What are you looking to build?" error={errors["message"]}><Textarea name="message" rows={5} maxLength={2000} placeholder="Tell us about your current operation, target markets, and goals." className="min-h-36 resize-none rounded-xl bg-background" /></Field>
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {status === "error" && <p className="text-sm text-destructive" role="alert">We couldn’t save your request. Please try again or email info@globaldealzllc.site.</p>}
      <Button size="lg" className="w-full rounded-full" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Book a Consultation"}<ArrowRight /></Button>
      <p className="text-center text-xs text-muted-foreground">By submitting, you agree to our Privacy Policy and Terms of Service.</p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string | undefined; children: React.ReactNode }) { return <div><Label className="mb-2 block">{label}</Label>{children}{error && <p className="mt-1.5 text-xs text-destructive" role="alert">{error}</p>}</div>; }

function HomePage() {
  return <div className="overflow-x-hidden bg-background text-foreground">
    <SiteHeader />
    <main>
      <section id="home" className="grid-fade relative flex min-h-[760px] scroll-mt-20 items-center border-b border-border pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,color-mix(in_oklab,var(--accent-strong)_12%,transparent),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
          <div className="reveal"><p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase text-accent-strong"><Globe2 className="size-4" />Commerce without borders</p><h1 className="max-w-2xl text-5xl font-light leading-[1.08] sm:text-6xl lg:text-7xl">Global E-Commerce Infrastructure & Managed Growth <span className="text-muted-foreground">for Scale</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">We empower store owners and B2B partners with complete IaaS solutions: US LLC / UK LTD setups, verified payment gateways, global warehousing, and end-to-end operations across the world’s leading marketplaces.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/joint-ventures">Partner With Us<ArrowRight /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/services">View Services</Link></Button></div><div className="mt-10 flex flex-wrap gap-5 text-xs text-muted-foreground">{["Verified infrastructure", "Four warehouse markets", "24/7 operations"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="size-4 text-accent-strong" />{item}</span>)}</div></div>
          <DashboardMockup />
        </div>
      </section>

      <section aria-label="Supported commerce ecosystem" className="border-b border-border py-8"><p className="mb-6 text-center text-xs font-semibold uppercase text-muted-foreground">Built for the platforms that move commerce</p><div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"><div className="marquee-track flex w-max items-center">{[...platforms, ...platforms].map((name, i) => <div key={`${name}-${i}`} className="mx-8 flex items-center gap-2 text-lg font-semibold text-muted-foreground grayscale transition hover:text-foreground hover:grayscale-0"><span className="size-2 rounded-full bg-accent-strong" />{name}</div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase text-accent-strong">Built around your ambition</p><h2 className="mt-4 text-4xl font-light leading-tight sm:text-5xl">Infrastructure that meets you where you are—and carries you further.</h2></div><div className="mt-14 grid gap-5 md:grid-cols-2"><AudienceCard icon={Store} label="For store owners" title="Stay focused on scale." copy="We take ownership of product listing, search optimization, 24/7 customer support, and logistics while you lead growth." items={["Marketplace operations", "Search-led listings", "Customer experience"]} /><AudienceCard icon={Handshake} label="For investors & partners" title="Put proven infrastructure to work." copy="Launch high-converting joint venture stores through our verified US and UK entities, payment rails, and warehousing network." items={["Aligned equity models", "Verified entities", "Transparent reporting"]} /></div></section>

      <section id="services" className="scroll-mt-20 border-y border-border bg-muted/45 py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase text-accent-strong">Core services</p><h2 className="mt-4 max-w-2xl text-4xl font-light sm:text-5xl">Four pillars. One operating system for growth.</h2></div><p className="max-w-md text-sm leading-7 text-muted-foreground">Choose a single capability or connect every layer into an end-to-end commerce engine.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2">{services.map(({ icon: Icon, title, copy, tag, to }) => <article key={title} className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-strong"><Icon /></span><span className="text-[10px] font-semibold text-muted-foreground">{tag}</span></div><h3 className="mt-10 text-xl font-medium">{title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">{copy}</p><Link to={to} className="mt-8 flex items-center gap-2 text-sm font-semibold text-accent-strong">Explore capability<ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></article>)}</div></div></section>

      <section id="infrastructure" className="scroll-mt-20 bg-dark-panel py-24 text-dark-panel-foreground lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><p className="text-sm font-semibold uppercase text-accent-strong">Global warehousing network</p><h2 className="mt-4 text-4xl font-light sm:text-5xl">Local fulfillment. Global reach.</h2><p className="mt-6 max-w-md text-sm leading-7 text-dark-panel-foreground/60">Position inventory closer to customers, reduce delivery friction, and coordinate fulfillment through one connected operating layer.</p></div><WorldMap /></div></div></section>

      <section id="joint-ventures" className="scroll-mt-20 mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="text-center"><p className="text-sm font-semibold uppercase text-accent-strong">How to get started</p><h2 className="mt-4 text-4xl font-light sm:text-5xl">From model to momentum.</h2></div><div className="relative mt-16 grid gap-8 md:grid-cols-3"><div className="absolute left-[16.5%] right-[16.5%] top-6 hidden h-px bg-border md:block" />{[["01", "Select Your Model", "Choose standalone infrastructure services or complete store handling."], ["02", "Onboarding & Setup", "We align account formation, payment gateways, and warehouse systems."], ["03", "Launch & Scale", "Product hunting, listing optimization, and operations move into execution."]].map(([number,title,copy]) => <article key={number} className="relative"><span className="relative z-10 grid size-12 place-items-center rounded-full border border-border bg-background text-sm font-semibold text-accent-strong">{number}</span><h3 className="mt-7 text-xl font-medium">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p></article>)}</div></section>

      <section id="results" className="scroll-mt-20 border-y border-border bg-muted/45 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">{[{v:5,p:"$",s:"M+",l:"Sales processed"},{v:4,s:"+",l:"Global warehouses"},{v:98.5,s:"%",l:"Positive feedback"},{v:17,s:"+",l:"Peak ROAS"}].map((m) => <div key={m.l} className="bg-background p-6 sm:p-8"><p className="text-3xl font-light sm:text-4xl"><CountUp value={m.v} prefix={m.p} suffix={m.s} /></p><p className="mt-3 text-xs text-muted-foreground sm:text-sm">{m.l}</p></div>)}</div></div></section>

      <section id="consultation" className="scroll-mt-20 py-24 lg:py-32"><div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="text-sm font-semibold uppercase text-accent-strong">Start a conversation</p><h2 className="mt-4 text-4xl font-light sm:text-5xl">Build your next market with the right foundation.</h2><p className="mt-6 text-sm leading-7 text-muted-foreground">Tell us what you’re working toward. We’ll identify the infrastructure, operating model, and partnership path that fits.</p><div className="mt-10 space-y-4">{([{ icon: ShieldCheck, label: "Verified business setup" }, { icon: Headphones, label: "Operational support around the clock" }, { icon: PackageCheck, label: "Warehousing across key markets" }] satisfies { icon: LucideIcon; label: string }[]).map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3 text-sm"><Icon className="size-5 text-accent-strong" />{label}</div>)}</div></div><div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-9"><ConsultationForm /></div></div></section>
    </main><SiteFooter />
  </div>;
}

function AudienceCard({ icon: Icon, label, title, copy, items }: { icon: typeof Building2; label: string; title: string; copy: string; items: string[] }) {
  return <article className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9"><div className="flex items-center gap-3 text-sm font-semibold text-accent-strong"><span className="grid size-10 place-items-center rounded-xl bg-accent"><Icon className="size-5" /></span>{label}</div><h3 className="mt-10 text-3xl font-light">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p><div className="mt-8 grid gap-3">{items.map((item) => <span key={item} className="flex items-center gap-2 border-t border-border pt-3 text-sm"><Check className="size-4 text-accent-strong" />{item}</span>)}</div></article>;
}