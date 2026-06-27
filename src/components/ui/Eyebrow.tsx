import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Uppercase mono micro-label with an accent tick (editorial section label). */
export function Eyebrow({
  children,
  className,
  invert = false,
  tick = true,
}: {
  children: ReactNode;
  className?: string;
  invert?: boolean;
  tick?: boolean;
}) {
  return (
    <span
      className={cn(
        "label inline-flex items-center gap-2.5",
        invert ? "text-accent" : "text-secondary",
        className
      )}
    >
      {tick && <span className="rule-accent" />}
      {children}
    </span>
  );
}
