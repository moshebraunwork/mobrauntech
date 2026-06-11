import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CheckCircle2, ArrowRight, Plus, BadgeCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for websites and custom software. Starting at $499. No upfront payment required.",
};

const packages = [
  {
    name: "Starter",
    price: "$499",
    tagline: "One-time payment",
    description:
      "Everything you need to get your business online with a clean, professional presence.",
    features: [
      "Single-page website",
      "Clean, modern responsive design",
      "Mobile-first layout",
      "Contact form",
      "Basic SEO setup (meta tags, sitemap)",
      "Google Analytics integration",
      "1 round of revisions",
    ],
    cta: "Get Started with Starter",
    highlighted: false,
  },
  {
    name: "Business",
    price: "$999",
    tagline: "One-time payment",
    description:
      "A full multi-page site built to attract, inform, and convert your ideal clients.",
    features: [
      "Up to 5 pages",
      "Everything in Starter",
      "Custom branding & color scheme",
      "Blog or portfolio section",
      "Social media integration",
      "Contact form with email notifications",
      "Priority support for 30 days",
      "2 rounds of revisions",
    ],
    cta: "Get Started with Business",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "From $2,500",
    tagline: "Quote-based",
    description:
      "A fully custom web application built around your exact workflow and requirements.",
    features: [
      "Custom web application",
      "Custom database design",
      "Admin dashboard",
      "Third-party API integrations",
      "User authentication (if needed)",
      "Ongoing support agreement",
      "Unlimited revisions during build",
      "Dedicated project manager",
    ],
    cta: "Request a Quote",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Do I have to pay before the work starts?",
    a: "No. You only pay after you review the finished product and approve it. We don't require any upfront payment.",
  },
  {
    q: "How long does a project take?",
    a: "Starter sites typically take 3–5 business days. Business packages take 1–2 weeks. Custom projects vary based on complexity but we'll give you a clear timeline upfront.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Each package includes revision rounds during the build. After launch, we offer ongoing support — reach out and we'll take care of it.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just tell us about your business, your goals, and any design preferences. We handle the rest and check in with you at each milestone.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. Many clients start with a Starter site and upgrade to Business or Custom as their needs grow.",
  },
];

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-150">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        {/* Header */}
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Pricing
            </p>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mx-auto mb-7 max-w-xl text-lg text-muted">
              No hidden fees. No hourly billing surprises. Pick the package
              that fits your business and get started today.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-5 py-2 text-sm font-medium">
              <BadgeCheck size={16} className="text-accent" />
              You only pay when you&apos;re happy with the result
            </div>
          </div>
        </Reveal>

        {/* Packages */}
        <div className="mb-24 grid items-stretch gap-6 sm:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 90} className="h-full">
              <div
                className={
                  pkg.highlighted
                    ? "gradient-border relative flex h-full flex-col rounded-2xl p-7 shadow-[0_20px_70px_-25px_var(--glow)]"
                    : "relative flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent/40"
                }
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-3.5 py-1 text-xs font-semibold text-white shadow-[0_4px_14px_var(--glow)]">
                    Most Popular
                  </span>
                )}
                <h2 className="font-display text-lg font-bold">{pkg.name}</h2>
                <p className="mt-2 font-display text-4xl font-bold">{pkg.price}</p>
                <p className="mt-1.5 text-xs uppercase tracking-wider text-muted">
                  {pkg.tagline}
                </p>
                <p className="mt-4 mb-7 text-sm leading-relaxed text-muted">
                  {pkg.description}
                </p>
                <ul className="mb-8 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.highlighted ? "default" : "outline"}
                  asChild
                  className="mt-auto w-full"
                >
                  <Link href={`/contact?plan=${encodeURIComponent(pkg.name)}`}>
                    {pkg.cta} <ArrowRight size={15} />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* FAQ */}
        <Reveal>
          <div className="border-t border-border pt-16">
            <h2 className="mb-10 text-center font-display text-2xl font-bold sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mx-auto max-w-2xl space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="faq group rounded-2xl border border-border bg-surface transition-colors duration-300 open:border-accent/40 hover:border-accent/40"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5">
                    <h3 className="font-semibold">{faq.q}</h3>
                    <Plus size={18} className="faq-icon shrink-0 text-accent" />
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal>
          <div className="mt-20 text-center">
            <h2 className="mb-3 font-display text-2xl font-bold sm:text-3xl">
              Not sure which plan is right for you?
            </h2>
            <p className="mb-7 text-muted">
              Send a message and we&apos;ll help you figure out the best fit.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="group">
                Get a Free Consultation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
