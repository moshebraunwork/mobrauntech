import { Metadata } from "next";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Embed Badge — Built by Mobrauntech",
  robots: { index: false },
};

// Renders only the badge — no nav or footer — so it can be embedded via <iframe>.
export default function BadgePage() {
  return (
    <div className="flex min-h-screen items-start p-2">
      <a
        href="https://mobrauntech.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-foreground no-underline transition-all duration-300 hover:border-accent/40 hover:shadow-[0_4px_16px_var(--glow)]"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-accent via-accent-2 to-accent-3 text-accent-foreground">
          <Sparkles size={11} strokeWidth={2.5} />
        </span>
        Built by Mobrauntech
      </a>
    </div>
  );
}
