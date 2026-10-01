import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { BrandMark } from "@/components/site-header";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GlobalDealzLLC" },
      {
        name: "description",
        content:
          "Contact GlobalDealzLLC about managed e-commerce, infrastructure, warehousing, or partnerships.",
      },
      { property: "og:title", content: "Contact GlobalDealzLLC" },
      {
        property: "og:description",
        content: "Start a conversation about global e-commerce infrastructure and managed growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});
function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <Link to="/">
            <BrandMark />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </div>
      </header>
      <main className="mx-auto grid max-w-5xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase text-accent-strong">Contact</p>
          <h1 className="mt-5 text-5xl font-light">Let’s talk about what’s next.</h1>
          <p className="mt-6 leading-8 text-muted-foreground">
            For store operations, infrastructure, warehousing, and partnership inquiries, use the
            consultation form or contact us directly.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8">
          <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-strong">
            <Mail />
          </span>
          <h2 className="mt-8 text-xl font-medium">Business inquiries</h2>
          <a
            className="mt-3 block text-accent-strong hover:underline"
            href="mailto:info@globaldealzllc.site"
          >
            info@globaldealzllc.site
          </a>
          <Button asChild className="mt-8">
            <Link to="/" hash="consultation">
              Open consultation form
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
