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
        },
      ]}
      closingTitle="Start with the capability you need. Build toward the system you want."
      closingCopy="Every engagement is scoped around your markets, channels, current setup, and operating goals."
    />
  );
}
