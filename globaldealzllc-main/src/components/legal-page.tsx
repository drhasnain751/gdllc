import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { SiteFooter } from "./site-footer";
import { BrandMark } from "./site-header";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <Link to="/"><BrandMark /></Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" />Back to home</Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase text-accent-strong">Compliance</p>
        <h1 className="mt-5 text-4xl font-light md:text-6xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{intro}</p>
        <div className="legal-copy mt-14 space-y-10">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}