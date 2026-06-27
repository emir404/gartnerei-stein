"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { sections } from "@/lib/site";

/**
 * Signature navigation: a vertical "almanac spine" on the left margin (xl+)
 * with a progress line that grows as you scroll and a node that lights up for
 * the active section (scroll-spy). On smaller screens it degrades to a slim
 * scroll-progress bar pinned to the top edge.
 */
export function Spine() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    let raf = 0;

    const measure = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(p);

      const mid = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= mid) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* mobile / tablet: top scroll-progress hairline */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent xl:hidden"
      >
        <div
          className="h-full bg-primary"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* desktop: the almanac spine */}
      <nav
        aria-label="Seiten-Navigation"
        className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      >
        <ol className="relative flex h-72 flex-col justify-between">
          {/* track + growing fill */}
          <span
            aria-hidden
            className="absolute left-[5px] top-1 bottom-1 w-px rule"
          />
          <span
            aria-hidden
            className="absolute left-[5px] top-1 w-px bg-primary transition-[height] duration-150 ease-linear"
            style={{ height: `calc(${progress * 100}% - 8px)` }}
          />
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} className="relative">
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center gap-3"
                >
                  <span
                    className={cn(
                      "relative z-10 block size-[11px] rounded-full border bg-background transition-all duration-300",
                      isActive
                        ? "scale-110 border-accent bg-accent"
                        : "border-border group-hover:border-primary",
                    )}
                  />
                  <span
                    className={cn(
                      "label whitespace-nowrap transition-all duration-300",
                      isActive
                        ? "translate-x-0 text-foreground opacity-100"
                        : "-translate-x-1 text-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                    )}
                  >
                    {s.n} · {s.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
