import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

// Token-driven "bunt" treatment: the seasonal spectrum spelled over brand
// photography. Graceful fallback while the fal.ai model IDs are placeholders.
const SPECTRUM = ["--secondary", "--accent", "--accent-bloom", "--primary"];

export function Showcase() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink text-background shadow-lg">
            <Image
              src={IMAGES["nursery-1"]}
              alt="Frische Blüten und Pflanzen aus der Gärtnerei Hamer"
              fill
              placeholder="blur"
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="-z-10 object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-ink via-ink/85 to-primary-deep/70" />
            <div className="grain absolute inset-0 -z-10" />

            <div className="px-7 py-16 sm:px-16 sm:py-24">
              <div className="flex gap-1.5">
                {SPECTRUM.map((v) => (
                  <span
                    key={v}
                    className="h-2.5 w-10 rounded-full"
                    style={{ backgroundColor: `var(${v})` }}
                  />
                ))}
              </div>
              <h2 className="mt-7 max-w-2xl text-balance text-4xl text-background sm:text-6xl">
                Bei uns wird es{" "}
                <span className="italic" style={{ color: "var(--accent)" }}>
                  bunt
                </span>
                .
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-background/80">
                Ob ein einzelner Strauß oder die Bepflanzung für die ganze
                Saison — kommen Sie vorbei und lassen Sie sich inspirieren.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/kontakt" variant="accent" size="lg">
                  Besuchen Sie uns
                </ButtonLink>
                <ButtonLink href="#leistungen" variant="onDark" size="lg">
                  Unsere Bereiche
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
