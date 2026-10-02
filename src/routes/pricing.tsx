import { createFileRoute, Link } from "@tanstack/react-router";
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
        <section className="grid-fade border-b border-border">
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
              className="mt-9"
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
                    ? "border-cyan-400/25 bg-cyan-500/5"
                    : "border-border bg-card"
                }`}
              >
                <p className="text-xs font-semibold uppercase text-accent-strong">Service tier</p>
                <h2 className="mt-4 text-3xl font-light">{tier.name}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{tier.summary}</p>
                <div className="mt-8 space-y-3">
                  {tier.items.map((item) => (
                    <p key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                      {item}
                    </p>
                  ))}
                </div>
                <Button
                  variant={index === 1 ? "default" : "outline"}
                  className="mt-9 w-full rounded-full"
                  onClick={() => import("@/lib/site-info").then((m) => m.openConsultation())}
                >
                  Discuss this tier
                </Button>
              </article>
            ))}
          </div>
        </section>
        <section className="border-y border-border bg-muted/45 py-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase text-accent-strong">Scope-based guidance</p>
            <h2 className="mt-4 text-4xl font-light">The right model depends on the operating need.</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              A consultation helps determine whether your requirement fits infrastructure, managed
              operations, or a strategic partnership model.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
