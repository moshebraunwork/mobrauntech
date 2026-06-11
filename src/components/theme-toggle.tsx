"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // True only after hydration — avoids a server/client mismatch on the icon.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="group flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={17} className="transition-transform duration-500 group-hover:rotate-90" />
      ) : (
        <Moon size={17} className="transition-transform duration-500 group-hover:-rotate-12" />
      )}
    </button>
  );
}
