# Global Deals Hub

Build a multi-section marketing website for "GlobalDealzLLC", a global e-commerce infrastructure and managed growth company. Design inspiration: mercury.com. Recreate its premium fintech look and feel with original code and content, not a pixel-for-pixel copy.

DESIGN SYSTEM
- Mercury-style aesthetic: lots of white space, calm, confident, high-end.
- Light theme by default, with a dark mode toggle. Support both.
- Palette: near-white background (#FAFAFB), deep navy/slate text (#1B1F2A), muted gray-blue secondary text, one soft indigo/blue accent for CTAs, and dark slate sections for contrast.
- Typography: a refined, light-weight sans-serif (Inter or similar) for body. Large, airy hero headings with tight letter-spacing.
- Buttons: fully rounded pills. Primary is solid dark or accent, secondary is outline.
- Cards: 16-24px rounded corners, 1px subtle border with a soft glow, very light shadows, glassmorphic frames.
- Motion: smooth fade-up on scroll, gentle hover lift on cards, slow logo carousel marquee, animated count-up for metrics. Keep it subtle and premium.
- Fully responsive, mobile-first.

VISUAL RULES
- No stock photos of people or faces. Use only product dashboards, 3D assets and infrastructure visuals.
- Use clean UI mockups in rounded glass frames (sales charts, payout screens, warehouse inventory panels). Build them as polished HTML/CSS/SVG mockups.
- Use minimalist 3D-style elements: floating glass virtual cards, sleek shipping boxes, a dotted world map.
- Any physical photo or video must be dark and moody, with a 20-30% dark slate overlay.
- Every dashboard image gets 16-24px rounded corners and a subtle 1px border glow.

BRANDING (I will upload these files in chat)
- Header logo: use "globaldealz-header-logo-light" on light backgrounds and "globaldealz-header-logo-dark" on dark backgrounds. Switch automatically with the theme and with any dark header sections.
- Favicon: use favicon.svg as the primary tab icon, with favicon-32x32.png as fallback. Add proper <link rel="icon"> tags in index.html.
- Page title: "GlobalDealzLLC | Global E-Commerce Infrastructure & Managed Growth".

SECTIONS (in this order)

1. Sticky top navigation
Logo (theme-aware). Links: Home | Services | Infrastructure & Warehouses | Joint Ventures | Case Studies. Primary CTA pill: "Book a Consultation". Mobile hamburger menu. Header gets a soft blur background on scroll.

2. Hero
Headline: "Global E-Commerce Infrastructure & Managed Growth for Scale"
Sub-headline: "We empower store owners and B2B partners with complete IaaS solutions: US LLC / UK LTD setups, verified payment gateways, global warehousing, and end-to-end store operations across Amazon, eBay, Etsy, TikTok Shop, and Walmart."
CTAs: "Partner With Us" (primary) and "View Services" (secondary).
Right or below: a large glass-framed dashboard mockup (sales chart + payout card) with floating 3D glass cards.

3. Trust badges and supported ecosystem
Auto-scrolling logo carousel: Amazon | eBay | Etsy | TikTok Shop | Walmart | Stripe | Elevate Pay | Payoneer. Grayscale, coloring on hover.

4. Who we are and what's in it for you
Two side-by-side cards:
- For Store Owners: Focus on scaling while we handle listing, SEO, 24/7 support, and logistics.
- For Investors & Partners: Leverage our verified US/UK business infrastructure and warehousing to run high-converting joint venture stores.

5. Core services (4 infrastructure pillars)
Four cards, each with a small mockup or icon:
- End-to-End Store Management
- Corporate Infrastructure & Banking (US LLC / UK LTD / RDP)
- Global Warehousing & 3PL Fulfillment
- B2B Joint Venture & Equity Partnerships
Write a short one-line description for each.

6. Global warehousing network
Dark slate section with an interactive dotted world map. Pulsing markers for United States, United Kingdom, Germany, and Australia. Hover or tap shows a tooltip with the location name.

7. How to get started (3 steps)
- Step 1: Select Your Model. Choose between standalone infrastructure services or full store handling.
- Step 2: Onboarding & Setup. Account formation, payment gateway integration, and warehouse sync.
- Step 3: Launch & Scale. Automated product hunting, listing optimization, and 24/7 operational execution.
Show as a connected horizontal timeline, stacked on mobile.

8. Performance metrics
Four clean metric cards with count-up animation: $5M+ Sales Processed | 4+ Global Warehouses | 98.5% Positive Feedback Rate | 17.0+ Peak ROAS.

9. Consultation and lead capture form
Fields: Name, Email, Service Needed (dropdown: Store Management / LLC Infrastructure / Joint Venture), Message. Add validation, a success state, and a "Book a Consultation" submit button. Route submissions to info@globaldealzllc.site.

10. Footer (compliance)
- Company legal name: GlobalDealzLLC
- Registered address (placeholder) and business email: info@globaldealzllc.site
- Legal links: Privacy Policy | Terms of Service | Refund & Cancellation Policy | Contact Us
- Create simple placeholder pages for each legal link.
- Copyright line with the current year.

TECH
React + Tailwind + shadcn/ui, smooth-scroll anchor links from the nav, semantic HTML, good SEO meta tags, alt text on all images, and fast load.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://globaldealzllc.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d70b1745-c5e7-4b74-8319-5ec3a54d805d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
