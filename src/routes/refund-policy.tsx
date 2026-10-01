import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy | GlobalDealzLLC" },
      {
        name: "description",
        content: "Refund and cancellation terms for GlobalDealzLLC engagements and consultations.",
      },
      { property: "og:title", content: "Refund & Cancellation Policy | GlobalDealzLLC" },
      {
        property: "og:description",
        content: "Refund and cancellation terms for GlobalDealzLLC engagements and consultations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      intro="This Refund & Cancellation Policy is effective January 1, 2026 and applies to consultation requests and any paid service arrangement entered into with GlobalDealz LLC."
    >
      <section>
        <h2>Pre-Filing Cancellation</h2>
        <p>
          If a service is canceled before official filing, registration, or external action is
          initiated, the client may be eligible for a refund of amounts paid, less applicable
          processor or third-party fees, provided that any incurred external expenses are not yet
          processed or committed.
        </p>
      </section>
      <section>
        <h2>Post-Filing and External Costs</h2>
        <p>
          Once filing, registered-agent, domain, third-party service, or other external costs have
          been initiated, those costs are generally non-refundable. We will communicate clearly when
          such expenses are incurred so the client understands the status of the engagement.
        </p>
      </section>
      <section>
        <h2>Monthly Management Services</h2>
        <p>
          Monthly management services require 14 days written notice before the next billing cycle.
          No partial-month refunds are provided for active services.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Cancellation or refund requests should be sent to info@globaldealzllc.site or +1 (901)
          443-2051. Final terms will be governed by the signed service agreement governing the
          relevant engagement.
        </p>
      </section>
    </LegalPage>
  );
}
