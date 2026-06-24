import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { BuildExperience } from "@/components/build-along";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Code2,
  Zap,
  Shield,
  MessageSquare,
  PenTool,
  Rocket,
  PartyPopper,
} from "lucide-react";

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

const process = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Tell us your vision",
    description:
      "A quick conversation about your business, goals, and what you need. No jargon, no pressure.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "We design & build",
    description:
      "You get progress updates at every milestone, with room for your feedback along the way.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Review & launch",
    description:
      "You review the finished product. We refine until you love it — then we go live.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Pay when happy",
    description:
      "Payment only happens after you approve the result. Zero risk, zero upfront cost.",
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

const stats = [
  { value: "$0", label: "Upfront payment" },
  { value: "24h", label: "Response time" },
  { value: "1–3", label: "Weeks to launch" },
  { value: "100%", label: "Satisfaction-based" },
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

const marqueeItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Vercel",
  "Responsive Design",
  "SEO",
  "Performance",
  "Accessibility",
];

export default function Home() {
  return (
    <BuildExperience>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background layers (the grid itself is rendered full-width by
            BuildExperience so it spans behind both columns) */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="animate-aurora absolute -top-40 left-1/4 h-130 w-130 rounded-full bg-foreground/[0.06] blur-[120px]" />
          <div className="animate-float absolute top-20 -right-20 h-105 w-105 rounded-full bg-foreground/[0.04] blur-[110px]" />
          <div className="animate-float-slow absolute -bottom-32 -left-24 h-95 w-95 rounded-full bg-foreground/[0.03] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-20 text-center sm:px-6 sm:pt-36 sm:pb-28">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
              </span>
              Available for new projects
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
              We build websites
              <br />
              that <span className="text-gradient">win clients</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Professional websites and custom software for small businesses.
              Modern, fast, and built to grow — starting at{" "}
              <span className="font-semibold text-foreground">$499</span>.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact" className="group">
                  Get a Free Quote
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">See Our Work</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
              {["No upfront payment", "Delivered in 1–3 weeks", "Direct line to your developer"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-accent" />
                    {item}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border bg-surface/40 py-5 backdrop-blur">
          <div
            className="overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="animate-marquee flex w-max items-center gap-12 pr-12">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="flex items-center gap-12 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted/70"
                >
                  {item}
                  <span className="h-1 w-1 rounded-full bg-accent/60" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="mb-3 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What we build
          </p>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything your business needs online
          </h2>
          <p className="mx-auto mt-4 mb-14 max-w-lg text-center text-muted">
            From simple landing pages to fully custom applications — we have
            the right solution for your business.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <SpotlightCard className="h-full p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-foreground">
                  <service.icon size={20} />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="mb-3 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              How it works
            </p>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to launch in four steps
            </h2>
            <p className="mx-auto mt-4 mb-14 max-w-lg text-center text-muted">
              A simple, transparent process — and you only pay at the very end,
              once you&apos;re happy.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 90}>
                <div className="relative h-full rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40">
                  <span className="absolute top-5 right-6 font-display text-4xl font-bold text-foreground/[0.06]">
                    {item.step}
                  </span>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                    <item.icon size={20} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Why Mobrauntech
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Built for small businesses, by a developer who gets it
            </h2>
            <p className="mb-8 leading-relaxed text-muted">
              We understand small businesses because we work exclusively with
              them. No agency fluff — just clean, effective work at a fair
              price.
            </p>
            <ul className="mb-10 space-y-3.5">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-muted">{reason}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/contact" className="group">
                Start a Conversation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <div className="rounded-2xl border border-border bg-surface p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_var(--glow)]">
                  <p className="font-display text-4xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="mb-3 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Pricing
            </p>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-center text-muted">
              No hidden fees. No upfront payment.
            </p>
            <p className="mx-auto mt-5 mb-14 w-fit rounded-full border border-accent/30 bg-accent-soft px-5 py-2 text-center text-sm font-medium">
              You only pay when you&apos;re happy with the result
            </p>
          </Reveal>
          <div className="grid items-stretch gap-6 sm:grid-cols-3">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 90} className="h-full">
                <div
                  className={
                    pkg.highlighted
                      ? "gradient-border relative flex h-full flex-col rounded-2xl p-6 shadow-[0_20px_70px_-25px_var(--glow)]"
                      : "flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40"
                  }
                >
                  {pkg.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-3.5 py-1 text-xs font-semibold text-accent-foreground shadow-[0_4px_14px_var(--glow)]">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold">{pkg.name}</h3>
                  <p className="mt-2 font-display text-3xl font-bold">
                    {pkg.price}
                  </p>
                  <p className="mt-2 mb-6 text-sm text-muted">{pkg.description}</p>
                  <ul className="mb-8 space-y-2.5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-muted">
                        <CheckCircle2 size={15} className="shrink-0 text-accent" />
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
                      {pkg.cta}
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 text-center">
              <Link
                href="/pricing"
                className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
              >
                View full pricing details →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-20 text-center sm:px-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="bg-grid absolute inset-0" />
              <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-foreground/[0.07] blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
                Ready to build something{" "}
                <span className="text-gradient">great?</span>
              </h2>
              <p className="mx-auto mt-5 mb-9 max-w-md text-muted">
                Let&apos;s talk about your project. No commitment, no pressure —
                just a conversation to see if we&apos;re a good fit.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact" className="group">
                    Get a Free Quote
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/projects">Browse Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </BuildExperience>
  );
}
