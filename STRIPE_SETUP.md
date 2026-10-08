# Stripe Payment Integration Setup Guide

## Overview

This guide walks through setting up the Stripe payment integration for GlobalDealzLLC, including custom payment deposits, checkout flow, and Stripe compliance requirements.

## What's Been Added

### 1. **New Pages**
- `/checkout` - Custom payment form for deposits and invoices
- `/payment-success` - Success confirmation page
- `/payment-cancelled` - Cancellation handling page

### 2. **Updated Components**
- **Pricing Page** (`/pricing`) - Now includes:
  - Indicative pricing ($499, $999 deposits)
  - "Pay Deposit" buttons for Core Infrastructure and Managed Operations
  - "Pay Custom Deposit" button for Joint Venture tier
  - "Discuss this tier" consultation options

- **Site Footer** - Enhanced with:
  - Organized legal and products navigation
  - Direct contact information with icons
  - Email, phone, and physical address
  - Stripe payment attribution link

### 3. **Payment Processing**
- Server-side Stripe integration using `server$` functions
- Card payment processing with Stripe Elements
- Client secret-based payment intent flow
- Secure metadata tracking (client name, email, invoice reference)

### 4. **Security Features**
- PCI-DSS compliant card handling via Stripe Elements
- Server-side secret key management
- Test mode indicators for development
- Environment variable protection

---

## Setup Instructions

### Step 1: Install Dependencies

The following packages have been added to `package.json`:
- `@stripe/react-stripe-js` - React bindings for Stripe
- `@stripe/stripe-js` - Stripe.js library
- `stripe` - Node.js Stripe SDK

Run npm install:
```bash
npm install
```

### Step 2: Get Stripe API Keys

1. Go to https://dashboard.stripe.com/apikeys
2. You'll see two sets of keys:
   - **Test Keys** (for development) - Start with `pk_test_` and `sk_test_`
   - **Live Keys** (for production) - Start with `pk_live_` and `sk_live_`

**For Development:** Use Test Keys

3. Copy both keys:
   - Publishable Key (public key)
   - Secret Key (private key)

### Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Add your Stripe keys to `.env.local`:
```dotenv
# Stripe Test Keys (Development)
VITE_STRIPE_PUBLIC_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
```

**⚠️ IMPORTANT:**
- `VITE_STRIPE_PUBLIC_KEY` - Can be exposed in frontend code (it's public)
- `STRIPE_SECRET_KEY` - NEVER commit this to version control! Keep it secret.
- Add `.env.local` to `.gitignore` if not already included

### Step 4: Update Business Information (Optional)

Edit `/src/lib/site-info.ts` to update contact details:
```typescript
export const GLOBALDEALZ = {
  companyName: "GlobalDealz LLC",
  email: "info@globaldealz.site",
  phone: "+1 (901) 443-2051",
  address: "34 N Franklin Ave Ste 687, Pinedale, WY 82941, USA",
  // ... other fields
}
```

### Step 5: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Navigate to `/checkout`

3. Use Stripe test card numbers:
   - **Successful payment:** `4242 4242 4242 4242`
   - **Declined payment:** `4000 0000 0000 0002`
   - **Requires authentication:** `4000 0025 0000 3155`
   - Any future expiry date (e.g., 12/34)
   - Any 3-digit CVC (e.g., 123)

4. Test the complete flow:
   - Fill in test data
   - Enter test card number
   - Complete payment
   - Verify redirect to `/payment-success`

---

## Page Descriptions

### Checkout Page (`/checkout`)

**Features:**
- Custom payment amount input
- Client information form (name, email, invoice reference)
- Stripe card element for secure payment
- Real-time validation
- Test mode indicator
- Error handling and user feedback

**Form Fields:**
- Full Name (required)
- Email Address (required)
- Payment Amount in USD (required)
- Invoice/Project Reference (required)
- Card Details (required)

### Payment Success Page (`/payment-success`)

**Features:**
- Success confirmation with visual indicator
- Payment ID display for record-keeping
- Confirmation email notification
- Next steps guidance
- Direct contact information
- Navigation back to home or pricing

### Payment Cancelled Page (`/payment-cancelled`)

**Features:**
- Clear cancellation message
- Explanation of why payment was cancelled
- Help/support information
- Retry payment button
- Contact information for issues

---

## Pricing Page Updates

The pricing page now displays:

1. **Core Infrastructure**
   - Price: $499 / deposit
   - "Pay Deposit" button → `/checkout`
   - "Discuss this tier" button → Calendly consultation

2. **Managed Operations & Sourcing**
   - Price: $999 / deposit
   - Same button options as above

3. **Joint Venture Strategic Growth**
   - Price: Custom / quote
   - "Pay Custom Deposit" button → `/checkout`
   - "Request Custom Quote" button → Calendly consultation

---

## Footer Compliance & Contact

The updated footer includes:

**Three-Column Layout:**
1. **Company Info** - Logo, description
2. **Products** - Links to services, infrastructure, case studies, checkout
3. **Legal & Support** - Privacy, terms, refund policy, contact

**Contact Information Block:**
- Physical Address with map icon
- Email with mail icon
- Phone number with phone icon
- Clickable links for mailto: and tel:

**Compliance:**
- All required pages linked (Privacy, Terms, Refund Policy)
- Direct email and phone contact
- Clear business identity
- Stripe attribution for PCI compliance transparency

---

## Production Deployment

### Before Going Live:

1. **Obtain Live Keys** from Stripe Dashboard
2. **Update Environment Variables:**
   ```dotenv
   VITE_STRIPE_PUBLIC_KEY=pk_live_YOUR_LIVE_KEY
   STRIPE_SECRET_KEY=sk_live_YOUR_LIVE_KEY
   ```

3. **Enable 3D Secure (SCA):**
   - Stripe automatically handles this
   - Customers may need to authenticate with their bank

4. **Set Up Webhooks (Optional but Recommended):**
   - Add webhook endpoint at `/api/webhooks/stripe`
   - Listen for: `payment_intent.succeeded`, `payment_intent.payment_failed`
   - Update order/invoice status in your database

5. **SSL Certificate:**
   - Ensure your domain has a valid SSL certificate (https://)
   - Required for PCI DSS compliance

6. **Review Stripe Documentation:**
   - https://stripe.com/docs/payments/payment-intents
   - https://stripe.com/docs/security
   - https://stripe.com/docs/compliance

### Webhook Setup (Advanced)

To receive payment confirmation notifications, add this webhook handler:

```typescript
// src/api/webhooks/stripe.ts
import { server$ } from "@tanstack/react-start/server";
import Stripe from "stripe";

export const handleStripeWebhook = server$(async (body: string, signature: string) => {
  const stripe = new Stripe(process.env["STRIPE_SECRET_KEY"]!, {
    apiVersion: "2024-06-20",
  });

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env["STRIPE_WEBHOOK_SECRET"]!
    );

    switch (event.type) {
      case "payment_intent.succeeded":
        console.log("Payment succeeded:", event.data.object);
        // Update your database here
        break;
      case "payment_intent.payment_failed":
        console.log("Payment failed:", event.data.object);
        // Handle failed payment
        break;
    }

    return { received: true };
  } catch (error) {
    console.error("Webhook error:", error);
    throw error;
  }
});
```

---

## Testing Checklist

- [ ] Checkout page loads with Stripe elements
- [ ] Form validation works
- [ ] Test card payment succeeds
- [ ] Redirects to `/payment-success`
- [ ] Payment cancelled handling works
- [ ] Footer displays contact information
- [ ] All compliance links work (Privacy, Terms, etc.)
- [ ] Mobile responsive layout
- [ ] Email confirmation works (if configured)
- [ ] Error messages display clearly

---

## Troubleshooting

### "Stripe is not configured" Error
- Check that `VITE_STRIPE_PUBLIC_KEY` is set in `.env.local`
- Restart development server after adding env variables

### Card Decline
- Use test cards from Stripe docs
- Check if using correct test keys (not live keys)

### "Cannot find module 'stripe'" Error
- Run `npm install stripe @stripe/react-stripe-js`
- Restart development server

### Payment Intent Creation Fails
- Verify `STRIPE_SECRET_KEY` is set on server
- Check Stripe API key format (should start with `sk_test_` or `sk_live_`)
- Check browser console for detailed error messages

### CORS Issues
- This shouldn't occur since we're using server functions
- If it does, verify your API is running on the correct domain

---

## Security Best Practices

1. ✅ Never commit `.env.local` or secret keys to Git
2. ✅ Use HTTPS in production (enforced by Stripe)
3. ✅ Validate amounts on both client and server
4. ✅ Store payment metadata for audit trails
5. ✅ Use Stripe's prebuilt UI components (not custom card inputs)
6. ✅ Enable webhook signatures for payment confirmation
7. ✅ Regularly rotate API keys if compromised
8. ✅ Monitor Stripe dashboard for suspicious activity

---

## Additional Resources

- [Stripe Payment Intents API](https://stripe.com/docs/payments/payment-intents)
- [Stripe React SDK](https://stripe.com/docs/stripe-js/react)
- [Stripe Test Mode](https://stripe.com/docs/testing)
- [PCI DSS Compliance](https://stripe.com/docs/security/compliance)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)

---

## Support

For issues or questions:
- Email: info@globaldealz.site
- Phone: +1 (901) 443-2051
- Stripe Support: https://support.stripe.com
