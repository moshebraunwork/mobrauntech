import { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mobrauntech. Tell us about your project and we'll get back to you within 24 hours.",
};

const steps = [
  { step: "1", label: "Send your message", desc: "Fill out the form with your project details." },
  { step: "2", label: "We respond within 24h", desc: "Moshe reviews your request and gets back to you." },
  { step: "3", label: "Free consultation call", desc: "We chat about your goals, timeline, and budget." },
  { step: "4", label: "We get to work", desc: "You only pay when you're happy with the result." },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: info */}
        <div>
          <h1 className="text-4xl font-bold text-[var(--text)] mb-4">
            Let&apos;s Build Something Together
          </h1>
          <p className="text-[var(--text-muted)] text-lg mb-10">
            Tell us about your project and we&apos;ll get back to you within 24
            hours — no commitment, no pressure.
          </p>

          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] flex items-center justify-center text-sm font-bold text-[var(--text)] shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-[var(--text)] text-sm">{s.label}</p>
                  <p className="text-sm text-[var(--text-muted)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--text-muted)] mb-1">Prefer email?</p>
            <a
              href="mailto:moshe@mobrauntech.com"
              className="font-medium text-[var(--text)] hover:underline underline-offset-4 transition-colors"
            >
              moshe@mobrauntech.com
            </a>
          </div>
        </div>

        {/* Right: form */}
        <Suspense fallback={<div className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 h-96 animate-pulse" />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
