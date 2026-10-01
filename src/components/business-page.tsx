import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export type BusinessFeature = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  copy: string;
  points: string[];
};

export function BusinessPage({
  eyebrow,
  title,
  intro,
  features,
  closingTitle,
  closingCopy,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  features: BusinessFeature[];
  closingTitle: string;
  closingCopy: string;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main className="pt-20">
        <section className="grid-fade border-b border-border">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <p className="text-sm font-semibold uppercase text-accent-strong">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-light leading-[1.08] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/" hash="consultation">
                  Book a Consultation
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-5 md:grid-cols-2">
            {features.map(
              ({ icon: Icon, eyebrow: featureEyebrow, title: featureTitle, copy, points }) => (
                <article key={featureTitle} className="border-t border-border py-8 md:px-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase text-accent-strong">
                    <Icon className="size-5" />
                    {featureEyebrow}
                  </div>
                  <h2 className="mt-7 text-3xl font-light">{featureTitle}</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{copy}</p>
                  <div className="mt-7 grid gap-3">
                    {points.map((point) => (
                      <span key={point} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                        {point}
                      </span>
                    ))}
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="bg-dark-panel py-20 text-dark-panel-foreground">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
            <div>
              <h2 className="max-w-2xl text-3xl font-light sm:text-4xl">{closingTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-panel-foreground/65">
                {closingCopy}
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link to="/" hash="consultation">
                Start a conversation
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
