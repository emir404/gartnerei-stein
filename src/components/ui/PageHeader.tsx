import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Full-bleed image header for subpages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumb,
  image,
  alt,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  crumb?: string;
  image: StaticImageData;
  alt: string;
}) {
  return (
    <header className="relative isolate flex min-h-[54svh] items-end overflow-hidden pt-24 sm:min-h-[62svh]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/40" />
      <Container className="pb-12 sm:pb-16">
        <Breadcrumbs current={crumb ?? title} invert />
        <div className="mt-5 max-w-3xl">
          {eyebrow && <Eyebrow invert>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 text-balance text-4xl text-background sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-background/85">
              {intro}
            </p>
          )}
        </div>
      </Container>
    </header>
  );
}
