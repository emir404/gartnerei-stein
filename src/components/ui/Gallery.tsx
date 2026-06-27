"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import { cn } from "@/lib/cn";

export type GalleryItem = LightboxItem;

const BENTO = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "sm:row-span-2",
  "",
  "",
];

export function Gallery({
  items,
  className,
  bento = false,
}: {
  items: GalleryItem[];
  className?: string;
  bento?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <ul
        className={cn(
          "grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-4",
          className
        )}
      >
        {items.map((it, i) => (
          <li key={i} className={cn("group relative", bento ? BENTO[i % 8] : "")}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Bild vergrößern: ${it.alt}`}
              className="img-frame relative block h-full w-full cursor-pointer overflow-hidden rounded-xl"
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="label absolute inset-x-3 bottom-3 text-left text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {it.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
    </>
  );
}
