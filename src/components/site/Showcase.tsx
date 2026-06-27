import Image from "next/image";
import { GEN } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Showcase() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="img-frame relative isolate overflow-hidden rounded-[2rem]">
            <Image
              src={GEN.showcase}
              alt="Üppige saisonale Blüten der Gärtnerei Hamer"
              fill
              placeholder="blur"
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="-z-10 object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/20" />
            <div className="text-shadow-soft max-w-xl px-7 py-20 sm:px-16 sm:py-28">
              <Eyebrow invert>Bei uns wird es bunt</Eyebrow>
              <h2 className="mt-5 text-balance text-4xl text-background sm:text-6xl">
                Ein Strauß für jeden Moment.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-background/85">
                Von der ersten Knospe bis zur festlichen Gestaltung — kommen Sie
                vorbei und lassen Sie sich inspirieren.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/floristik" variant="accent" size="lg">
                  Zur Floristik
                </ButtonLink>
                <ButtonLink href="/kontakt" variant="onDark" size="lg">
                  Besuchen Sie uns
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
