import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Globe, Code2, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Clean, modern websites that make great first impressions. Mobile-first, fast, and SEO-ready.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored web applications built around your business. From booking systems to custom dashboards.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Most projects delivered in 1–3 weeks. We keep you in the loop from start to finish.",
  },
  {
    icon: Shield,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Get priority support and updates when you need them.",
  },
];

const reasons = [
  "You only pay when you're happy with the result",
  "Small business specialists — we speak your language",
  "Modern tech that keeps your site fast and secure",
  "Direct communication with the developer, no middlemen",
  "Transparent pricing — no hidden fees",
  "Mobile-first, accessible, and SEO-optimized",
];

const packages = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for getting your business online fast.",
    features: [
      "Single-page website",
      "Clean, modern design",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Business",
    price: "$999",
    description: "Everything you need to grow your online presence.",
    features: [
      "Up to 5 pages",
      "Custom branding",
      "Blog or portfolio section",
      "Social media integration",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "From $2,500",
    description: "Fully tailored to your exact requirements.",
    features: [
      "Custom web application",
      "Database & admin dashboard",
      "Third-party API integrations",
      "Ongoing support agreement",
      "Quote-based pricing",
    ],
    cta: "Get a Quote",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-1.5 text-sm text-[var(--text-muted)] mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          Available for new projects
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text)] leading-tight tracking-tight">
          We Build Websites
          <br />
          <span className="text-[var(--text-muted)]">That Win Clients</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg text-[var(--text-muted)] leading-relaxed">
          Professional websites and custom software for small businesses.
          Modern, fast, and built to grow — starting at{" "}
          <span className="font-semibold text-[var(--text)]">$499</span>.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">See Our Work</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <h2 className="text-3xl font-bold text-[var(--text)] text-center mb-4">
            What We Build
          </h2>
          <p className="text-center text-[var(--text-muted)] mb-12 max-w-lg mx-auto">
            From simple landing pages to fully custom applications — we have the
            right solution for your business.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <service.icon size={24} className="text-[var(--text)] mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
              Why Small Businesses Choose Mobrauntech
            </h2>
            <p className="text-[var(--text-muted)] mb-8">
              We understand small businesses because we work exclusively with
              them. No agency fluff — just clean, effective work at a fair price.
            </p>
            <Button asChild>
              <Link href="/contact">
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <ul className="space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--text)] mt-0.5 shrink-0" />
                <span className="text-[var(--text-muted)]">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <h2 className="text-3xl font-bold text-[var(--text)] text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-[var(--text-muted)] mb-3 max-w-lg mx-auto">
            No hidden fees. No upfront payment.
          </p>
          <p className="text-center text-sm font-medium text-[var(--text)] mb-12 border border-[var(--border)] rounded-full px-4 py-1.5 w-fit mx-auto bg-[var(--bg)]">
            You only pay when you&apos;re happy with the result
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={pkg.highlighted ? "border-[var(--text)] bg-[var(--bg)]" : ""}
              >
                <CardHeader>
                  {pkg.highlighted && (
                    <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">
                      Most Popular
                    </span>
                  )}
                  <CardTitle>{pkg.name}</CardTitle>
                  <p className="text-2xl font-bold text-[var(--text)]">{pkg.price}</p>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <ul className="space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <CheckCircle size={14} className="text-[var(--text)] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={pkg.highlighted ? "default" : "outline"}
                    asChild
                    className="w-full mt-2"
                  >
                    <Link href={`/contact?plan=${encodeURIComponent(pkg.name)}`}>
                      {pkg.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors underline underline-offset-4"
            >
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-4">
          Ready to Build Something Great?
        </h2>
        <p className="text-[var(--text-muted)] mb-8 max-w-md mx-auto">
          Let&apos;s talk about your project. No commitment, no pressure — just a
          conversation to see if we&apos;re a good fit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">Browse Our Work</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
