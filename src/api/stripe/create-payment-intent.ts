/**
 * Server function for creating Stripe payment intents
 * This is a TanStack Start server function that runs only on the server
 * Import this and call it from client components
 */

// Note: This file will need adjustment based on your TanStack Start version
// For now, we'll use a simpler approach with an API route
// The checkout.tsx component will call /api/stripe/payment-intent directly

export interface PaymentIntentRequest {
  amount: number;
  clientName: string;
  clientEmail: string;
  invoiceRef: string;
}

export interface PaymentIntentResponse {
  clientSecret: string;
  paymentIntentId: string;
}

/**
 * Server-side Stripe payment intent creation
 * To use this in a TanStack Start server function:
 * 
 * import { serverFn } from '@tanstack/react-start/server';
 * 
 * export const createPaymentIntent = serverFn({ method: 'POST' })(
 *   async (data: PaymentIntentRequest) => {
 *     // Implementation here
 *   }
 * );
 */
