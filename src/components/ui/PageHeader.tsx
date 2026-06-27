import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Blob } from "@/components/ui/Blob";

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  crumb?: string;
}) {
  return (
    <header className="mesh-warm relative isolate overflow-hidden border-b border-border pt-28 pb-14 sm:pt-36 sm:pb-20">
      <Blob
        className="anim-float pointer-events-none absolute -top-12 -right-16 h-72 w-72 opacity-[0.16]"
        color="var(--secondary)"
      />
      <Blob
        className="pointer-events-none absolute -bottom-10 -left-20 h-64 w-64 opacity-[0.12]"
        color="var(--accent)"
      />
      <Container className="relative">
        <Breadcrumbs current={crumb ?? title} />
        <div className="mt-6 max-w-2xl">
          {eyebrow && (
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              <span className="rule-accent" />
              {eyebrow}
            </div>
          )}
          <h1 className="mt-4 text-balance text-4xl sm:text-6xl">{title}</h1>
          {intro && (
            <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
          )}
        </div>
      </Container>
    </header>
  );
}
