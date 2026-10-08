import { createFileRoute } from "@tanstack/react-router";
import { XCircle, ArrowLeft, HelpCircle, Mail } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { GLOBALDEALZ } from "@/lib/site-info";

export const Route = createFileRoute("/payment-cancelled")({
  head: () => ({
    meta: [
      { title: "Payment Cancelled | GlobalDealzLLC" },
      {
        name: "description",
        content:
          "Your payment was cancelled. You can try again or contact our team for assistance.",
      },
      { property: "og:title", content: "Payment Cancelled | GlobalDealzLLC" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PaymentCancelledPage,
});

function PaymentCancelledPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main className="pt-20">
        <section className="mx-auto max-w-2xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-red-50 dark:bg-red-950 p-4">
                <XCircle className="h-16 w-16 text-red-600 dark:text-red-400" />
              </div>
            </div>

            <h1 className="text-4xl font-light leading-[1.08] sm:text-5xl lg:text-6xl">
              Payment Cancelled
            </h1>

            <p className="mt-6 max-w-xl mx-auto text-lg leading-8 text-muted-foreground">
              Your payment was cancelled or not completed. Your card has not been charged.
            </p>

            <div className="mt-12 space-y-4">
              <div className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950 p-6">
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">
                      What happened?
                    </h3>
                    <ul className="text-sm text-amber-900 dark:text-amber-200 space-y-1 list-disc list-inside">
                      <li>You cancelled the payment</li>
                      <li>Your browser was closed or navigation was interrupted</li>
                      <li>There was a network issue during processing</li>
                      <li>Your payment method was declined</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent-strong mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Need Help?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      If you believe this was an error or need assistance, please contact us:
                    </p>
                    <div className="space-y-2">
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
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mt-12">
              <Button
                onClick={() => {
                  window.location.href = "/checkout";
                }}
                className="rounded-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Try Payment Again
              </Button>
              <Button
                onClick={() => {
                  window.location.href = "/";
                }}
                variant="outline"
                className="rounded-full"
              >
                Back to Home
              </Button>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              No charges have been made to your payment method.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
