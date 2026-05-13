import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
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
    description: "Everything you need to get your business online with a clean, professional presence.",
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
    description: "A full multi-page site built to attract, inform, and convert your ideal clients.",
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
    description: "A fully custom web application built around your exact workflow and requirements.",
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
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[var(--text)] mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto mb-6">
          No hidden fees. No hourly billing surprises. Pick the package that fits
          your business and get started today.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-5 py-2 text-sm font-medium text-[var(--text)]">
          <CheckCircle size={16} className="text-green-500" />
          You only pay when you&apos;re happy with the result
        </div>
      </div>

      {/* Packages */}
      <div className="grid sm:grid-cols-3 gap-6 mb-20">
        {packages.map((pkg) => (
          <Card
            key={pkg.name}
            className={
              pkg.highlighted
                ? "border-[var(--text)] bg-[var(--bg)] relative"
                : "relative"
            }
          >
            {pkg.highlighted && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[var(--btn-bg)] text-[var(--btn-text)] text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{pkg.name}</CardTitle>
              <p className="text-3xl font-bold text-[var(--text)] mt-1">
                {pkg.price}
              </p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                {pkg.tagline}
              </p>
              <CardDescription className="mt-2">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <ul className="space-y-2.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                    <CheckCircle size={15} className="text-[var(--text)] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.highlighted ? "default" : "outline"}
                asChild
                className="w-full"
              >
                <Link href={`/contact?plan=${encodeURIComponent(pkg.name)}`}>
                  {pkg.cta} <ArrowRight size={15} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <div className="border-t border-[var(--border)] pt-16">
        <h2 className="text-2xl font-bold text-[var(--text)] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-[var(--border)] pb-6">
              <h3 className="font-semibold text-[var(--text)] mb-2">{faq.q}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-[var(--text)] mb-3">
          Not sure which plan is right for you?
        </h2>
        <p className="text-[var(--text-muted)] mb-6">
          Send a message and we&apos;ll help you figure out the best fit.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Get a Free Consultation <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
