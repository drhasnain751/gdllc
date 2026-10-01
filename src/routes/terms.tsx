import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | GlobalDealzLLC" },
      {
        name: "description",
        content: "Terms governing GlobalDealzLLC website use and consultation services.",
      },
      { property: "og:title", content: "Terms of Service | GlobalDealzLLC" },
      {
        property: "og:description",
        content: "Terms governing GlobalDealzLLC website use and consultation services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These Terms of Service are effective January 1, 2026 and govern the use of this website and any consultation or service discussion initiated through GlobalDealz LLC."
    >
      <section>
        <h2>Acceptance</h2>
        <p>
          By accessing or using this website, you agree that the information provided is for general
          business information and does not constitute a binding offer, legal advice, or financial
          advice. Any services, scope, fees, and commercial terms must be agreed in writing between
          the relevant parties before a formal engagement begins.
        </p>
      </section>
      <section>
        <h2>Operational Scope</h2>
        <p>
          GlobalDealz LLC may provide business support related to marketplace operations, sourcing,
          warehousing coordination, infrastructure planning, and strategic partnership discussions. The
          precise scope of any work is determined by the agreed commercial arrangement and is not
          implied by website content alone.
        </p>
      </section>
      <section>
        <h2>Marketplace and Third-Party Dependencies</h2>
        <p>
          Marketplace, payment, banking, logistics, and related service providers operate under their
          own rules, approval processes, and platform policies. GlobalDealz LLC does not guarantee
          approval, onboarding, or performance outcomes from any third-party provider, marketplace, or
          financial institution.
        </p>
      </section>
      <section>
        <h2>Client Responsibilities</h2>
        <p>
          Clients are responsible for providing accurate information, timely approvals, required
          documentation, and compliance-related actions relevant to the agreed service arrangement.
          Delays in information or approvals may affect timelines and deliverables.
        </p>
      </section>
      <section>
        <h2>Service Availability and Liability</h2>
        <p>
          Information on this website is provided for general business information only and may change
          at any time. GlobalDealz LLC does not guarantee uninterrupted access to the site, the
          availability of any service, or any particular commercial result. Liability is limited to
          the extent expressly stated in a signed agreement between the parties.
        </p>
      </section>
      <section>
        <h2>Termination and Contact</h2>
        <p>
          We may suspend or terminate access to the website or any consultation process if the use of
          the site is unlawful, abusive, or materially inconsistent with the purpose of the website.
          For questions, contact info@globaldealzllc.site or +1 (901) 443-2051.
        </p>
      </section>
    </LegalPage>
  );
}
