import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

/**
 * Framed editorial photo — token-driven border/radius/shadow, blur-up while
 * loading, and a restrained hover zoom (disabled under prefers-reduced-motion
 * by the global motion guard). Pass an `aspect-[…]` class to set the crop box;
 * `position` drives object-position (e.g. "object-top" to crop a watermark).
 * With `eyebrow`/`caption` it overlays a soft caption like the brand showcase.
 */
export function Figure({
  image,
  alt,
  eyebrow,
  caption,
  className,
  position = "object-center",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  image: StaticImageData;
  alt: string;
  eyebrow?: string;
  caption?: string;
  className?: string;
  position?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const hasCaption = Boolean(eyebrow || caption);
  return (
    <figure
      className={cn(
        "group relative isolate overflow-hidden rounded-xl border border-border bg-surface shadow-md",
        className,
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes={sizes}
        placeholder="blur"
        priority={priority}
        className={cn(
          "object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]",
          position,
        )}
      />
      {hasCaption && (
        <>
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-primary-deep/85 via-primary-deep/25 to-transparent"
          />
          <figcaption className="absolute inset-x-0 bottom-0 grain p-5 text-background sm:p-6">
            {eyebrow && <p className="label text-background/75">{eyebrow}</p>}
            {caption && (
              <p className="mt-1.5 max-w-md font-display text-[1.2rem] leading-snug">
                {caption}
              </p>
            )}
          </figcaption>
        </>
      )}
    </figure>
  );
}
