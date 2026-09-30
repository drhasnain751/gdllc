# GlobalDealzLLC Logo and Page Expansion

## Overview
Replace the temporary text mark with the supplied light and dark GlobalDealz logo variants, then expand the current marketing site with dedicated pages for each major business area and a custom-quote pricing page.

## What I’ll build
- Use the light-background logo in light mode and the dark-background logo in dark mode and dark sections, including the header, footer, and standalone pages.
- Derive a compact square favicon from the supplied brand symbol and replace the default browser icon.
- Add dedicated pages for Services, Infrastructure & Warehouses, Joint Ventures, Case Studies, and Pricing.
- Keep the existing one-page homepage experience, but connect its cards and navigation to the new detailed pages where appropriate.
- Build the Pricing page around custom proposals rather than invented rates, with clear service categories, included capabilities, engagement factors, and consultation calls to action.
- Extend the shared navigation and footer so every page is easy to reach on desktop and mobile.
- Give every new page unique search and social metadata.

## Page direction
- **Services:** Detailed overview of store operations, company/payment infrastructure, fulfillment, and partnerships.
- **Infrastructure & Warehouses:** US/UK setup, payment rails, remote access, and the four-region fulfillment network.
- **Joint Ventures:** Partnership models, fit criteria, process, governance, and consultation path.
- **Case Studies:** Credible outcome-focused examples framed as representative operating scenarios, avoiding unsupported client claims.
- **Pricing:** Custom-quote service tracks with transparent scope drivers and no fabricated prices.

## Technical details
- Store both uploaded logo images as managed website assets and import their asset pointers.
- Use one shared brand component that automatically switches logo variants with the active theme.
- Create one route file per new page and use typed links throughout.
- Extract or reuse shared page framing where practical so navigation, branding, and calls to action remain consistent.
- Verify desktop and mobile layouts, theme switching, route navigation, favicon loading, and current build health.

## Assumptions
- “Use this logo everywhere” means replacing the current GD/text placeholder across all headers and footers, not placing the logo repeatedly inside content sections.
- Pricing remains inquiry-led with no amounts until confirmed rates are provided.
- Existing legal and contact pages remain in place and receive the new logo automatically.
