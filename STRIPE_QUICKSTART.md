# Quick Start: Stripe Integration

## TL;DR Setup (5 minutes)

### 1. Install packages
```bash
npm install
```

### 2. Get Stripe Test Keys
1. Go to https://dashboard.stripe.com/apikeys
2. Copy both test keys

### 3. Add to `.env.local`
```dotenv
VITE_STRIPE_PUBLIC_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
```

### 4. Test it
```bash
npm run dev
# Visit http://localhost:5173/checkout
# Use card: 4242 4242 4242 4242
```

---

## New Routes Added

| Route | Purpose |
|-------|---------|
| `/checkout` | Custom payment form for deposits |
| `/payment-success` | Success confirmation page |
| `/payment-cancelled` | Cancellation handling |

---

## Updated Components

| File | Changes |
|------|---------|
| `/pricing` | Added pricing display and "Pay Deposit" buttons |
| `site-footer` | Enhanced with contact info and compliance links |
| `package.json` | Added Stripe dependencies |

---

## Test Cards

| Card | Use Case |
|------|----------|
| 4242 4242 4242 4242 | Successful payment |
| 4000 0000 0000 0002 | Payment declined |
| 4000 0025 0000 3155 | Requires authentication |

**Expiry:** Any future date (12/34)  
**CVC:** Any 3 digits (123)

---

## Environment Variables

```dotenv
# Required for payments
VITE_STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Optional
VITE_CALENDLY_URL=https://calendly.com/...
```

---

## Key Features

✅ Custom payment amounts  
✅ Client information collection  
✅ Secure card processing (Stripe Elements)  
✅ Success/cancellation handling  
✅ Test mode indicator  
✅ PCI-DSS compliant  
✅ Comprehensive footer with compliance links  
✅ Pricing tier updates  

---

## Verify Installation

```bash
# Check files created
ls src/routes/checkout.tsx
ls src/routes/payment-success.tsx
ls src/routes/payment-cancelled.tsx
ls src/api/stripe/create-payment-intent.ts
ls src/lib/stripe.ts
ls STRIPE_SETUP.md

# Check updated files
grep "VITE_STRIPE_PUBLIC_KEY" .env.example
grep "stripe" package.json
```

---

## Next Steps

1. **Get Stripe Keys** → https://dashboard.stripe.com/apikeys
2. **Add to .env.local** → See "Add to .env.local" section above
3. **Test Checkout** → npm run dev → http://localhost:5173/checkout
4. **For Production** → Replace test keys with live keys
5. **Optional: Set up webhooks** → See STRIPE_SETUP.md

---

## Files Modified/Created

**Created:**
- `src/routes/checkout.tsx` - Payment form page
- `src/routes/payment-success.tsx` - Success page
- `src/routes/payment-cancelled.tsx` - Cancellation page
- `src/lib/stripe.ts` - Stripe config utilities
- `src/lib/stripe-server.ts` - Server-side utilities
- `src/api/stripe/create-payment-intent.ts` - Payment intent creation
- `STRIPE_SETUP.md` - Comprehensive setup guide

**Updated:**
- `package.json` - Added Stripe packages
- `src/routes/pricing.tsx` - Added pricing and buttons
- `src/components/site-footer.tsx` - Enhanced footer
- `.env.example` - Added Stripe config examples

---

## Support & Documentation

- **Setup Guide:** [STRIPE_SETUP.md](STRIPE_SETUP.md)
- **Stripe Docs:** https://stripe.com/docs
- **Contact:** info@globaldealz.site | +1 (901) 443-2051
