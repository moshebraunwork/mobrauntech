import Link from "next/link";
import { Sparkles, Mail } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,var(--accent-soft),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex w-fit items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent via-accent-2 to-accent-3 text-white">
                <Sparkles size={16} strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Mobrauntech
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Professional websites and custom software for small businesses.
              Modern, fast, and built to grow — you only pay when you&apos;re
              happy with the result.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Explore</p>
            <nav className="flex flex-col gap-2.5">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Get in touch</p>
            <a
              href="mailto:moshe@mobrauntech.com"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Mail size={15} />
              moshe@mobrauntech.com
            </a>
            <p className="mt-4 text-sm text-muted">
              We respond within 24 hours.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Mobrauntech. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Crafted with care — no templates, no shortcuts.
          </p>
        </div>
      </div>
    </footer>
  );
}
