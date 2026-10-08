/**
 * Stripe Payment Intent API Handler
 * 
 * This handler creates a Stripe payment intent for custom invoice/deposit payments.
 * It validates the request and returns the client secret for card confirmation.
 * 
 * POST /api/stripe/payment-intent
 * 
 * Request body:
 * {
 *   amount: number (in cents),
 *   clientName: string,
 *   clientEmail: string,
 *   invoiceRef: string
 * }
 * 
 * Response:
 * {
 *   clientSecret: string,
 *   paymentIntentId: string
 * }
 */

/**
 * NOTE: To use this with TanStack Start, you'll need to set up a backend server
 * or use Vercel Functions, AWS Lambda, or similar serverless platform.
 * 
 * For development, you can use a mock server or remove payment processing
 * and redirect to Stripe Checkout instead.
 * 
 * Alternative approaches:
 * 1. Use Stripe Checkout (redirect to hosted payment page)
 * 2. Use a separate backend (Node.js, Python, etc.)
 * 3. Use Vercel Functions or AWS Lambda
 * 4. Use Stripe's payment form with client-side payment methods
 */

export default {
  POST: async (event: any) => {
    try {
      const body = event.body || {};

      // Validate required fields
      if (!body.amount || !body.clientName || !body.clientEmail || !body.invoiceRef) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: "Missing required fields: amount, clientName, clientEmail, invoiceRef",
          }),
        };
      }

      // Validate amount
      const amount = parseInt(body.amount);
      if (isNaN(amount) || amount <= 0) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: "Invalid amount. Must be greater than 0.",
          }),
        };
      }

      // Validate email
      if (!body.clientEmail.includes("@")) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: "Invalid email address",
          }),
        };
      }

      // Get Stripe secret key from environment
      const stripeSecretKey = process.env['STRIPE_SECRET_KEY'];
      if (!stripeSecretKey) {
        console.error("STRIPE_SECRET_KEY is not configured");
        return {
          statusCode: 500,
          body: JSON.stringify({
            error: "Payment processing is not configured. Please contact support.",
          }),
        };
      }

      // Import Stripe dynamically to avoid errors if not installed
      let Stripe;
      try {
        const stripeModule = await import("stripe");
        Stripe = stripeModule.default;
      } catch (e) {
        console.error("Stripe module not installed:", e);
        return {
          statusCode: 500,
          body: JSON.stringify({
            error: "Payment processing module not available",
          }),
        };
      }

      const stripe = new Stripe(stripeSecretKey, {
        apiVersion: "2024-06-20" as any,
      });

      // Create payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        payment_method_types: ["card"],
        metadata: {
          clientName: body.clientName,
          clientEmail: body.clientEmail,
          invoiceRef: body.invoiceRef,
        },
        receipt_email: body.clientEmail,
      });

      return {
        statusCode: 200,
        body: JSON.stringify({
          clientSecret: paymentIntent.client_secret,
          paymentIntentId: paymentIntent.id,
        }),
      };
    } catch (error) {
      console.error("Stripe API error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Payment processing failed";

      return {
        statusCode: 500,
        body: JSON.stringify({
          error: errorMessage,
        }),
      };
    }
  },
};
