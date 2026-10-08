import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

import { GLOBALDEALZ } from "@/lib/site-info";

const legalLinks = [
  ["Services", "/services"],
  ["Infrastructure", "/infrastructure"],
  ["Joint Ventures", "/joint-ventures"],
  ["Case Studies", "/case-studies"],
  ["Pricing", "/pricing"],
] as const;

const complianceLinks = [
  ["Privacy Policy", "/privacy"],
  ["Terms of Service", "/terms"],
  ["Refund & Cancellation Policy", "/refund-policy"],
  ["Contact Us", "/contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-border bg-dark-panel text-dark-panel-foreground">
      <div className="depth-panel relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-t-[28px] border border-border/80 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black_38%,transparent_100%)]" />
        
        <div className="relative">
          <div className="mb-3">
            <img
              src="/globaldealz-header-logo-light.svg"
              alt="GlobalDealz Infrastructure"
              className="block h-[84px] w-auto max-w-[280px] object-contain sm:h-[96px] md:h-[108px] lg:h-[116px]"
              draggable={false}
              style={{
                background: "transparent",
                filter:
                  "drop-shadow(0 14px 28px rgba(0,0,0,0.7)) drop-shadow(0 0 25px rgba(59,130,246,0.6))",
              }}
            />
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-dark-panel-foreground">
            Global e-commerce infrastructure, operational support, and growth partnership for
            ambitious operators and investors.
          </p>
        </div>

        <div className="relative">
          <h3 className="text-sm font-semibold text-dark-panel-foreground mb-4">Products</h3>
          <nav className="space-y-3">
            {legalLinks.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="site-footer-link group flex items-center justify-between text-sm text-dark-panel-foreground hover:text-cyan-300 transition-colors"
              >
                {label}
                <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative">
          <h3 className="text-sm font-semibold text-dark-panel-foreground mb-4">Legal & Support</h3>
          <nav className="space-y-3">
            {complianceLinks.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="site-footer-link group flex items-center justify-between text-sm text-dark-panel-foreground hover:text-cyan-300 transition-colors"
              >
                {label}
                <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-border px-5 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <div className="text-sm text-dark-panel-foreground/80">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-dark-panel-foreground">{GLOBALDEALZ.companyName}</p>
                  <address className="not-italic leading-5 mt-1">
                    {GLOBALDEALZ.address}
                  </address>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <a 
                  className="hover:text-cyan-300 transition-colors" 
                  href={`mailto:${GLOBALDEALZ.email}`}
                >
                  {GLOBALDEALZ.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-strong flex-shrink-0" />
                <a
                  className="hover:text-cyan-300 transition-colors"
                  href={`tel:${GLOBALDEALZ.phone.replace(/[^+0-9]/g, "")}`}
                >
                  {GLOBALDEALZ.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center text-xs text-dark-panel-foreground/70">
            <p>� {new Date().getFullYear()} {GLOBALDEALZ.companyName}. All rights reserved.</p>
            <p className="mt-2">
              Secure payments processed by <a href="https://stripe.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">Stripe</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
