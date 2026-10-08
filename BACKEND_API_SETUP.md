# IMPORTANT: Backend API Setup

This document explains the Stripe payment integration backend requirements for GlobalDealzLLC.

## Current Status

The frontend Stripe integration is **100% complete** and production-ready:
- ✅ Checkout form with validation
- ✅ Stripe Elements card input
- ✅ Success/cancellation pages
- ✅ Pricing tier display
- ✅ Footer compliance

**What's needed:** A backend API endpoint to handle payment intent creation.

---

## Backend Options

### Option 1: Vercel Functions (Recommended)
Best for TanStack Start + Vercel hosting

1. Create `api/stripe/payment-intent.ts` in your project root:
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, clientName, clientEmail, invoiceRef } = req.body;

    if (!amount || !clientName || !clientEmail || !invoiceRef) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency: 'usd',
      payment_method_types: ['card'],
      metadata: { clientName, clientEmail, invoiceRef },
      receipt_email: clientEmail,
    });

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Payment processing failed',
    });
  }
};
```

### Option 2: Separate Node.js Backend
For independent backend server

```typescript
import express from 'express';
import Stripe from 'stripe';

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

app.post('/api/stripe/payment-intent', express.json(), async (req, res) => {
  try {
    const { amount, clientName, clientEmail, invoiceRef } = req.body;

    if (!amount || !clientName || !clientEmail || !invoiceRef) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency: 'usd',
      payment_method_types: ['card'],
      metadata: { clientName, clientEmail, invoiceRef },
      receipt_email: clientEmail,
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Payment processing failed',
    });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

### Option 3: Stripe Checkout (Simpler Alternative)
For redirect-based payments without custom form

```typescript
// In checkout.tsx
const handleCheckout = async () => {
  const stripe = await loadStripe(getStripePublicKey());
  
  const { sessionId } = await fetch('/api/stripe/create-checkout-session', {
    method: 'POST',
    body: JSON.stringify({
      amount: amountNum * 100,
      clientEmail: formData.clientEmail,
    }),
  }).then(r => r.json());

  await stripe?.redirectToCheckout({ sessionId });
};
```

---

## Configuration

### Environment Variables Required

Add to your `.env` or deployment platform:

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_...  # Get from https://dashboard.stripe.com/apikeys
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

### For Production

1. Switch to Stripe **LIVE keys** (not test keys)
2. Update environment variables on your hosting platform
3. Enable HTTPS (required by Stripe)
4. Set up webhook handlers for payment confirmations

---

## API Endpoint Specification

The frontend expects this endpoint:

**Endpoint:** `POST /api/stripe/payment-intent`

**Request:**
```json
{
  "amount": 50000,
  "clientName": "John Doe",
  "clientEmail": "john@example.com",
  "invoiceRef": "INV-2024-001"
}
```

**Success Response (200):**
```json
{
  "clientSecret": "pi_test_...",
  "paymentIntentId": "pi_test_..."
}
```

**Error Response (400/500):**
```json
{
  "error": "Invalid amount or missing fields"
}
```

---

## Development Testing

### Option A: Mock Server (No Backend)
For testing UI without backend:

```typescript
// In checkout.tsx, replace the fetch call:
const mockPaymentData = {
  clientSecret: 'pi_test_4eC39HqLyjWDarltT1ZdN7ab_secret_test',
  paymentIntentId: 'pi_test_4eC39HqLyjWDarltT1ZdN7ab',
};
```

### Option B: Local Node Server
```bash
npm install express stripe cors
node your-api-server.js
```

### Option C: Use ngrok for Tunneling
```bash
npx ngrok http 3001
# Update checkout.tsx fetch URL to ngrok URL
```

---

## Testing Payments

Use Stripe test cards:

| Card | Use Case |
|------|----------|
| 4242 4242 4242 4242 | Successful payment |
| 4000 0000 0000 0002 | Card declined |
| 4000 0025 0000 3155 | Requires authentication |

**Expiry:** Any future date (12/34)  
**CVC:** Any 3 digits (123)  

Monitor payments at: https://dashboard.stripe.com/test/payments

---

## Webhook Integration (Optional)

For payment confirmation notifications, set up webhooks:

1. Go to https://dashboard.stripe.com/webhooks
2. Add endpoint: `https://yourapp.com/api/webhooks/stripe`
3. Listen for: `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Create handler:

```typescript
export async function handleStripeWebhook(event: any) {
  switch (event.type) {
    case 'payment_intent.succeeded':
      // Update order status in database
      const paymentIntent = event.data.object;
      console.log('Payment succeeded:', paymentIntent.id);
      break;
    case 'payment_intent.payment_failed':
      console.log('Payment failed:', event.data.object.id);
      break;
  }
}
```

---

## Deployment Checklist

- [ ] Backend API endpoint created and tested
- [ ] Environment variables configured on hosting platform
- [ ] HTTPS/SSL certificate enabled
- [ ] Stripe LIVE keys obtained and configured
- [ ] Webhooks set up for payment notifications
- [ ] Error monitoring/logging configured
- [ ] Email confirmations set up
- [ ] Test payment processed successfully
- [ ] Refund process documented and tested

---

## Support

For issues:
1. Check Stripe dashboard for payment status
2. Review error logs in your backend
3. Verify environment variables are set
4. Test with Stripe test cards
5. Contact Stripe support: https://support.stripe.com

---

## Frontend-Backend Integration

The frontend (`/checkout` page) makes a POST request to `/api/stripe/payment-intent`.

**Flow:**
1. User fills form on `/checkout`
2. Clicks "Pay Now"
3. Frontend calls `/api/stripe/payment-intent` with amount and details
4. Backend creates Stripe PaymentIntent
5. Returns `clientSecret` to frontend
6. Frontend confirms payment with card element
7. Redirects to `/payment-success` or `/payment-cancelled`

---

**Note:** The frontend is fully implemented. Just add your backend API endpoint!
