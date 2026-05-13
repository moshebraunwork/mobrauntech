import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-bold text-[var(--text)]">Mobrauntech</span>
          <span className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Mobrauntech. All rights reserved.
          </span>
        </div>
        <nav className="flex items-center gap-5 text-sm text-[var(--text-muted)]">
          <Link href="/projects" className="hover:text-[var(--text)] transition-colors">
            Projects
          </Link>
          <Link href="/pricing" className="hover:text-[var(--text)] transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-[var(--text)] transition-colors">
            Contact
          </Link>
          <Link href="/payments" className="hover:text-[var(--text)] transition-colors">
            Payments
          </Link>
        </nav>
      </div>
    </footer>
  );
}
