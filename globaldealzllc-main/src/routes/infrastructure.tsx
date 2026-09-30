import { createFileRoute } from "@tanstack/react-router";
import { Building2, CreditCard, Globe2, Warehouse } from "lucide-react";

import { BusinessPage } from "@/components/business-page";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({ meta: [{ title: "Commerce Infrastructure & Warehouses | GlobalDealzLLC" }, { name: "description", content: "Build international e-commerce infrastructure with entity setup, payment readiness, and four-market warehousing support." }, { property: "og:title", content: "Commerce Infrastructure & Warehouses | GlobalDealzLLC" }, { property: "og:description", content: "Connected foundations for international selling and fulfillment." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: InfrastructurePage,
});

function InfrastructurePage() {
  return <BusinessPage eyebrow="Infrastructure & Warehouses" title="A practical foundation for selling across borders." intro="Bring the company, payment, access, and fulfillment layers of international commerce into one coordinated setup." features={[
    { icon: Building2, eyebrow: "Entities", title: "US and UK company setup", copy: "Formation support designed around the practical needs of marketplace operators and international partners.", points: ["US LLC setup coordination", "UK LTD setup coordination", "Structured onboarding documentation"] },
    { icon: CreditCard, eyebrow: "Payments", title: "Gateway readiness", copy: "Prepare the operating foundation needed to connect eligible payment services and business banking providers.", points: ["Provider readiness checks", "Account setup coordination", "Operational payment workflows"] },
    { icon: Warehouse, eyebrow: "Warehousing", title: "Four-market fulfillment", copy: "Coordinate inventory across key customer markets without managing disconnected providers alone.", points: ["United States", "United Kingdom and Germany", "Australia"] },
    { icon: Globe2, eyebrow: "Control", title: "Connected operations", copy: "Keep access, inventory, and fulfillment processes aligned as the store footprint expands.", points: ["Secure remote workflows", "Inventory visibility", "Fulfillment coordination"] },
  ]} closingTitle="Put the right infrastructure beneath every new market." closingCopy="We scope the appropriate entity, payment, access, and fulfillment components after understanding your channels and expansion plan." />;
}