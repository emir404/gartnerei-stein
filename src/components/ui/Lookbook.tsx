"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

/** Full-width, drag/scroll-snap filmstrip of large editorial images → lightbox. */
export function Lookbook({ items }: { items: LightboxItem[] }) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [open, setOpen] = useState<number | null>(null);

  const nudge = (dir: number) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = track.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
  };
  const onMove = (e: React.PointerEvent) => {
    const el = track.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const onUp = () => {
    drag.current.active = false;
  };

  return (
    <>
      <div
        ref={track}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pl-5 pr-5 sm:gap-5 sm:pl-[max(2rem,calc((100vw-72rem)/2))] sm:pr-[max(2rem,calc((100vw-72rem)/2))] [scroll-padding-left:1.25rem] sm:[scroll-padding-left:max(2rem,calc((100vw-72rem)/2))]"
        style={{ cursor: "grab" }}
      >
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              if (!drag.current.moved) setOpen(i);
            }}
            aria-label={`Bild vergrößern: ${it.alt}`}
            className="group img-frame relative aspect-[3/4] w-[76vw] shrink-0 snap-start overflow-hidden rounded-[1.5rem] sm:aspect-[3/4] sm:w-[340px]"
          >
            <Image
              src={it.src}
              alt={it.alt}
              fill
              draggable={false}
              sizes="(max-width: 640px) 76vw, 340px"
              className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="label absolute bottom-4 left-4 right-4 text-left text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {it.alt}
            </span>
          </button>
        ))}
      </div>

      <Container className="mt-6 flex items-center gap-2">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Zurück"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-surface"
          )}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Weiter"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-surface"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>
        <span className="label ml-2 text-muted">Ziehen oder wischen</span>
      </Container>

      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
    </>
  );
}
