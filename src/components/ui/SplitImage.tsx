import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function SplitImage({
  image,
  alt,
  eyebrow,
  title,
  children,
  reverse = false,
}: {
  image: StaticImageData;
  alt: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={cn(reverse && "lg:order-2")}>
          <div className="mask-blob overflow-hidden shadow-lg">
            <Image
              src={image}
              alt={alt}
              className="aspect-[4/3] h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <Reveal delay={100} className={cn(reverse && "lg:order-1")}>
          <div>
            {eyebrow && (
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                <span className="rule-accent" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-4 text-balance text-3xl sm:text-4xl">{title}</h2>
            )}
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              {children}
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
