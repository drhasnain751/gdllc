
import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Handshake, SearchCheck, ShieldCheck } from "lucide-react";

import { BusinessPage } from "@/components/business-page";

const visualSections = [
  {
    title: "Partnerships rooted in clarity",
    copy:
      "A strong venture starts with clear roles, commercial alignment, and a realistic operating model rather than vague promises.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    items: ["Role clarity", "Commercial fit", "Decision rights"],
    tint: "from-white/5 via-white/2 to-transparent",
  },
  {
    title: "Structure before scale",
    copy:
      "Global growth works better when responsibilities, milestones, and reporting are defined before launch decisions are made.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    items: ["Milestones", "Shared reporting", "Execution planning"],
    tint: "from-white/5 via-white/2 to-transparent",
  },
  {
    title: "A partner model that can actually operate",
    copy:
      "We help align investor, operator, and infrastructure contributions so the business can execute without confusion or drift.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    items: ["Operational flow", "Partner model", "Risk alignment"],
    tint: "from-white/5 via-white/2 to-transparent",
  },
];

export const Route = createFileRoute("/joint-ventures")({
  head: () => ({
    meta: [
      { title: "E-Commerce Joint Ventures | GlobalDealzLLC" },
      {
        name: "description",
        content:
          "Explore structured e-commerce joint ventures backed by GlobalDealzLLC infrastructure and operations.",
      },
      { property: "og:title", content: "E-Commerce Joint Ventures | GlobalDealzLLC" },
      {
        property: "og:description",
        content: "Aligned partnerships built on transparent roles and connected operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: JointVenturesPage,
});

function JointVenturesPage() {
  return (
    <BusinessPage
      eyebrow="Joint Ventures"
      title="Aligned partnerships with infrastructure already in motion."
      intro="We work with qualified investors and B2B partners who value clear responsibilities, transparent reporting, and disciplined execution."
      features={[
        {
          icon: SearchCheck,
          eyebrow: "01 · Assess",
          title: "Opportunity and fit",
          copy: "We evaluate the market, channel, resources, and operating assumptions before proposing a model.",
          points: [
            "Commercial fit review",
            "Marketplace opportunity assessment",
            "Resource and risk alignment",
          ],
        },
        {
          icon: Handshake,
          eyebrow: "02 · Structure",
          title: "Defined partnership model",
          copy: "Roles, contributions, commercial terms, and decision rights are documented before launch.",
          points: [
            "Clear responsibility mapping",
            "Written commercial terms",
            "Agreed performance measures",
          ],
        },
        {
          icon: ShieldCheck,
          eyebrow: "03 · Build",
          title: "Infrastructure and launch",
          copy: "Our operating layer coordinates the agreed entity, payment, store, and fulfillment workstreams.",
          points: [
            "Structured onboarding",
            "Channel and system setup",
            "Controlled launch milestones",
          ],
        },
        {
          icon: BarChart3,
          eyebrow: "04 · Operate",
          title: "Execution and reporting",
          copy: "Day-to-day activity is paired with regular reporting and shared review points.",
          points: [
            "Operational oversight",
            "Performance reporting",
            "Iteration against agreed goals",
          ],
        },
      ]}
      closingTitle="Partnership starts with alignment, not a template."
      closingCopy="Tell us what you bring to the table and what outcome you want to build. We will assess whether a joint venture is the right path."
      theme={{
        page: "bg-background text-foreground",
        hero: "grid-fade border-b border-border",
        heroBorder: "border-border/80",
        eyebrow: "text-accent-strong",
        accent: "text-accent-strong",
        button: "rounded-full",
        buttonSecondary: "rounded-full",
        panel: "bg-dark-panel text-dark-panel-foreground",
        panelBorder: "border-white/10",
        panelForeground: "text-dark-panel-foreground/65",
        card: "bg-card/80",
        cardBorder: "border-border",
      }}
    >
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="flex flex-col gap-6">
          {visualSections.map((section, index) => (
            <article
              key={section.title}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(15,23,42,0.14)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.tint}`} />
              <div className="relative grid lg:grid-cols-2">
                <div className={index % 2 === 0 ? "order-1" : "order-2 lg:order-1"}>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full min-h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div
                  className={
                    index % 2 === 0
                      ? "order-2 flex flex-col justify-center p-8 lg:p-12"
                      : "order-1 flex flex-col justify-center p-8 lg:p-12"
                  }
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-strong">
                    Partnership layer
                  </p>
                  <h3 className="mt-4 text-3xl font-light text-foreground">{section.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{section.copy}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {section.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs font-medium text-slate-100">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
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
                Operating alignment
              </p>
              <h3 className="mt-4 text-4xl font-light text-foreground">Partnerships need structure to stay productive.</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              The strongest commercial models are built on shared metrics, clear accountability, and a practical operational plan that everyone understands.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_40px_100px_rgba(15,23,42,0.14)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.08),transparent_35%)]" />
              <video
                className="h-[420px] w-full object-cover opacity-90"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-people-working-in-an-office-1562230215343/1080p.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="grid gap-5">
              {[
                "Commercial alignment and partner fit",
                "Role mapping and milestone planning",
                "Operational coordination and visibility",
                "Reporting tied to agreed outcomes",
              ].map((item) => (
                <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 p-5 text-sm text-muted-foreground shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </BusinessPage>
  );
}