/**
 * Stripe configuration module
 * Manages Stripe public key and client initialization
 */

export function getStripePublicKey(): string {
  const key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
  
  if (!key) {
    console.warn('VITE_STRIPE_PUBLIC_KEY is not set. Stripe functionality will not work.');
    return '';
  }
  
  return key;
}

export function isStripeConfigured(): boolean {
  return !!import.meta.env.VITE_STRIPE_PUBLIC_KEY;
}
