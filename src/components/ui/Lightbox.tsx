"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef } from "react";

export type LightboxItem = { src: StaticImageData; alt: string };

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const step = useCallback(
    (d: number) => {
      if (index === null) return;
      onNavigate((index + d + items.length) % items.length);
    },
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, step]);

  if (index === null) return null;
  const it = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Bildergalerie"
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Galerie schließen"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); step(-1); }}
        aria-label="Vorheriges Bild"
        className="absolute left-2 flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20 sm:left-6"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <figure className="relative max-h-[86vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <Image src={it.src} alt={it.alt} sizes="100vw" className="max-h-[82vh] w-auto rounded-lg object-contain" />
        <figcaption className="mt-3 text-center text-sm text-background/80">{it.alt}</figcaption>
      </figure>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); step(1); }}
        aria-label="Nächstes Bild"
        className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20 sm:right-6"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
      </button>
    </div>
  );
}
