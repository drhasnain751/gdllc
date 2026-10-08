// // import { Link } from "@tanstack/react-router";
// // import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

// // import { GLOBALDEALZ } from "@/lib/site-info";

// // const legalLinks = [
// //   ["Services", "/services"],
// //   ["Infrastructure", "/infrastructure"],
// //   ["Joint Ventures", "/joint-ventures"],
// //   ["Case Studies", "/case-studies"],
// //   ["Pricing", "/pricing"],
// // ] as const;

// // const complianceLinks = [
// //   ["Privacy Policy", "/privacy"],
// //   ["Terms of Service", "/terms"],
// //   ["Refund & Cancellation Policy", "/refund-policy"],
// //   ["Contact Us", "/contact"],
// // ] as const;

// // export function SiteFooter() {
// //   return (
// //     <footer className="site-footer border-t border-border bg-dark-panel text-dark-panel-foreground">
// //       <div className="depth-panel relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-t-[28px] border border-border/80 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
// //         <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black_38%,transparent_100%)]" />
        
// //         <div className="relative">
// //           <div className="mb-3">
// //             <img
// //               src="/globaldealz-header-logo-light.svg"
// //               alt="GlobalDealz Infrastructure"
// //               className="block h-[84px] w-auto max-w-[280px] object-contain sm:h-[96px] md:h-[108px] lg:h-[116px]"
// //               draggable={false}
// //               style={{
// //                 background: "transparent",
// //                 filter:
// //                   "drop-shadow(0 14px 28px rgba(0,0,0,0.7)) drop-shadow(0 0 25px rgba(59,130,246,0.6))",
// //               }}
// //             />
// //           </div>
// //           <p className="mt-5 max-w-md text-sm leading-6 text-dark-panel-foreground">
// //             Global e-commerce infrastructure, operational support, and growth partnership for
// //             ambitious operators and investors.
// //           </p>

// //  <div className="flex items-start gap-3 mb-3">
// //                 <MapPin className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
// //                 <div>
// //                   <p className="font-semibold text-dark-panel-foreground">{GLOBALDEALZ.companyName}</p>
// //                   <address className="not-italic leading-5 mt-1">
// //                     {GLOBALDEALZ.address}
// //                   </address>
// //                 </div>
// //               </div>


// //                <div className="flex items-center gap-3 mb-2">
// //                 <Mail className="h-5 w-5 text-accent-strong flex-shrink-0" />
// //                 <a 
// //                   className="hover:text-cyan-300 transition-colors" 
// //                   href={`mailto:${GLOBALDEALZ.email}`}
// //                 >
// //                   {GLOBALDEALZ.email}
// //                 </a>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <Phone className="h-5 w-5 text-accent-strong flex-shrink-0" />
// //                 <a
// //                   className="hover:text-cyan-300 transition-colors"
// //                   href={`tel:${GLOBALDEALZ.phone.replace(/[^+0-9]/g, "")}`}
// //                 >
// //                   {GLOBALDEALZ.phone}
// //                 </a>
// //               </div>
// //         </div>

// //         <div className="relative">
// //           <h3 className="text-sm font-semibold text-dark-panel-foreground mb-4">Products</h3>
// //           <nav className="space-y-3">
// //             {legalLinks.map(([label, to]) => (
// //               <Link
// //                 key={to}
// //                 to={to}
// //                 className="site-footer-link group flex items-center justify-between text-sm text-dark-panel-foreground hover:text-cyan-300 transition-colors"
// //               >
// //                 {label}
// //                 <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
// //               </Link>
// //             ))}
// //           </nav>
// //         </div>

// //         <div className="relative">
// //           <h3 className="text-sm font-semibold text-dark-panel-foreground mb-4">Legal & Support</h3>
// //           <nav className="space-y-3">
// //             {complianceLinks.map(([label, to]) => (
// //               <Link
// //                 key={to}
// //                 to={to}
// //                 className="site-footer-link group flex items-center justify-between text-sm text-dark-panel-foreground hover:text-cyan-300 transition-colors"
// //               >
// //                 {label}
// //                 <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
// //               </Link>
// //             ))}
// //           </nav>
// //         </div>
// //       </div>

// //       <div className="border-t border-border px-5 py-8 lg:px-8">
// //         <div className="mx-auto max-w-7xl">
// //           <div className="mb-6">
// //            <div className="text-sm text-dark-panel-foreground/80">
             
             
// //             </div>
// //           </div> 

// //           <div className="border-t border-border pt-6 text-center text-xs text-dark-panel-foreground/70">
// //             <p>� {new Date().getFullYear()} {GLOBALDEALZ.companyName}. All rights reserved.</p>
// //             <p className="mt-2">
// //               Secure payments processed by <a href="https://stripe.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">Stripe</a>.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }



// import { Link } from "@tanstack/react-router";
// import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

// import { GLOBALDEALZ } from "@/lib/site-info";

// const productLinks = [
//   ["Services", "/services"],
//   ["Infrastructure", "/infrastructure"],
//   ["Joint Ventures", "/joint-ventures"],
//   ["Case Studies", "/case-studies"],
//   ["Pricing", "/pricing"],
// ] as const;

// const supportLinks = [
//   ["Privacy Policy", "/privacy"],
//   ["Terms of Service", "/terms"],
//   ["Refund & Cancellation Policy", "/refund-policy"],
//   ["Contact Us", "/contact"],
// ] as const;

// export function SiteFooter() {
//   const phoneHref = `tel:${GLOBALDEALZ.phone.replace(/[^+0-9]/g, "")}`;

//   return (
//     <footer className="site-footer border-t border-border bg-dark-panel text-dark-panel-foreground">
//       {/* Main footer */}
//       <div className="relative overflow-hidden border-b border-border/70">
//         {/* Subtle grid background */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(circle_at_50%_35%,black_30%,transparent_78%)]"
//         />

//         {/* Ambient cyan glow */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl"
//         />

//         <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
//           <div className="grid gap-14 lg:grid-cols-[1.7fr_1fr_1fr] lg:gap-16">
//             {/* Brand + Contact */}
//             <div className="max-w-xl">
//               <div className="mb-6">
//                 <Link
//                   to="/"
//                   aria-label="GlobalDealz Infrastructure home"
//                   className="inline-flex items-center transition-opacity duration-300 hover:opacity-90"
//                 >
//                   <img
//                     src="/globaldealz-header-logo-light.svg"
//                     alt="GlobalDealz Infrastructure"
//                     className="block h-[78px] w-auto max-w-[280px] object-contain sm:h-[88px] md:h-[96px]"
//                     draggable={false}
//                     style={{
//                       filter:
//                         "drop-shadow(0 10px 24px rgba(0,0,0,0.55)) drop-shadow(0 0 20px rgba(0,178,238,0.16))",
//                     }}
//                   />
//                 </Link>
//               </div>

//               <p className="max-w-lg text-sm leading-7 text-dark-panel-foreground/75">
//                 Global e-commerce infrastructure, operational support, and
//                 growth partnership for ambitious operators and investors.
//               </p>

//               {/* Contact details */}
//               <div className="mt-8 space-y-4">
//                 <div className="flex items-start gap-3.5">
//                   <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/5">
//                     <MapPin className="h-4 w-4 text-accent-strong" />
//                   </div>

//                   <div className="min-w-0 text-sm">
//                     <p className="font-semibold text-dark-panel-foreground">
//                       {GLOBALDEALZ.companyName}
//                     </p>

//                     <address className="mt-1 max-w-sm not-italic leading-6 text-dark-panel-foreground/65">
//                       {GLOBALDEALZ.address}
//                     </address>
//                   </div>
//                 </div>

//                 <a
//                   href={`mailto:${GLOBALDEALZ.email}`}
//                   className="group flex items-center gap-3.5 text-sm text-dark-panel-foreground/75 transition-colors duration-200 hover:text-cyan-300"
//                 >
//                   <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/5">
//                     <Mail className="h-4 w-4 text-accent-strong" />
//                   </span>

//                   <span className="truncate">{GLOBALDEALZ.email}</span>
//                 </a>

//                 <a
//                   href={phoneHref}
//                   className="group flex items-center gap-3.5 text-sm text-dark-panel-foreground/75 transition-colors duration-200 hover:text-cyan-300"
//                 >
//                   <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/5">
//                     <Phone className="h-4 w-4 text-accent-strong" />
//                   </span>

//                   <span>{GLOBALDEALZ.phone}</span>
//                 </a>
//               </div>
//             </div>

//             {/* Products */}
//             <div>
//               <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-dark-panel-foreground/45">
//                 Products
//               </h3>

//               <nav aria-label="Products" className="space-y-1">
//                 {productLinks.map(([label, to]) => (
//                   <Link
//                     key={to}
//                     to={to}
//                     className="group flex items-center justify-between rounded-lg py-2.5 text-sm text-dark-panel-foreground/75 transition-all duration-200 hover:bg-white/[0.03] hover:px-2 hover:text-cyan-300"
//                   >
//                     <span>{label}</span>

//                     <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             {/* Legal & Support */}
//             <div>
//               <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-dark-panel-foreground/45">
//                 Legal & Support
//               </h3>

//               <nav aria-label="Legal and support" className="space-y-1">
//                 {supportLinks.map(([label, to]) => (
//                   <Link
//                     key={to}
//                     to={to}
//                     className="group flex items-center justify-between rounded-lg py-2.5 text-sm text-dark-panel-foreground/75 transition-all duration-200 hover:bg-white/[0.03] hover:px-2 hover:text-cyan-300"
//                   >
//                     <span>{label}</span>

//                     <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="relative">
//         <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-dark-panel-foreground/55 sm:flex-row sm:items-center sm:justify-between lg:px-8">
//           <p>
//             © {new Date().getFullYear()} {GLOBALDEALZ.companyName}. All rights
//             reserved.
//           </p>

//           <p>
//             Secure payments processed by{" "}
//             <a
//               href="https://stripe.com"
//               target="_blank"
//               rel="noreferrer"
//               className="font-medium text-cyan-300/80 transition-colors hover:text-cyan-300 hover:underline"
//             >
//               Stripe
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

import { GLOBALDEALZ } from "@/lib/site-info";

const productLinks = [
  ["Services", "/services"],
  ["Infrastructure", "/infrastructure"],
  ["Joint Ventures", "/joint-ventures"],
  ["Case Studies", "/case-studies"],
  ["Pricing", "/pricing"],
] as const;

const supportLinks = [
  ["Privacy Policy", "/privacy"],
  ["Terms of Service", "/terms"],
  ["Refund & Cancellation Policy", "/refund-policy"],
  ["Contact Us", "/contact"],
] as const;

type FooterLink = readonly [label: string, to: string];

const linkHover = "transition-colors hover:text-cyan-300";

const gridOverlay =
  "[background-image:linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black_38%,transparent_100%)]";

function FooterNav({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <div className="relative">
      <h3 className="mb-4 text-sm font-semibold text-dark-panel-foreground">{title}</h3>
      <nav aria-label={title} className="space-y-3">
        {links.map(([label, to]) => (
          <Link
            key={to}
            to={to}
            className={`site-footer-link group flex items-center justify-between text-sm text-dark-panel-foreground ${linkHover}`}
          >
            {label}
            <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ))}
      </nav>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  children,
  align = "center",
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  align?: "center" | "start";
}) {
  return (
    <div className={`flex gap-3 ${align === "start" ? "items-start" : "items-center"}`}>
      <Icon
        className={`h-5 w-5 flex-shrink-0 text-accent-strong ${align === "start" ? "mt-0.5" : ""}`}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

export function SiteFooter() {
  const { companyName, address, email, phone } = GLOBALDEALZ;

  return (
    <footer className="site-footer border-t border-border bg-dark-panel text-dark-panel-foreground">
      <div className="depth-panel relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-t-[28px] border border-border/80 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div className={`pointer-events-none absolute inset-0 opacity-80 ${gridOverlay}`} />

        {/* Brand & contact */}
        <div className="relative">
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

          <p className="mt-5 max-w-md text-sm leading-6 text-dark-panel-foreground">
            Global e-commerce infrastructure, operational support, and growth partnership for
            ambitious operators and investors.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <ContactRow icon={MapPin} align="start">
              <div>
                <p className="font-semibold text-dark-panel-foreground">{companyName}</p>
                <address className="mt-1 not-italic leading-5">{address}</address>
              </div>
            </ContactRow>

            <ContactRow icon={Mail}>
              <a className={linkHover} href={`mailto:${email}`}>
                {email}
              </a>
            </ContactRow>

            <ContactRow icon={Phone}>
              <a className={linkHover} href={`tel:${phone.replace(/[^+0-9]/g, "")}`}>
                {phone}
              </a>
            </ContactRow>
          </div>
        </div>

        <FooterNav title="Products" links={productLinks} />
        <FooterNav title="Legal & Support" links={supportLinks} />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-5 py-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-2 text-center text-xs text-dark-panel-foreground/70">
          <p>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <p>
            Secure payments processed by{" "}
            <a
              href="https://stripe.com"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:underline"
            >
              Stripe
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}