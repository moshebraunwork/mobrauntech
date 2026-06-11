"use client";

import { useRef, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Card with a mouse-tracking radial glow. The glow position is driven by
 * CSS custom properties so the effect costs no React re-renders.
 */
export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300",
        "hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_var(--glow)]",
        className
      )}
      style={{ "--mx": "50%", "--my": "50%" } as CSSProperties}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx) var(--my), var(--accent-soft), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
