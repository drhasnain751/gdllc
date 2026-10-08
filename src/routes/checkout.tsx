import { createFileRoute } from "@tanstack/react-router";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getStripePublicKey, isStripeConfigured } from "@/lib/stripe";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Payment Checkout | GlobalDealzLLC" },
      {
        name: "description",
        content:
          "Secure payment processing for GlobalDealzLLC services and deposits.",
      },
      { property: "og:title", content: "Payment Checkout | GlobalDealzLLC" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CheckoutPage,
});

const stripePromise = getStripePublicKey() ? loadStripe(getStripePublicKey()) : Promise.resolve(null);

function CheckoutPage() {
  const configured = isStripeConfigured();

  if (!configured) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <SiteHeader />
        <main className="pt-20">
          <section className="mx-auto max-w-2xl px-5 py-20 lg:px-8 lg:py-28">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Stripe is not configured. Please set VITE_STRIPE_PUBLIC_KEY environment variable.
              </AlertDescription>
            </Alert>
          </section>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main className="pt-20">
        <section className="border-b border-border bg-white/2">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <h1 className="text-5xl font-light leading-[1.08] sm:text-6xl lg:text-7xl">
              Custom Payment
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Pay a custom invoice amount or retainer deposit for GlobalDealzLLC services.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-5 py-20 lg:px-8">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

interface CheckoutFormData {
  clientName: string;
  clientEmail: string;
  amount: string;
  invoiceRef: string;
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    clientName: "",
    clientEmail: "",
    amount: "",
    invoiceRef: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!stripe || !elements) {
      setError("Stripe is not ready. Please refresh the page.");
      return;
    }

    if (
      !formData.clientName ||
      !formData.clientEmail ||
      !formData.amount ||
      !formData.invoiceRef
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const amountNum = parseFloat(formData.amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      setError("Please enter a valid amount greater than $0.");
      return;
    }

    if (!formData.clientEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Create payment intent on the server
      const response = await fetch("/api/stripe/payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.round(amountNum * 100), // Convert to cents
          clientName: formData.clientName,
          clientEmail: formData.clientEmail,
          invoiceRef: formData.invoiceRef,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to create payment intent");
      }

      const paymentData = await response.json();
      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        throw new Error("Card element not found");
      }

      // Confirm the payment
      const result = await stripe.confirmCardPayment(
        paymentData.clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: formData.clientName,
              email: formData.clientEmail,
            },
          },
        }
      );

      if (result.error) {
        setError(result.error.message || "Payment failed");
      } else if (result.paymentIntent?.status === "succeeded") {
        setSuccess(true);
        // Redirect to success page after a short delay
        setTimeout(() => {
          window.location.href = `/payment-success?id=${result.paymentIntent?.id}`;
        }, 1000);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-green-800 font-semibold">Payment processing...</p>
        <p className="mt-2 text-sm text-green-700">
          Redirecting to success page...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="clientName">Full Name *</Label>
          <Input
            id="clientName"
            name="clientName"
            type="text"
            placeholder="John Doe"
            value={formData.clientName}
            onChange={handleInputChange}
            disabled={loading}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="clientEmail">Email Address *</Label>
          <Input
            id="clientEmail"
            name="clientEmail"
            type="email"
            placeholder="john@example.com"
            value={formData.clientEmail}
            onChange={handleInputChange}
            disabled={loading}
            required
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="amount">Payment Amount ($) *</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            placeholder="499.00"
            step="0.01"
            min="0"
            value={formData.amount}
            onChange={handleInputChange}
            disabled={loading}
            required
          />
          <p className="text-xs text-muted-foreground">
            Enter the amount in USD (e.g., 499.00)
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="invoiceRef">Invoice / Project Reference *</Label>
          <Input
            id="invoiceRef"
            name="invoiceRef"
            type="text"
            placeholder="INV-2024-001 or Project Name"
            value={formData.invoiceRef}
            onChange={handleInputChange}
            disabled={loading}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Card Details *</Label>
        <div className="rounded-md border border-input bg-background p-4">
          <CardElement
            options={{
              style: {
                base: {
                  color: "inherit",
                  fontFamily: "inherit",
                  fontSize: "16px",
                  "::placeholder": {
                    color: "rgba(0, 0, 0, 0.4)",
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-semibold mb-2">Test Mode Payment</p>
        <p>
          This is a test payment in Stripe test mode. Use card number{" "}
          <code className="font-mono bg-white px-1 rounded">
            4242 4242 4242 4242
          </code>
          , any future expiry date, and any CVC.
        </p>
      </div>

      <Button
        type="submit"
        disabled={loading || !stripe}
        size="lg"
        className="w-full rounded-full"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing Payment...
          </>
        ) : (
          "Pay Now"
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Your payment information is securely processed by Stripe. We never see your card details.
      </p>
    </form>
  );
}
