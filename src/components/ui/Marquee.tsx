import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Seamless horizontal auto-scroll. Children are duplicated for the loop.
 *  Pauses on hover; disabled under prefers-reduced-motion (see globals). */
export function Marquee({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("pause-hover relative overflow-hidden", className)}>
      <div className="flex w-max animate-marquee gap-4 pr-4">
        <div className="flex shrink-0 gap-4">{children}</div>
        <div className="flex shrink-0 gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
