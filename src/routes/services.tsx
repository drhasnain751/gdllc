import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Landmark, Store, Warehouse } from "lucide-react";

import { BusinessPage } from "@/components/business-page";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "E-Commerce Services | GlobalDealzLLC" },
      {
        name: "description",
        content:
          "Explore managed stores, corporate infrastructure, global fulfillment, and joint venture services from GlobalDealzLLC.",
      },
      { property: "og:title", content: "E-Commerce Services | GlobalDealzLLC" },
      {
        property: "og:description",
        content: "A connected operating system for global e-commerce growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <BusinessPage
      eyebrow="Services"
      title="The operating capabilities behind durable commerce growth."
      intro="Choose one focused capability or connect formation, finance, fulfillment, and daily operations into one managed system."
      features={[
        {
          icon: Store,
          eyebrow: "Operations",
          title: "End-to-end store management",
          copy: "A hands-on operating layer for marketplace stores, built around disciplined execution and clear reporting.",
          points: [
            "Product research and catalog planning",
            "Listing creation and search optimization",
            "Customer support and daily account operations",
          ],
          image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          icon: Landmark,
          eyebrow: "Foundation",
          title: "Corporate infrastructure",
          copy: "Practical support for establishing the entities and payment foundations required for international commerce.",
          points: [
            "US LLC and UK LTD setup coordination",
            "Payment gateway readiness",
            "Secure remote-access infrastructure",
          ],
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          icon: Warehouse,
          eyebrow: "Fulfillment",
          title: "Warehousing and 3PL",
          copy: "Inventory placement and fulfillment coordination across strategically selected markets.",
          points: [
            "United States and United Kingdom coverage",
            "Germany and Australia coverage",
            "Inventory and dispatch coordination",
          ],
          image: "https://images.pexels.com/photos/3962664/pexels-photo-3962664.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          icon: Handshake,
          eyebrow: "Partnerships",
          title: "Joint venture growth",
          copy: "Aligned commercial models for qualified investors, operators, and B2B partners.",
          points: [
            "Structured opportunity assessment",
            "Defined responsibilities and reporting",
            "Shared focus on sustainable scale",
          ],
          image: "https://images.pexels.com/photos/3849586/pexels-photo-3849586.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
      ]}
      closingTitle="Start with the capability you need. Build toward the system you want."
      closingCopy="Every engagement is scoped around your markets, channels, current setup, and operating goals."
    >

      {/* Extra sections: process, case studies, team, testimonials, FAQ, contact/map */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">How we work</p>
          <h3 className="mt-4 text-4xl font-light">A simple process for complex growth.</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-[20px] border border-border p-6">
            <p className="text-sm font-semibold uppercase text-accent-strong">Discover</p>
            <h4 className="mt-3 text-2xl font-light">Research & fit</h4>
            <p className="mt-3 text-sm text-muted-foreground">Market, margin, and channel fit to direct focused launches.</p>
          </div>
          <div className="rounded-[20px] border border-border p-6">
            <p className="text-sm font-semibold uppercase text-accent-strong">Build</p>
            <h4 className="mt-3 text-2xl font-light">Setup & integration</h4>
            <p className="mt-3 text-sm text-muted-foreground">Company formation, payments, and fulfillment pipelines designed to scale.</p>
          </div>
          <div className="rounded-[20px] border border-border p-6">
            <p className="text-sm font-semibold uppercase text-accent-strong">Operate</p>
            <h4 className="mt-3 text-2xl font-light">Execution & iteration</h4>
            <p className="mt-3 text-sm text-muted-foreground">Daily ops, reporting, and growth cadence that keeps teams aligned.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/5 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Case Studies</p>
          <h3 className="mt-4 text-4xl font-light">Selected results from recent launches</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cross-border fulfillment uplift",
                copy: "Moved inventory closer to customers and reduced lead time by 48%.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Listing optimization program",
                copy: "Improved organic discoverability and lift of 32% in search conversions.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Marketplace expansion",
                copy: "Launched into three marketplaces with templated ops and shared reporting.",
                image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((c) => (
              <article key={c.title} className="overflow-hidden rounded-[20px] border border-border bg-card/80 p-0">
                <img src={c.image} alt={c.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h4 className="text-lg font-medium">{c.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{c.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">People</p>
        <h3 className="mt-4 text-4xl font-light">Practitioners who run your programs</h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { name: "Operations Director", role: "Fulfillment & logistics", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" },
            { name: "Commercial Lead", role: "Market & listing strategy", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" },
            { name: "Partner Ops", role: "Joint venture coordination", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80" },
          ].map((m) => (
            <div key={m.name} className="rounded-[20px] border border-border p-4 text-center">
              <img src={m.image} alt={m.name} className="mx-auto h-28 w-28 rounded-full object-cover" />
              <h4 className="mt-4 text-lg font-medium">{m.name}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/5 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">What clients say</p>
          <h3 className="mt-4 text-4xl font-light">Short testimonials</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <blockquote className="rounded-[16px] border border-border bg-card/80 p-6 text-sm">
              "GlobalDealz helped us launch into two new marketplaces and kept operations synchronized across teams."
              <cite className="mt-3 block text-xs text-muted-foreground">— Head of Growth, Merchant</cite>
            </blockquote>
            <blockquote className="rounded-[16px] border border-border bg-card/80 p-6 text-sm">
              "Clear reporting and hands-on execution made our first 90 days feel like a runway rather than a scramble."
              <cite className="mt-3 block text-xs text-muted-foreground">— CEO, Brand</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Questions</p>
        <h3 className="mt-4 text-4xl font-light">Frequently asked</h3>

        <div className="mt-8 grid gap-4">
          <details className="rounded-[12px] border border-border bg-card/80 p-4">
            <summary className="cursor-pointer text-sm font-medium">How long does a typical engagement last?</summary>
            <p className="mt-2 text-sm text-muted-foreground">Engagements are scoped to the capability — short scoped launches can be 6–8 weeks, while full operating programs are ongoing.</p>
          </details>
          <details className="rounded-[12px] border border-border bg-card/80 p-4">
            <summary className="cursor-pointer text-sm font-medium">Do you work with existing teams?</summary>
            <p className="mt-2 text-sm text-muted-foreground">Yes — we integrate with existing teams and tools or run discrete managed services depending on needs.</p>
          </details>
          <details className="rounded-[12px] border border-border bg-card/80 p-4">
            <summary className="cursor-pointer text-sm font-medium">What's your typical pricing model?</summary>
            <p className="mt-2 text-sm text-muted-foreground">Pricing depends on scope and engagement length. We offer fixed-price launches and monthly retainers for ongoing operations.</p>
          </details>
          <details className="rounded-[12px] border border-border bg-card/80 p-4">
            <summary className="cursor-pointer text-sm font-medium">Which marketplaces do you support?</summary>
            <p className="mt-2 text-sm text-muted-foreground">We have active experience with Amazon, eBay, Shopify, WooCommerce, and other major platforms. Contact us for specific marketplace support.</p>
          </details>
        </div>
      </section>

    </BusinessPage>
  );
}
