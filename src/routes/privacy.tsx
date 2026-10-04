import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | GlobalDealzLLC" },
      {
        name: "description",
        content: "How GlobalDealzLLC handles information shared through its website and consultation process.",
      },
      { property: "og:title", content: "Privacy Policy | GlobalDealzLLC" },
      {
        property: "og:description",
        content: "How GlobalDealzLLC handles information shared through its website and consultation process.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy is effective January 1, 2026 and explains how GlobalDealz LLC handles information collected through our website and consultation process."
    >
      <section>
        <h2>Information We Collect</h2>
        <p>
          We may collect business contact details you submit through our website, including your
          name, company, email address, phone number, service interest, and message. We may also
          collect basic website usage information such as browser information and pages visited to
          help maintain the site and improve the customer experience.
        </p>
      </section>
      <section>
        <h2>How We Use Information</h2>
        <p>
          We use submitted information to respond to inquiries, evaluate potential service needs,
          coordinate consultations, and manage communications related to our services. We do not sell
          personal information and only share data with authorized service providers when necessary to
          perform a service or meet a legal requirement.
        </p>
      </section>
      <section>
        <h2>Service Providers and Security</h2>
        <p>
          We may use trusted third-party providers for hosting, email delivery, customer relationship
          tools, and related business operations. We apply reasonable administrative and technical
          safeguards appropriate to the type of information involved, but no website or system can be
          guaranteed fully secure against all risks.
        </p>
      </section>
      <section>
        <h2>Retention and User Rights</h2>
        <p>
          We retain information only as long as needed to fulfill the purpose for which it was
          collected, satisfy legal obligations, or manage ongoing business communications. If you
          need to update or request information about your communication history, contact
          info@globaldealz.site.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about this Privacy Policy should be directed to info@globaldealz.site or +1
          (901) 443-2051.
        </p>
      </section>
    </LegalPage>
  );
}
