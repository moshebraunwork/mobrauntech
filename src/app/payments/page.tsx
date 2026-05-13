import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lock, CreditCard, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Payments",
  description:
    "Securely pay your Mobrauntech invoice via Stripe. Fast, safe, and simple.",
};

export default function PaymentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] mb-6">
            <CreditCard size={26} className="text-[var(--text)]" />
          </div>
          <h1 className="text-3xl font-bold text-[var(--text)] mb-3">
            Pay Your Invoice
          </h1>
          <p className="text-[var(--text-muted)]">
            You received a payment link from Moshe. Click it to pay securely
            through Stripe. If you haven&apos;t received one yet,{" "}
            <a href="/contact" className="text-[var(--text)] underline underline-offset-4">
              get in touch
            </a>
            .
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How it works</CardTitle>
            <CardDescription>
              Payments are processed securely through Stripe.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-sm font-bold text-[var(--text)] shrink-0">
                1
              </div>
              <div>
                <p className="font-semibold text-sm text-[var(--text)]">
                  Review your project
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Make sure you&apos;re fully happy with the finished work before paying.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-sm font-bold text-[var(--text)] shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-sm text-[var(--text)]">
                  Click your payment link
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Moshe will send you a secure Stripe Checkout link via email.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-sm font-bold text-[var(--text)] shrink-0">
                3
              </div>
              <div>
                <p className="font-semibold text-sm text-[var(--text)]">
                  Pay securely via Stripe
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Enter your card details on Stripe&apos;s secure checkout. You&apos;ll
                  receive a receipt instantly.
                </p>
              </div>
            </div>

            <div className="border-t border-[var(--border)] pt-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Lock size={14} className="shrink-0" />
                All payments processed securely by Stripe
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <ShieldCheck size={14} className="shrink-0" />
                Your card details are never stored by Mobrauntech
              </div>
            </div>

            <Button
              asChild
              className="w-full"
              disabled
              title="Use the link Moshe sent you"
            >
              <span>
                <Lock size={16} />
                Pay via Stripe — Use the link in your email
              </span>
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-[var(--text-muted)] mt-6">
          Haven&apos;t received your invoice?{" "}
          <a href="/contact" className="text-[var(--text)] underline underline-offset-4">
            Contact Moshe
          </a>
        </p>
      </div>
    </div>
  );
}
