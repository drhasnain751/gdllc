/**
 * Server-side Stripe utilities
 * Note: These are provided for reference only
 * The actual payment intent creation is handled by the server function in src/api/stripe/create-payment-intent.ts
 */

export interface PaymentIntentRequest {
  amount: number; // Amount in cents
  clientName: string;
  clientEmail: string;
  invoiceRef: string;
}
