import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Handshake, SearchCheck, ShieldCheck } from "lucide-react";

import { BusinessPage } from "@/components/business-page";

export const Route = createFileRoute("/joint-ventures")({
  head: () => ({ meta: [{ title: "E-Commerce Joint Ventures | GlobalDealzLLC" }, { name: "description", content: "Explore structured e-commerce joint ventures backed by GlobalDealzLLC infrastructure and operations." }, { property: "og:title", content: "E-Commerce Joint Ventures | GlobalDealzLLC" }, { property: "og:description", content: "Aligned partnerships built on transparent roles and connected operations." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: JointVenturesPage,
});

function JointVenturesPage() {
  return <BusinessPage eyebrow="Joint Ventures" title="Aligned partnerships with infrastructure already in motion." intro="We work with qualified investors and B2B partners who value clear responsibilities, transparent reporting, and disciplined execution." features={[
    { icon: SearchCheck, eyebrow: "01 · Assess", title: "Opportunity and fit", copy: "We evaluate the market, channel, resources, and operating assumptions before proposing a model.", points: ["Commercial fit review", "Marketplace opportunity assessment", "Resource and risk alignment"] },
    { icon: Handshake, eyebrow: "02 · Structure", title: "Defined partnership model", copy: "Roles, contributions, commercial terms, and decision rights are documented before launch.", points: ["Clear responsibility mapping", "Written commercial terms", "Agreed performance measures"] },
    { icon: ShieldCheck, eyebrow: "03 · Build", title: "Infrastructure and launch", copy: "Our operating layer coordinates the agreed entity, payment, store, and fulfillment workstreams.", points: ["Structured onboarding", "Channel and system setup", "Controlled launch milestones"] },
    { icon: BarChart3, eyebrow: "04 · Operate", title: "Execution and reporting", copy: "Day-to-day activity is paired with regular reporting and shared review points.", points: ["Operational oversight", "Performance reporting", "Iteration against agreed goals"] },
  ]} closingTitle="Partnership starts with alignment, not a template." closingCopy="Tell us what you bring to the table and what outcome you want to build. We will assess whether a joint venture is the right path." />;
}