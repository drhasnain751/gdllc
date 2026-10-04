import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export type BusinessFeature = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  copy: string;
  points: string[];
  image?: string;
};

export type BusinessTheme = {
  page?: string;
  hero?: string;
  heroBorder?: string;
  eyebrow?: string;
  accent?: string;
  button?: string;
  buttonSecondary?: string;
  panel?: string;
  panelBorder?: string;
  panelForeground?: string;
  card?: string;
  cardBorder?: string;
};

export function BusinessPage({
  eyebrow,
  title,
  intro,
  features,
  closingTitle,
  closingCopy,
  children,
  theme,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  features: BusinessFeature[];
  closingTitle: string;
  closingCopy: string;
  children?: ReactNode;
  theme?: BusinessTheme;
}) {
  const pageTheme = {
    page: theme?.page ?? "bg-background text-foreground",
    hero: theme?.hero ?? "grid-fade border-b border-border",
    heroBorder: theme?.heroBorder ?? "border-border/80",
    eyebrow: theme?.eyebrow ?? "text-accent-strong",
    accent: theme?.accent ?? "text-accent-strong",
    button: theme?.button ?? "rounded-full",
    buttonSecondary: theme?.buttonSecondary ?? "rounded-full",
    panel: theme?.panel ?? "bg-dark-panel text-dark-panel-foreground",
    panelBorder: theme?.panelBorder ?? "border-cyan-400/15",
    panelForeground: theme?.panelForeground ?? "text-dark-panel-foreground/65",
    card: theme?.card ?? "bg-card/80",
    cardBorder: theme?.cardBorder ?? "border-border",
  };

  return (
    <div className={`min-h-screen overflow-x-hidden ${pageTheme.page}`}>
      <SiteHeader />
      <main className="pt-20">
        <section className={`${pageTheme.hero} ${theme?.hero ? "" : "grid-fade"}`}>
          <div
            className={`depth-panel mx-auto max-w-7xl rounded-[32px] border px-5 py-20 shadow-[0_30px_80px_rgba(15,23,42,0.14)] lg:px-8 lg:py-28 ${pageTheme.heroBorder}`}
          >
            <p className={`text-sm font-semibold uppercase ${pageTheme.eyebrow}`}>{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-light leading-[1.08] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                size="lg"
                className={pageTheme.button}
                onClick={() => import("@/lib/site-info").then((m) => m.openConsultation())}
                aria-label="Book a consultation"
              >
                Book a Consultation
                <ArrowRight />
              </Button>
              <Button asChild size="lg" variant="outline" className={pageTheme.buttonSecondary}>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-5 md:grid-cols-2">
            {features.map(
              ({ icon: Icon, eyebrow: featureEyebrow, title: featureTitle, copy, points }) => (
                <article
                  key={featureTitle}
                  className={`depth-card rounded-[28px] border p-7 shadow-sm md:px-6 md:py-8 ${pageTheme.card} ${pageTheme.cardBorder}`}
                >
                  <div className={`flex items-center gap-3 text-xs font-semibold uppercase ${pageTheme.accent}`}>
                    <Icon className="size-5" />
                    {featureEyebrow}
                  </div>
                  <h2 className="mt-7 text-3xl font-light">{featureTitle}</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{copy}</p>
                  <div className="mt-7 grid gap-3">
                    {points.map((point) => (
                      <span key={point} className="flex items-start gap-2 border-t border-border pt-3 text-sm">
                        <Check className={`mt-0.5 size-4 shrink-0 ${pageTheme.accent}`} />
                        {point}
                      </span>
                    ))}
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        {children}

        <section className={`${pageTheme.panel} py-20`}>
          <div
            className={`depth-cta mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-[28px] border px-5 py-8 md:flex-row md:items-center lg:px-8 ${pageTheme.panelBorder}`}
          >
            <div>
              <h2 className="max-w-2xl text-3xl font-light sm:text-4xl">{closingTitle}</h2>
              <p className={`mt-4 max-w-2xl text-sm leading-7 ${pageTheme.panelForeground}`}>
                {closingCopy}
              </p>
            </div>
            <Button
              size="lg"
              className="shrink-0 rounded-full"
              onClick={() => import("@/lib/site-info").then((m) => m.openConsultation())}
              aria-label="Start a conversation"
            >
              Start a conversation
              <ArrowRight />
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
