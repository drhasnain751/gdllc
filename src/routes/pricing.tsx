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

const offers = [
  {
    name: "Managed Commerce",
    copy: "For owners who want an operating team across store setup and daily execution.",
    includes: [
      "Product and catalog workflows",
      "Listings and optimization",
      "Customer and operational support",
    ],
  },
  {
    name: "Infrastructure",
    copy: "For operators who need a compliant international commerce foundation.",
    includes: ["US LLC or UK LTD coordination", "Payment readiness", "Remote-access setup"],
  },
  {
    name: "Warehousing & 3PL",
    copy: "For brands positioning inventory closer to customers in priority markets.",
    includes: ["Warehouse matching", "Inventory coordination", "Fulfillment workflow planning"],
  },
  {
    name: "Joint Venture",
    copy: "For qualified partners combining capital, distribution, or audience with our operations.",
    includes: ["Opportunity assessment", "Partnership structuring", "Operations and reporting"],
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main className="pt-20">
        <section className="grid-fade border-b border-border">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-accent-strong">
              <CircleDollarSign className="size-5" />
              Custom pricing
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-light leading-[1.08] sm:text-6xl lg:text-7xl">
              A proposal shaped around the work—not a generic package.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Your quote reflects the markets, channels, infrastructure, inventory footprint, and
              level of operating support involved.
            </p>
            <Button asChild size="lg" className="mt-9">
              <Link to="/" hash="consultation">
                Request a proposal
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-5 md:grid-cols-2">
            {offers.map((offer) => (
              <article
                key={offer.name}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9"
              >
                <p className="text-xs font-semibold uppercase text-accent-strong">Custom quote</p>
                <h2 className="mt-4 text-3xl font-light">{offer.name}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{offer.copy}</p>
                <div className="mt-8 space-y-3">
                  {offer.includes.map((item) => (
                    <p key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                      {item}
                    </p>
                  ))}
                </div>
                <Button asChild variant="outline" className="mt-9">
                  <Link to="/" hash="consultation">
                    Discuss this service
                    <ArrowRight />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </section>
        <section className="border-y border-border bg-muted/45 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase text-accent-strong">
                How quotes are built
              </p>
              <h2 className="mt-4 text-4xl font-light">The variables that shape your proposal.</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {[
                "Number of stores and marketplaces",
                "Countries and entity requirements",
                "Catalog size and operating volume",
                "Warehouse regions and inventory flow",
                "Required setup and integrations",
                "Partnership scope and responsibilities",
              ].map((item, index) => (
                <div key={item} className="bg-background p-6">
                  <span className="text-xs font-semibold text-accent-strong">0{index + 1}</span>
                  <p className="mt-3 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 text-center lg:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-4xl font-light">Get a clear scope before you commit.</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              A consultation helps us understand the work, assess fit, and prepare a tailored
              proposal without inventing a one-size-fits-all price.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/" hash="consultation">
                Book a Consultation
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
