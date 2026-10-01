import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy | GlobalDealzLLC" },
      {
        name: "description",
        content: "Preliminary refund and cancellation terms for GlobalDealzLLC engagements.",
      },
      { property: "og:title", content: "Refund & Cancellation Policy | GlobalDealzLLC" },
      {
        property: "og:description",
        content: "Preliminary refund and cancellation terms for GlobalDealzLLC engagements.",
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
      intro="Engagement-specific refund and cancellation terms are confirmed before work begins."
    >
      <section>
        <h2>Consultations</h2>
        <p>
          Submitting a consultation request is free and does not create a paid engagement or
          financial obligation.
        </p>
      </section>
      <section>
        <h2>Paid services</h2>
        <p>
          Any refunds, cancellation windows, non-refundable setup costs, and delivery milestones
          will be stated in the signed service agreement.
        </p>
      </section>
      <section>
        <h2>Requesting a cancellation</h2>
        <p>
          Contact info@globaldealzllc.site with your agreement details. We will respond according to
          the terms applicable to your engagement.
        </p>
      </section>
    </LegalPage>
  );
}
