import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | GlobalDealzLLC" },
      {
        name: "description",
        content: "How GlobalDealzLLC handles information shared through its website.",
      },
      { property: "og:title", content: "Privacy Policy | GlobalDealzLLC" },
      {
        property: "og:description",
        content: "How GlobalDealzLLC handles information shared through its website.",
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
      intro="This preliminary policy explains how information submitted through this website is handled."
    >
      <section>
        <h2>Information we collect</h2>
        <p>
          We collect the name, email address, service interest, and message you submit through our
          consultation form.
        </p>
      </section>
      <section>
        <h2>How we use it</h2>
        <p>
          We use submitted information to evaluate your inquiry, respond to your request, and
          improve our services. We do not sell personal information.
        </p>
      </section>
      <section>
        <h2>Questions</h2>
        <p>
          For privacy questions, contact info@globaldealzllc.site. This policy will be updated as
          our service and legal requirements evolve.
        </p>
      </section>
    </LegalPage>
  );
}
