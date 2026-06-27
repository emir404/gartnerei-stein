import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Blob } from "@/components/ui/Blob";
import { HERO, CONTACT, SERVICES } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[94svh] items-end overflow-hidden"
    >
      <Image
        src={IMAGES.hero}
        alt="Die Gärtnerei Hamer in Altenkrempe — Pflanzen, so weit das Auge reicht"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-deep/92 via-primary-deep/50 to-primary-deep/25" />
      <Blob
        className="anim-float pointer-events-none absolute -right-12 top-24 -z-10 h-80 w-80 opacity-25"
        color="var(--accent)"
      />

      <Container className="pb-14 pt-32 sm:pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-sm font-medium text-background backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {HERO.badge}
          </span>
          <h1 className="mt-6 text-balance text-5xl text-background sm:text-7xl lg:text-[5.5rem]">
            {HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/85 sm:text-xl">
            {HERO.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#leistungen" variant="accent" size="lg">
              Unsere Bereiche
            </ButtonLink>
            <ButtonLink href={CONTACT.phoneHref} variant="onDark" size="lg">
              {CONTACT.phoneDisplay}
            </ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-background/70">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="underline-offset-4 transition-colors hover:text-background hover:underline"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
