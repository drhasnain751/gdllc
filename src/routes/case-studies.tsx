import { createFileRoute } from "@tanstack/react-router";
import { Boxes, ChartNoAxesCombined, Store, Workflow } from "lucide-react";

import { BusinessPage } from "@/components/business-page";

export const Route = createFileRoute("/case-studies")({
  head: () => ({ meta: [{ title: "Commerce Operating Scenarios | GlobalDealzLLC" }, { name: "description", content: "See representative ways GlobalDealzLLC combines store operations, infrastructure, and fulfillment to solve commerce challenges." }, { property: "og:title", content: "Commerce Operating Scenarios | GlobalDealzLLC" }, { property: "og:description", content: "Representative growth scenarios across marketplaces, infrastructure, and fulfillment." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return <BusinessPage eyebrow="Case Studies" title="How connected commerce systems solve practical growth constraints." intro="These representative scenarios show how our capabilities can be combined. They illustrate operating models, not claims about a named client or guaranteed results." features={[
    { icon: Store, eyebrow: "Scenario 01", title: "From owner bottleneck to managed store", copy: "An owner with limited operating bandwidth moves product research, listings, and customer support into one managed workflow.", points: ["Constraint: fragmented daily execution", "Approach: centralized operating ownership", "Outcome focus: consistency and capacity"] },
    { icon: Workflow, eyebrow: "Scenario 02", title: "Building a cross-border foundation", copy: "A partner preparing for international marketplaces coordinates entity, payment, and secure access requirements.", points: ["Constraint: disconnected setup tasks", "Approach: sequenced infrastructure plan", "Outcome focus: launch readiness"] },
    { icon: Boxes, eyebrow: "Scenario 03", title: "Inventory closer to customers", copy: "A growing catalog uses regional warehousing to create a more resilient fulfillment footprint.", points: ["Constraint: long-distance fulfillment", "Approach: selective inventory placement", "Outcome focus: service and delivery reliability"] },
    { icon: ChartNoAxesCombined, eyebrow: "Scenario 04", title: "An operator-investor partnership", copy: "Capital and operating capabilities are aligned through defined roles, milestones, and reporting.", points: ["Constraint: capability imbalance", "Approach: structured joint venture", "Outcome focus: accountable execution"] },
  ]} closingTitle="Your situation deserves its own operating plan." closingCopy="Results depend on market conditions, platform rules, product economics, and execution. We begin by understanding those variables clearly." />;
}