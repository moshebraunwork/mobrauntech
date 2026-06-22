"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Coffee, Croissant, Cookie, MapPin, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Scroll-driven demo: a café website that assembles itself as you scroll.    */
/*                                                                            */
/* The section is taller than the viewport. A sticky stage is pinned inside   */
/* it, and the scroll distance through the section drives a 0→1 progress       */
/* value. That value is mapped to discrete "phases" — first empty, then       */
/* skeleton blocks drop in one by one, and finally everything dissolves into  */
/* a finished, front-end-only café site. Nothing is saved; it's pure flair.   */
/* -------------------------------------------------------------------------- */

/** Phase at which each block first appears (as a skeleton). */
const NAV = 1;
const HERO = 2;
const MENU = 3;
const HOURS = 4;
const REVEAL = 5;

const steps = [
  "Empty canvas",
  "Navigation bar",
  "Hero section",
  "Menu items",
  "Hours & location",
  "Launch 🎉",
];

type BlockState = "hidden" | "skeleton" | "real";

export function BuildAlong() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Respect reduced-motion: jump straight to the finished site.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      railRef.current?.style.setProperty("--build-p", "1");
      const id = requestAnimationFrame(() => setPhase(REVEAL));
      return () => cancelAnimationFrame(id);
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = wrap.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p =
        scrollable > 0
          ? Math.min(1, Math.max(0, -rect.top / scrollable))
          : 0;

      // Smooth rail fill via a CSS var — no React re-render per scroll tick.
      railRef.current?.style.setProperty("--build-p", p.toFixed(3));

      // Discrete phase: empty → 4 build steps → reveal.
      const next =
        p >= 0.8 ? REVEAL : p >= 0.62 ? HOURS : p >= 0.44 ? MENU : p >= 0.24 ? HERO : p >= 0.06 ? NAV : 0;
      setPhase((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const revealed = phase >= REVEAL;
  const stateFor = (appearsAt: number): BlockState =>
    revealed ? "real" : phase >= appearsAt ? "skeleton" : "hidden";

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {/* Tall track that gives us room to scroll while the stage is pinned. */}
      <div ref={wrapRef} className="relative h-[320vh]">
        <div className="sticky top-0 flex min-h-screen items-center py-16">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Narration / progress */}
            <div>
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Watch it happen
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                A website that builds itself as you scroll
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                Keep scrolling and watch a real café site come together piece by
                piece — from a blank screen to a polished, launch-ready page.
              </p>

              <ol className="mt-8 space-y-2.5">
                {steps.map((label, i) => {
                  const active = phase === i;
                  const done = phase > i;
                  return (
                    <li
                      key={label}
                      className={cn(
                        "flex items-center gap-3 text-sm transition-colors duration-300",
                        active
                          ? "text-foreground"
                          : done
                          ? "text-muted"
                          : "text-muted/45"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300",
                          active
                            ? "border-accent bg-accent text-accent-foreground"
                            : done
                            ? "border-accent/40 text-accent"
                            : "border-border text-muted/50"
                        )}
                      >
                        {done ? "✓" : i + 1}
                      </span>
                      {label}
                    </li>
                  );
                })}
              </ol>

              {/* Smooth scroll progress rail */}
              <div className="mt-8 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-surface-2">
                <div ref={railRef} className="build-rail-fill" />
              </div>
            </div>

            {/* The browser stage */}
            <BrowserFrame revealed={revealed}>
              <CafeNav state={stateFor(NAV)} />
              <CafeHero state={stateFor(HERO)} />
              <CafeMenu state={stateFor(MENU)} />
              <CafeHours state={stateFor(HOURS)} />
            </BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Browser chrome                                                             */
/* -------------------------------------------------------------------------- */

function BrowserFrame({
  children,
  revealed,
}: {
  children: ReactNode;
  revealed: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-30px_var(--glow)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 truncate rounded-md bg-background/60 px-3 py-1 text-center text-xs text-muted">
          {revealed ? "🔒 cafe-lumiere.cafe" : "building…"}
        </div>
      </div>

      {/* Viewport — the café "site" renders here on a warm background */}
      <div className="h-[26rem] overflow-hidden bg-[#faf6ef] sm:h-[30rem]">
        <div className="flex h-full flex-col">{children}</div>
      </div>
    </div>
  );
}

/**
 * Wraps a section of the demo site. The finished markup always defines the
 * layout height; a shimmering skeleton overlay sits on top until reveal.
 */
function Block({
  state,
  skeleton,
  children,
  className,
}: {
  state: BlockState;
  skeleton: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-state={state} className={cn("build-block relative", className)}>
      {children}
      <div className="build-skel-layer absolute inset-0 bg-[#faf6ef] p-4">
        {skeleton}
      </div>
    </div>
  );
}

const skel = "build-skel rounded-md";

/* -------------------------------------------------------------------------- */
/* The café site itself (front-end only — purely decorative)                  */
/* -------------------------------------------------------------------------- */

function CafeNav({ state }: { state: BlockState }) {
  return (
    <Block
      state={state}
      className="border-b border-[#e7ddd0]"
      skeleton={
        <div className="flex items-center justify-between">
          <div className={cn(skel, "h-5 w-28")} />
          <div className="flex gap-3">
            <div className={cn(skel, "h-4 w-12")} />
            <div className={cn(skel, "h-4 w-12")} />
            <div className={cn(skel, "h-7 w-20")} />
          </div>
        </div>
      }
    >
      <div className="flex items-center justify-between px-4 py-3.5">
        <span className="flex items-center gap-2 font-semibold text-[#3b2a1a]">
          <Coffee size={18} className="text-[#b45309]" />
          Café Lumière
        </span>
        <div className="hidden items-center gap-5 text-sm text-[#6b5844] sm:flex">
          <span>Menu</span>
          <span>About</span>
          <span>Visit</span>
          <span className="rounded-full bg-[#b45309] px-3.5 py-1.5 text-xs font-semibold text-[#fdf6ec]">
            Reserve
          </span>
        </div>
      </div>
    </Block>
  );
}

function CafeHero({ state }: { state: BlockState }) {
  return (
    <Block
      state={state}
      skeleton={
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3 py-3">
            <div className={cn(skel, "h-7 w-full")} />
            <div className={cn(skel, "h-7 w-4/5")} />
            <div className={cn(skel, "h-3 w-full")} />
            <div className={cn(skel, "h-3 w-2/3")} />
            <div className={cn(skel, "h-8 w-28")} />
          </div>
          <div className={cn(skel, "h-36 w-full")} />
        </div>
      }
    >
      <div className="grid grid-cols-2 items-center gap-4 px-4 py-5">
        <div>
          <h3 className="font-display text-2xl font-bold leading-tight text-[#3b2a1a]">
            Slow mornings,
            <br />
            good coffee.
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-[#6b5844]">
            Small-batch roasts and fresh-baked pastries in the heart of the old
            quarter.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-[#b45309] px-4 py-2 text-xs font-semibold text-[#fdf6ec]">
              View Menu
            </span>
            <span className="rounded-full border border-[#d8c7b2] px-4 py-2 text-xs font-semibold text-[#6b5844]">
              Book a table
            </span>
          </div>
        </div>
        <div className="flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-[#d9a066] via-[#b45309] to-[#5b3a1a] text-5xl shadow-inner">
          ☕
        </div>
      </div>
    </Block>
  );
}

const menuItems = [
  { icon: Coffee, name: "Espresso", note: "Single origin", price: "$3.5" },
  { icon: Croissant, name: "Butter Croissant", note: "Baked daily", price: "$3.0" },
  { icon: Cookie, name: "Almond Cookie", note: "House recipe", price: "$2.5" },
];

function CafeMenu({ state }: { state: BlockState }) {
  return (
    <Block
      state={state}
      skeleton={
        <div className="grid grid-cols-3 gap-3 pt-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 rounded-lg border border-[#eadfce] p-3">
              <div className={cn(skel, "h-8 w-8 rounded-full")} />
              <div className={cn(skel, "h-3 w-full")} />
              <div className={cn(skel, "h-3 w-2/3")} />
            </div>
          ))}
        </div>
      }
    >
      <div className="px-4 py-3">
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#b45309]">
          On the menu
        </p>
        <div className="grid grid-cols-3 gap-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-[#eadfce] bg-white/60 p-3"
            >
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#f3e6d3] text-[#b45309]">
                <item.icon size={16} />
              </div>
              <p className="text-xs font-semibold text-[#3b2a1a]">{item.name}</p>
              <p className="text-[0.65rem] text-[#8a7660]">{item.note}</p>
              <p className="mt-1 text-xs font-bold text-[#b45309]">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
}

function CafeHours({ state }: { state: BlockState }) {
  return (
    <Block
      state={state}
      className="mt-auto"
      skeleton={
        <div className="flex items-center justify-between">
          <div className={cn(skel, "h-4 w-40")} />
          <div className={cn(skel, "h-4 w-24")} />
        </div>
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#e7ddd0] bg-[#f3e9da] px-4 py-3 text-[0.7rem] text-[#6b5844]">
        <span className="inline-flex items-center gap-1.5">
          <Clock size={13} className="text-[#b45309]" />
          Mon–Sun · 7am – 6pm
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={13} className="text-[#b45309]" />
          12 Rue des Lilas
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Star size={13} className="fill-[#f59e0b] text-[#f59e0b]" />
          4.9 · 320 reviews
        </span>
      </div>
    </Block>
  );
}
