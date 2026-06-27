"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SEASONS } from "@/lib/content";
import { SEASON_IMG } from "@/lib/images";
import { Sprout, Sun, Leaf, Sparkles } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const ICONS = [Sprout, Sun, Leaf, Sparkles];

export function Seasons() {
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const s = SEASONS[active];

  // gentle auto-advance until the visitor interacts; respects reduced motion
  useEffect(() => {
    if (locked) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % SEASONS.length),
      4800
    );
    return () => clearInterval(id);
  }, [locked]);

  const choose = (i: number) => {
    setLocked(true);
    setActive(i);
  };

  return (
    <section id="jahreszeiten" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Aus eigener Aufzucht"
          title="Das ganze Jahr in Farbe."
          intro="Vieles wächst direkt bei uns heran — immer passend zur Saison."
          className="max-w-2xl"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.55fr_1fr] lg:items-stretch">
          {/* photo stage */}
          <div className="img-frame relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            {SEASONS.map((se, i) => (
              <Image
                key={se.key}
                src={SEASON_IMG[i]}
                alt={`${se.label} bei Gärtnerei Hamer`}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={cn(
                  "object-cover transition-opacity duration-700 ease-soft",
                  i === active ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/70 to-transparent" />
            <div className="text-shadow-soft absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <span className="label text-background/85">
                0{active + 1} / 0{SEASONS.length} · {s.label}
              </span>
              <h3 className="mt-2 font-heading text-3xl text-background sm:text-4xl">
                {s.headline}
              </h3>
              <p className="mt-3 max-w-md text-background/90">{s.note}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.plants.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-background/25 bg-ink/45 px-3 py-1 text-sm text-background backdrop-blur-sm"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* selector */}
          <div className="flex flex-col gap-2.5">
            {SEASONS.map((se, i) => {
              const Ico = ICONS[i];
              const on = i === active;
              return (
                <button
                  key={se.key}
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={on}
                  className={cn(
                    "group flex flex-1 cursor-pointer items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ease-soft",
                    on
                      ? "border-primary/30 bg-surface shadow-sm"
                      : "border-border hover:border-primary/20 hover:bg-surface/60"
                  )}
                >
                  <span className={cn("label", on ? "text-secondary" : "text-muted")}>
                    0{i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold text-primary">
                      {se.label}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors",
                      on
                        ? "bg-primary text-background"
                        : "bg-surface text-muted group-hover:text-primary"
                    )}
                  >
                    <Ico size={17} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
