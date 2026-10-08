import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, CircleDollarSign } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Custom Pricing | GlobalDealzLLC" },
      {
        name: "description",
        content:
          "Request a custom GlobalDealzLLC proposal for managed stores, commerce infrastructure, warehousing, or joint ventures.",
      },
      { property: "og:title", content: "Custom Pricing | GlobalDealzLLC" },
      {
        property: "og:description",
        content: "Clear, scope-based proposals for global commerce services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PricingPage,
});

const pricingTiers = [
  {
    name: "Core Infrastructure",
    price: "$499",
    priceSubtitle: "deposit",
    summary: "For businesses that need the right foundation before operating across marketplaces and regions.",
    items: [
      "Entity and structure planning",
      "Market readiness and operational setup",
      "Platform and payment infrastructure alignment",
      "Implementation planning and scope review",
    ],
  },
  {
    name: "Managed Operations & Sourcing",
    price: "$999",
    priceSubtitle: "deposit",
    summary: "For teams that need execution support across listings, catalog, sourcing, and ongoing operations.",
    items: [
      "Catalog and marketplace operational support",
      "Sourcing coordination and product workflows",
      "Inventory and fulfillment planning support",
      "Ongoing operational oversight and reporting",
    ],
  },
  {
    name: "Joint Venture Strategic Growth",
    price: "Custom",
    priceSubtitle: "quote",
    summary: "For qualified partners combining capital, audience, or operational capability with GlobalDealz infrastructure.",
    items: [
      "Partnership fit assessment",
      "Commercial model and role alignment",
      "Launch planning and operating coordination",
      "Execution support with clear reporting structure",
    ],
  },
] as const;

function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main className="pt-20">
        <section className="border-b border-border bg-white/2">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-accent-strong">
              <CircleDollarSign className="size-5" />
              Pricing
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-light leading-[1.08] sm:text-6xl lg:text-7xl">
              Three paths to support your next phase of growth.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Scope is tailored to the market, operating model, and level of support required. No
              fixed-price package is implied.
            </p>
            <Button
              size="lg"
              className="mt-9 rounded-full"
              onClick={() => {
                import("@/lib/site-info").then((m) => m.openConsultation());
              }}
            >
              Book a Consultation
            </Button>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <article
                key={tier.name}
                className={`depth-card rounded-[30px] border p-7 shadow-sm sm:p-9 ${
                  index === 1
                    ? "border-border/80 bg-white/8"
                    : "border-border bg-card"
                }`}
              >
                <p className="text-xs font-semibold uppercase text-accent-strong">Service tier</p>
                <h2 className="mt-4 text-3xl font-light">{tier.name}</h2>
                
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">/ {tier.priceSubtitle}</span>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">{tier.summary}</p>
                <div className="mt-8 space-y-3">
                  {tier.items.map((item) => (
                    <p key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                      {item}
                    </p>
                  ))}
                </div>
                
                <div className="mt-9 space-y-3">
                  {index === 2 ? (
                    <>
                      <Button
                        variant="outline"
                        className="w-full rounded-full"
                        onClick={() => import("@/lib/site-info").then((m) => m.openConsultation())}
                      >
                        Request Custom Quote
                      </Button>
                      <Button
                        variant="default"
                        className="w-full rounded-full"
                        onClick={() => window.location.href = "/checkout"}
                      >
                        Pay Custom Deposit
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant={index === 1 ? "default" : "outline"}
                        className="w-full rounded-full"
                        onClick={() => window.location.href = "/checkout"}
                      >
                        Pay Deposit
                      </Button>
                      <Button
                        variant={index === 1 ? "outline" : "outline"}
                        className="w-full rounded-full"
                        onClick={() => import("@/lib/site-info").then((m) => m.openConsultation())}
                      >
                        Discuss this tier
                      </Button>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/2 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
                  Scope-based guidance
                </p>
                <h2 className="mt-4 text-4xl font-light text-foreground">The right model depends on the need.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                We help decide whether the requirement is best supported through infrastructure, day-to-day operations, or a structured partnership model.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_40px_100px_rgba(15,23,42,0.14)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.08),transparent_35%)]" />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
                  alt="Commercial planning and strategic review"
                  className="h-[420px] w-full object-cover opacity-90"
                />
              </div>

              <div className="grid gap-5">
                {[
                  "Infrastructure for market readiness",
                  "Operations support for execution",
                  "Warehousing and fulfillment planning",
                  "Strategic joint venture structure",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm text-muted-foreground shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase text-accent-strong">Scope-based guidance</p>
          <h2 className="mt-4 text-4xl font-light">The right model depends on the operating need.</h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            A consultation helps determine whether your requirement fits infrastructure, managed operations, or a strategic partnership model.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-full"
            onClick={() => import("@/lib/site-info").then((m) => m.openConsultation())}
          >
            Request a Proposal
            <ArrowRight />
          </Button>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
