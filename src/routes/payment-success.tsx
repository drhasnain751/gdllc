import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, Mail, Home, FileText } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { GLOBALDEALZ } from "@/lib/site-info";

export const Route = createFileRoute("/payment-success")({
  head: () => ({
    meta: [
      { title: "Payment Successful | GlobalDealzLLC" },
      {
        name: "description",
        content: "Thank you for your payment. Your transaction has been processed successfully.",
      },
      { property: "og:title", content: "Payment Successful | GlobalDealzLLC" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PaymentSuccessPage,
});

function PaymentSuccessPage() {
  const paymentId = new URLSearchParams(window.location.search).get("id");

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main className="pt-20">
        <section className="mx-auto max-w-2xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-green-50 dark:bg-green-950 p-4">
                <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
              </div>
            </div>

            <h1 className="text-4xl font-light leading-[1.08] sm:text-5xl lg:text-6xl">
              Payment Successful!
            </h1>

            <p className="mt-6 max-w-xl mx-auto text-lg leading-8 text-muted-foreground">
              Thank you for your payment. Your transaction has been processed successfully and
              securely.
            </p>

            {paymentId && (
              <div className="mt-8 rounded-lg border border-border bg-white/5 p-6">
                <p className="text-sm text-muted-foreground mb-2">Payment ID:</p>
                <p className="font-mono text-sm break-all text-foreground">{paymentId}</p>
              </div>
            )}

            <div className="mt-12 space-y-4">
              <div className="rounded-lg border border-border bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent-strong mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Confirmation Email</h3>
                    <p className="text-sm text-muted-foreground">
                      A detailed receipt and payment confirmation has been sent to your email
                      address.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-accent-strong mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Next Steps</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will review your payment and contact you shortly to discuss your
                      project details and scope.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">
                Have questions? Contact us directly:
              </p>
              <div className="space-y-2 text-center mb-8">
                <p>
                  <a
                    href={`mailto:${GLOBALDEALZ.email}`}
                    className="text-accent-strong hover:underline"
                  >
                    {GLOBALDEALZ.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${GLOBALDEALZ.phone.replace(/[^+0-9]/g, "")}`}
                    className="text-accent-strong hover:underline"
                  >
                    {GLOBALDEALZ.phone}
                  </a>
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  variant="outline"
                  className="rounded-full"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
                <Button
                  onClick={() => {
                    window.location.href = "/pricing";
                  }}
                  className="rounded-full"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
