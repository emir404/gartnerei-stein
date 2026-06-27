"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SEASONS } from "@/lib/content";
import { Sprout, Sun, Leaf, Sparkles } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const ICONS = [Sprout, Sun, Leaf, Sparkles];

export function Seasons() {
  const [active, setActive] = useState(0);
  const s = SEASONS[active];
  const Ico = ICONS[active];

  // season color + an AA-safe on-color text token (paper on dark seasons, ink on light)
  const seasonStyle = {
    ["--season"]: `var(${s.accentVar})`,
    ["--season-ink"]: s.dark ? "var(--background)" : "var(--ink)",
  } as React.CSSProperties;

  const chip = { backgroundColor: "var(--season)", color: "var(--season-ink)" };

  return (
    <section
      id="jahreszeiten"
      className="scroll-mt-24 py-20 sm:py-28"
      style={seasonStyle}
    >
      <Container>
        <SectionHeading
          eyebrow="Aus eigener Aufzucht"
          title="Das ganze Jahr in Farbe."
          intro="Vieles wächst direkt bei uns heran — immer passend zur Saison. Klicken Sie sich durch das Gärtnerjahr."
          className="max-w-3xl"
        />

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-border bg-card shadow-md">
          <div
            role="tablist"
            aria-label="Jahreszeiten"
            className="flex flex-wrap gap-1 border-b border-border p-2"
          >
            {SEASONS.map((se, i) => (
              <button
                key={se.key}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "flex-1 cursor-pointer rounded-2xl px-4 py-3 text-sm font-semibold transition-colors sm:text-base",
                  i !== active && "text-muted hover:bg-surface hover:text-foreground"
                )}
                style={i === active ? chip : undefined}
              >
                {se.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-12">
            <div key={s.key} className="anim-fade-up">
              <div className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={chip}
                >
                  <Ico size={15} />
                </span>
                {s.label}
              </div>
              <h3 className="mt-4 text-3xl sm:text-4xl">{s.headline}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-muted">{s.note}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.plants.map((p) => (
                  <li
                    key={p}
                    className="rounded-full px-3.5 py-1.5 text-sm font-medium"
                    style={chip}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden sm:block">
              <div
                className="flex h-44 w-44 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--season) 16%, transparent)",
                }}
              >
                <div
                  className="flex h-28 w-28 items-center justify-center rounded-full"
                  style={chip}
                >
                  <Ico size={44} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
