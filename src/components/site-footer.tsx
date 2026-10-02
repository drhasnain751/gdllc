import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { GLOBALDEALZ } from "@/lib/site-info";

import { BrandMark } from "./site-header";

const legalLinks = [
  ["Services", "/services"],
  ["Infrastructure", "/infrastructure"],
  ["Joint Ventures", "/joint-ventures"],
  ["Case Studies", "/case-studies"],
  ["Pricing", "/pricing"],
  ["Privacy Policy", "/privacy"],
  ["Terms of Service", "/terms"],
  ["Refund & Cancellation Policy", "/refund-policy"],
  ["Contact Us", "/contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-border bg-dark-panel text-dark-panel-foreground">
      <div className="depth-panel mx-auto grid max-w-7xl gap-10 rounded-t-[28px] border border-border/80 px-5 py-12 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <div className="mb-3">
            <BrandMark />
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-dark-panel-foreground">
            Global e-commerce infrastructure, operational support, and growth partnership for
            ambitious operators and investors.
          </p>
          <address className="mt-5 text-sm not-italic leading-6 text-dark-panel-foreground">
            {GLOBALDEALZ.companyName}
            <br />
            {GLOBALDEALZ.address}
            <br />
            <a className="text-dark-panel-foreground hover:underline hover:text-cyan-300" href={`mailto:${GLOBALDEALZ.email}`}>
              {GLOBALDEALZ.email}
            </a>
            <br />
            <a
              className="text-dark-panel-foreground hover:underline hover:text-cyan-300"
              href={`tel:${GLOBALDEALZ.phone.replace(/[^+0-9]/g, "")}`}
            >
              {GLOBALDEALZ.phone}
            </a>
          </address>
        </div>
        <nav aria-label="Legal" className="legal-nav grid content-start gap-3">
          {legalLinks.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="site-footer-link group flex items-center justify-between border-b py-3 text-sm text-dark-panel-foreground hover:text-cyan-300"
            >
              {label}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border px-5 py-5 text-center text-xs text-dark-panel-foreground">
        © {new Date().getFullYear()} {GLOBALDEALZ.companyName}. All rights reserved.
      </div>
    </footer>
  );
}
