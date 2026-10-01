import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  Globe2,
  Handshake,
  Headphones,
  Landmark,
  Mail,
  MessageSquareText,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

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
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { consultationSchema, submitConsultation } from "@/lib/consultation.functions";
import { GLOBALDEALZ, getCalendlyUrl } from "@/lib/site-info";
import { Hero3D } from "@/components/hero3d/Hero3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GlobalDealz LLC | Global E-Commerce Infrastructure & Managed Growth" },
      {
        name: "description",
        content:
          "Scale global commerce with managed stores, multi-market infrastructure, payment gateways, warehousing, and strategic partnership models.",
      },
      {
        property: "og:title",
        content: "GlobalDealz LLC | Global E-Commerce Infrastructure & Managed Growth",
      },
      {
        property: "og:description",
        content:
          "The infrastructure, operations, and partnerships behind global e-commerce growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const platforms = [
  "Amazon",
  "eBay",
  "Etsy",
  "TikTok Shop",
  "Walmart",
  "Stripe",
  "Elevate Pay",
  "Payoneer",
];
const services = [
  {
    icon: Store,
    title: "Product Research & Market Intelligence",
    copy:
      "Evaluate demand, competition, margins, and channel fit before launching into a new market or product category.",
    tag: "INTELLIGENCE",
    to: "/services" as const,
  },
  {
    icon: Landmark,
    title: "Corporate Infrastructure & Banking Coordination",
    copy:
      "Coordinate entity setup, multi-market access, and payment infrastructure planning around business requirements.",
    tag: "FOUNDATION",
    to: "/infrastructure" as const,
  },
  {
    icon: Warehouse,
    title: "Warehousing & Fulfillment Operations",
    copy:
      "Align inventory and fulfillment sequence across key growth markets to improve availability and reduce operational friction.",
    tag: "LOGISTICS",
    to: "/infrastructure" as const,
  },
  {
    icon: Handshake,
    title: "B2B Joint Venture Partnerships",
    copy:
      "Pair capital, audience, or operational capacity with GlobalDealz infrastructure and execution support in a defined model.",
    tag: "PARTNERSHIPS",
    to: "/joint-ventures" as const,
  },
];

function DashboardMockup() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 18, y: -18, z: 0 });
  const [scale, setScale] = useState(0.82);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const handle = () => {
      const rect = frame.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));

      setRotation({
        x: 20 - progress * 26,
        y: -22 + progress * 28,
        z: progress * 7,
      });
      setScale(0.82 + progress * 0.7);
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setPointer({
      x: (px - 0.5) * 18,
      y: (0.5 - py) * 18,
    });
  };

  const panelStyle = {
    transform: `perspective(1200px) rotateX(${rotation.x + pointer.y}deg) rotateY(${rotation.y + pointer.x}deg) rotateZ(${rotation.z}deg) scale(${scale})`,
  };

  return (
    <div
      className="hero-stage relative mx-auto w-full max-w-[620px] pt-4"
      ref={frameRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="relative" style={panelStyle}>
        <div className="hero-panel relative overflow-hidden rounded-[30px] border border-white/10 bg-[#091a32]/85 p-4 shadow-[0_40px_110px_rgba(0,178,238,0.18)] backdrop-blur-2xl sm:p-6">
          <div className="hero-grid-sheen absolute inset-0" />
          <div className="absolute inset-x-10 top-0 h-20 rounded-full bg-[radial-gradient(circle,rgba(0,178,238,0.48),transparent_70%)] blur-3xl" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300/80">
                  Portfolio overview
                </p>
                <p className="mt-2 text-3xl font-light text-white">$128,420</p>
              </div>
              <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
                +18.4%
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-slate-300/75">
                <span>Net sales</span>
                <span>Last 12 months</span>
              </div>
              <svg viewBox="0 0 600 220" className="h-auto w-full" role="img" aria-label="Sales chart">
                {[30, 80, 130, 180].map((y) => (
                  <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(148,163,184,0.2)" />
                ))}
                <path
                  d="M0 155 C50 150,90 118,130 126 S215 110,270 120 S355 78,420 96 S505 52,600 30 L600 220 L0 220Z"
                  fill="rgba(0,178,238,0.12)"
                />
                <path
                  d="M0 155 C50 150,90 118,130 126 S215 110,270 120 S355 78,420 96 S505 52,600 30"
                  fill="none"
                  stroke="#52d3ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-slate-300/80">
              {[
                { label: "Orders", value: "1,842" },
                { label: "Inventory", value: "94.2%" },
                { label: "Fulfillment", value: "98.7%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-center"
                >
                  <p className="text-base font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-300/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-floating-card absolute -left-2 top-20 w-40 -rotate-12 rounded-2xl border border-cyan-400/25 bg-slate-900/85 p-4 shadow-2xl backdrop-blur-xl sm:-left-6">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-300/75">Payout</span>
            <CircleDollarSign className="size-4 text-cyan-300" />
          </div>
          <p className="mt-4 text-xl font-semibold text-white">$42,850</p>
          <p className="mt-1 text-[10px] text-slate-300/65">Arrives tomorrow</p>
        </div>

        <div className="hero-floating-card hero-floating-card-alt absolute -bottom-2 right-2 w-52 rotate-3 rounded-2xl border border-cyan-400/30 bg-[#05152e] p-4 text-white shadow-2xl sm:-right-3">
          <div className="flex justify-between">
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-300/75">
              GlobalDealz
            </span>
            <Sparkles className="size-4 text-cyan-300" />
          </div>
          <div className="mt-10 flex items-end justify-between">
            <span className="font-mono text-sm">•••• 7842</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-300/70">Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CountUp({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string | undefined;
  suffix?: string | undefined;
}) {
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1400, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setShown(value * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {Number.isInteger(value) ? Math.round(shown) : shown.toFixed(1)}
      {suffix}
    </span>
  );
}

function WorldMap() {
  const markets = [
    { x: 155, y: 122, label: "United States" },
    { x: 355, y: 88, label: "United Kingdom" },
    { x: 387, y: 105, label: "Germany" },
    { x: 682, y: 250, label: "Australia" },
  ];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 sm:p-8">
      <div className="relative">
        <svg
          viewBox="0 0 800 360"
          className="w-full"
          role="img"
          aria-label="Global network map with locations in the United States, United Kingdom, Germany, and Australia"
        >
          <title>Global fulfillment network</title>
          <desc>Illustrative network connections across key commerce markets.</desc>
          <defs>
            <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="currentColor" />
            </pattern>
            <mask id="world">
              <path
                fill="currentColor"
                d="M35 90l95-55 122 16 52 57-30 47-61 20-32 76-83-15-20-75-53-30zm282-34l67-27 79 22 36 49 61 17 38 70-56 40-65-14-29 75-57-18-12-89-54-54zm241 67l92-47 83 26 47 70-43 38-43-26-31 10-48-37zm57 105l90-15 57 45-31 57-92-16-38-40z"
              />
            </mask>
          </defs>
          <rect width="800" height="360" fill="url(#dots)" mask="url(#world)" className="text-dark-panel-foreground/25" />
          <path d="M155 122 C260 118, 310 96, 355 88 S396 98, 387 105 S520 156, 682 250" fill="none" stroke="rgba(56,189,248,0.55)" strokeWidth="2.5" strokeDasharray="6 8" />
          {markets.map((p) => (
            <g key={p.label} className="group cursor-pointer" tabIndex={0} role="button" aria-label={`${p.label} market` }>
              <circle cx={p.x} cy={p.y} r="16" fill="rgba(56,189,248,0.22)" className="marker-ring" />
              <circle cx={p.x} cy={p.y} r="5" fill="var(--dark-panel-foreground)" />
              <circle cx={p.x} cy={p.y} r="18" fill="rgba(56,189,248,0.08)" className="group-hover:opacity-100 opacity-0 transition-opacity" />
              <g className="opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                <rect x={p.x - 54} y={p.y - 42} width="108" height="27" rx="7" fill="var(--dark-panel-foreground)" />
                <text x={p.x} y={p.y - 24} textAnchor="middle" fill="var(--dark-panel)" fontSize="11" fontWeight="600">{p.label}</text>
              </g>
            </g>
          ))}
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {markets.map((p) => (
          <button key={p.label} type="button" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 text-left text-xs text-white/70 transition hover:border-cyan-400/30 hover:text-white">
            <span className="size-1.5 rounded-full bg-accent-strong" />
            {p.label}
          </button>
        ))}
      </div>
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
      <div className="flex min-h-96 flex-col items-center justify-center text-center">
        <span className="grid size-14 place-items-center rounded-full bg-accent text-accent-strong">
          <Check />
        </span>
        <h3 className="mt-6 text-2xl font-medium">Your request is in.</h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Thank you. Our team will review your goals and follow up at the email you provided.
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
          <Input
            name="name"
            placeholder="Your full name"
            maxLength={100}
            className="h-12 rounded-xl bg-background"
          />
        </Field>
        <Field label="Company" error={errors["company"]}>
          <Input
            name="company"
            placeholder="Company name"
            maxLength={200}
            className="h-12 rounded-xl bg-background"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" error={errors["email"]}>
          <Input
            name="email"
            type="email"
            placeholder="you@company.com"
            maxLength={255}
            className="h-12 rounded-xl bg-background"
          />
        </Field>
        <Field label="Phone" error={errors["phone"]}>
          <Input
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            maxLength={40}
            className="h-12 rounded-xl bg-background"
          />
        </Field>
      </div>

      <Field label="Service needed" error={errors["serviceNeeded"]}>
        <Select value={serviceNeeded} onValueChange={setServiceNeeded}>
          <SelectTrigger className="h-12 rounded-xl bg-background">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {["Store Management", "LLC Infrastructure", "Joint Venture"].map((item) => (
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
          className="min-h-36 resize-none rounded-xl bg-background"
        />
      </Field>

      <input
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          We couldn’t save your request. Please try again or email {GLOBALDEALZ.email}.
        </p>
      )}

      <Button size="lg" className="w-full rounded-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Book a Consultation"}
        <ArrowRight />
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
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

function HomePage() {
  const calendlyUrl = getCalendlyUrl();

  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main>
        <section id="home" className="grid-fade relative flex min-h-[760px] scroll-mt-20 items-center border-b border-border pt-28">
          <div className="hero-glow absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(0,178,238,0.18),transparent_36%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
            <div className="reveal">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-950/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                <Globe2 className="size-4" />
                Global commerce infrastructure
              </p>
              <h1 className="max-w-2xl text-5xl font-light leading-[1.08] sm:text-6xl lg:text-7xl">
                Global E-Commerce Infrastructure, Built to Scale
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                GlobalDealz LLC provides the operational infrastructure businesses need to establish,
                manage, and scale cross-border e-commerce operations across multiple markets.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a
                    href={calendlyUrl}
                    target={calendlyUrl.startsWith("http") ? "_blank" : undefined}
                    rel={calendlyUrl.startsWith("http") ? "noreferrer" : undefined}
                  >
                    Book a Consultation
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/infrastructure">Explore Infrastructure</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="rounded-full">
                  <a href={GLOBALDEALZ.whatsappUrl} target="_blank" rel="noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-5 text-xs text-muted-foreground">
                {[
                  "Global commerce infrastructure",
                  "Multi-market operations",
                  "24/7 operational support",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-cyan-300" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <DashboardMockup />
          </div>
        </section>

        <section aria-label="Supported commerce ecosystem" className="border-b border-border py-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Built for the platforms that move commerce
          </p>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track flex w-max items-center">
              {[...platforms, ...platforms].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="mx-8 flex items-center gap-2 text-lg font-semibold text-muted-foreground grayscale transition hover:text-foreground hover:grayscale-0"
                >
                  <span className="size-2 rounded-full bg-cyan-300" />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Built around your ambition
            </p>
            <h2 className="mt-4 text-4xl font-light leading-tight sm:text-5xl">
              Infrastructure that meets you where you are—and carries you further.
            </h2>
            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              We help companies establish the right operating foundation before growth gets complex.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <AudienceCard
              icon={Store}
              label="For operators"
              title="Stay focused on scale."
              copy="We bring structure to product discovery, sourcing coordination, marketplace execution, and operational support so your team can focus on growth."
              items={["Marketplace operations", "Search-led listings", "Customer experience"]}
            />
            <AudienceCard
              icon={Handshake}
              label="For investors & partners"
              title="Put the right infrastructure behind the model."
              copy="Launch globally structured commercial relationships with a clearer foundation for entity setup, fulfillment, and operational reporting."
              items={["Aligned commercial models", "Operating infrastructure", "Transparent reporting"]}
            />
          </div>
        </section>

        <section id="services" className="scroll-mt-20 border-y border-border bg-muted/45 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Core services
                </p>
                <h2 className="mt-4 max-w-2xl text-4xl font-light sm:text-5xl">
                  Four pillars. One operating system for growth.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                Choose a single capability or connect every layer into an end-to-end commerce engine.
              </p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {services.map(({ icon: Icon, title, copy, tag, to }) => (
                <article
                  key={title}
                  className="tilt-card surface-3d group relative rounded-[28px] border border-border bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-cyan-400/12 text-cyan-300">
                      <Icon />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {tag}
                    </span>
                  </div>
                  <h3 className="mt-10 text-xl font-medium">{title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">{copy}</p>
                  <Link
                    to={to}
                    className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-300"
                  >
                    Explore capability
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="infrastructure" className="scroll-mt-20 bg-dark-panel py-24 text-dark-panel-foreground lg:py-32">
          <div className="surface-3d mx-auto max-w-7xl rounded-[32px] border border-white/10 px-5 py-8 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Global infrastructure
                </p>
                <h2 className="mt-4 text-4xl font-light sm:text-5xl">
                  Local execution. Global reach.
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-dark-panel-foreground/65">
                  Position inventory closer to markets, coordinate fulfillment more deliberately, and
                  scale operations through one connected environment.
                </p>
              </div>
              <WorldMap />
            </div>
          </div>
        </section>

        <section id="joint-ventures" className="scroll-mt-20 mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              How to get started
            </p>
            <h2 className="mt-4 text-4xl font-light sm:text-5xl">From model to momentum.</h2>
          </div>
          <div className="relative mt-16 grid gap-8 md:grid-cols-3">
            <div className="absolute left-[16.5%] right-[16.5%] top-6 hidden h-px bg-border md:block" />
            {[
              ["01", "Select Your Model", "Choose standalone infrastructure services or a more complete operating model."],
              ["02", "Onboarding & Setup", "We align company structure, payment infrastructure, and warehouse alignment for your route to market."],
              ["03", "Launch & Scale", "Product research, marketplace operation, and operational oversight move into execution."],
            ].map(([number, title, copy]) => (
              <article key={number} className="step-card relative rounded-[28px] border border-border bg-card p-7 shadow-sm">
                <span className="relative z-10 grid size-12 place-items-center rounded-full border border-border bg-background text-sm font-semibold text-cyan-300">
                  {number}
                </span>
                <h3 className="mt-7 text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="results" className="scroll-mt-20 border-y border-border bg-muted/45 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Illustrative performance snapshot
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-border bg-border lg:grid-cols-4">
              {[
                { v: 2.5, p: "$", s: "M+", l: "Sales processed" },
                { v: 4, s: "", l: "Strategic markets" },
                { v: 98.5, s: "%", l: "Positive rating" },
                { v: 3.8, s: "x", l: "Peak ROAS" },
              ].map((m) => (
                <div key={m.l} className="stat-card bg-background p-6 sm:p-8">
                  <p className="text-3xl font-light sm:text-4xl">
                    <CountUp value={m.v} prefix={m.p} suffix={m.s} />
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground sm:text-sm">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-slate-950/90 py-24 text-white lg:py-32">
          <div className="surface-3d mx-auto grid max-w-7xl gap-8 rounded-[32px] border border-cyan-400/15 bg-white/5 px-5 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="rounded-[28px] border border-cyan-400/20 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,178,238,0.08)] backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Official Company Information
              </p>
              <h2 className="mt-5 text-4xl font-light text-white">GlobalDealz LLC</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                GlobalDealz LLC is a US-registered business operating from Pinedale, Wyoming, and
                supporting cross-border e-commerce growth through infrastructure, operations, and market
                execution support.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="size-4 text-cyan-300" />
                  <a href={`mailto:${GLOBALDEALZ.email}`} className="hover:text-white">
                    {GLOBALDEALZ.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MessageSquareText className="size-4 text-cyan-300" />
                  <a href={GLOBALDEALZ.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                    {GLOBALDEALZ.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Building2, label: "Legal Name", value: "GlobalDealz LLC" },
                { icon: Globe2, label: "Jurisdiction", value: "Pinedale, Wyoming, USA" },
                { icon: ShieldCheck, label: "Entity Registration ID", value: "XX-XXX0316" },
                { icon: Landmark, label: "Registered Address", value: "34 N Franklin Ave Ste 687\nPinedale, WY 82941, USA" },
                { icon: Mail, label: "Contact Email", value: "info@globaldealzllc.site" },
                { icon: Headphones, label: "Support Phone", value: "+1 (901) 443-2051" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="tilt-card rounded-[22px] border border-cyan-400/15 bg-white/5 p-5">
                  <div className="flex items-center gap-3 text-cyan-300">
                    <Icon className="size-4" />
                    <span className="text-[10px] uppercase tracking-[0.18em]">{label}</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-100 whitespace-pre-line">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="consultation" className="scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Start a conversation
              </p>
              <h2 className="mt-4 text-4xl font-light sm:text-5xl">
                Build your next market with the right foundation.
              </h2>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                Tell us what you’re working toward. We’ll identify the infrastructure, operating
                model, and partnership path that fits.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  { icon: ShieldCheck, label: "Business setup coordination" },
                  { icon: Headphones, label: "Operational support around the clock" },
                  { icon: PackageCheck, label: "Warehousing across key markets" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <Icon className="size-5 text-cyan-300" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-3d rounded-[28px] border border-border bg-card p-6 shadow-xl sm:p-9">
              <ConsultationForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function AudienceCard({
  icon: Icon,
  label,
  title,
  copy,
  items,
}: {
  icon: typeof Building2;
  label: string;
  title: string;
  copy: string;
  items: string[];
}) {
  return (
    <article className="rounded-[28px] border border-border bg-card p-7 shadow-sm sm:p-9">
      <div className="flex items-center gap-3 text-sm font-semibold text-accent-strong">
        <span className="grid size-10 place-items-center rounded-xl bg-accent">
          <Icon className="size-5" />
        </span>
        {label}
      </div>
      <h3 className="mt-10 text-3xl font-light">{title}</h3>
      <div className="mt-8 grid gap-3">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-2 border-t border-border pt-3 text-sm">
            <Check className="size-4 text-accent-strong" />
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
