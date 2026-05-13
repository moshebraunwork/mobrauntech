"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/payments", label: "Payments" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)] backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight text-[var(--text)]"
        >
          Mobrauntech
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--text)]",
                pathname === link.href
                  ? "text-[var(--text)]"
                  : "text-[var(--text-muted)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-xl bg-[var(--btn-bg)] text-[var(--btn-text)] hover:bg-[var(--btn-hover)] px-4 py-2 text-sm font-semibold transition-colors"
          >
            Get a Free Quote
          </Link>
          {/* Mobile menu button */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-muted)]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--bg-secondary)]",
                  pathname === link.href
                    ? "text-[var(--text)] bg-[var(--bg-secondary)]"
                    : "text-[var(--text-muted)]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-[var(--btn-bg)] text-[var(--btn-text)] px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
