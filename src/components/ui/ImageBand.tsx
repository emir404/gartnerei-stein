import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Parallax } from "@/components/ui/Parallax";
import { cn } from "@/lib/cn";

/** Full-bleed image band with a dark scrim and overlaid content. */
export function ImageBand({
  image,
  alt,
  children,
  className,
  minH = "min-h-[68svh]",
  priority = false,
  parallax = true,
}: {
  image: StaticImageData;
  alt: string;
  children: ReactNode;
  className?: string;
  minH?: string;
  priority?: boolean;
  parallax?: boolean;
}) {
  const picture = (
    <div className="relative h-full w-full">
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );

  return (
    <section
      className={cn(
        "relative isolate flex items-center overflow-hidden",
        minH,
        className
      )}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {parallax ? (
          <Parallax className="absolute inset-[-8%]">{picture}</Parallax>
        ) : (
          <div className="absolute inset-0">{picture}</div>
        )}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/88 via-ink/55 to-ink/35" />
      <Container className="py-20 sm:py-28">{children}</Container>
    </section>
  );
}
