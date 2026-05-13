import { cn } from "@/lib/utils";
import * as React from "react";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-muted)]",
        className
      )}
      {...props}
    />
  );
}
