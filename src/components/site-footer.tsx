import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

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
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">Global e-commerce infrastructure and managed growth for ambitious operators and partners.</p>
          <address className="mt-5 text-sm not-italic leading-6 text-muted-foreground">
            GlobalDealzLLC<br />Registered address: To be confirmed<br />
            <a className="text-foreground hover:underline" href="mailto:info@globaldealzllc.site">info@globaldealzllc.site</a>
          </address>
        </div>
        <nav aria-label="Legal" className="grid content-start gap-3">
          {legalLinks.map(([label, to]) => (
            <Link key={to} to={to} className="group flex items-center justify-between border-b border-border py-2 text-sm text-muted-foreground hover:text-foreground">
              {label}<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} GlobalDealzLLC. All rights reserved.</div>
    </footer>
  );
}