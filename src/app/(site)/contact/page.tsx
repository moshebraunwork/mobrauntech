import { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "./contact-form";
import { Reveal } from "@/components/reveal";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mobrauntech. Tell us about your project and we'll get back to you within 24 hours.",
};

const steps = [
  {
    step: "1",
    label: "Send your message",
    desc: "Fill out the form with your project details.",
  },
  {
    step: "2",
    label: "We respond within 24h",
    desc: "Moshe reviews your request and gets back to you.",
  },
  {
    step: "3",
    label: "Free consultation call",
    desc: "We chat about your goals, timeline, and budget.",
  },
  {
    step: "4",
    label: "We get to work",
    desc: "You only pay when you're happy with the result.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-150">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid items-start gap-16 md:grid-cols-2">
          {/* Left: info */}
          <Reveal>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something together
            </h1>
            <p className="mb-12 text-lg text-muted">
              Tell us about your project and we&apos;ll get back to you within
              24 hours — no commitment, no pressure.
            </p>

            <div className="relative space-y-8">
              {/* Connecting line */}
              <div
                aria-hidden
                className="absolute top-2 bottom-2 left-4 w-px bg-gradient-to-b from-accent/60 via-border to-transparent"
              />
              {steps.map((s, i) => (
                <Reveal key={s.step} delay={i * 90} className="relative flex items-start gap-5">
                  <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-surface text-sm font-bold text-accent shadow-[0_0_16px_var(--accent-soft)]">
                    {s.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{s.label}</p>
                    <p className="mt-0.5 text-sm text-muted">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-10">
              <p className="mb-2 text-sm text-muted">Prefer email?</p>
              <a
                href="mailto:moshe@mobrauntech.com"
                className="inline-flex items-center gap-2 font-medium underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                <Mail size={16} className="text-accent" />
                moshe@mobrauntech.com
              </a>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={150}>
            <Suspense
              fallback={
                <div className="h-150 animate-pulse rounded-2xl border border-border bg-surface" />
              }
            >
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
