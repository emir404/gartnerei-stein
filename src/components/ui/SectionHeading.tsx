import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]",
            invert ? "text-accent" : "text-secondary",
            align === "center" && "justify-center"
          )}
        >
          <span className="rule-accent" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "mt-5 text-balance text-4xl sm:text-5xl",
          invert ? "text-background" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            invert ? "text-background/75" : "text-muted"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
