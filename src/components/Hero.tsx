import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { Leaf } from "@/components/Botanical";
import { Figure } from "@/components/Figure";
import { primaryPhone } from "@/lib/site";
import gewaechshaus from "@/assets/photos/gewaechshaus.jpg";

export function Hero() {
  return (
    <section id="start" className="relative overflow-hidden">
      {/* faint botanical wash bleeding from the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[42rem] w-[42rem] rounded-full bloom-field opacity-50 blur-2xl"
      />
      <Container className="relative pb-16 pt-32 sm:pt-40 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div>
            <p className="label inline-flex items-center gap-2 text-secondary">
              <Leaf className="size-4" />
              Familienbetrieb seit 1976 · Lübeck
            </p>

            <h1 className="mt-6 font-display text-[clamp(2.7rem,7.2vw,5.25rem)] leading-[1.01] tracking-[-0.02em]">
              Aus einer Hand:
              <br />
              <em className="text-primary">gewachsen &amp; gebunden.</em>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              Ein Familienbetrieb in Lübeck / Groß Steinrade: kräftige Beet- und
              Balkonpflanzen aus der eigenen Gärtnerei, dazu täglich frische
              Blumen im Laden bei famila in Stockelsdorf.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Cta href="#sortiment" withArrow>
                Zum Sortiment
              </Cta>
              <Cta href={primaryPhone.phoneHref} variant="outline">
                {primaryPhone.phone}
              </Cta>
            </div>
          </div>

          {/* signature hero visual — our greenhouse in Groß Steinrade */}
          <div className="relative">
            <Figure
              image={gewaechshaus}
              alt="Blick in ein Gewächshaus der Gärtnerei Stein mit langen, blühenden Pflanzenreihen"
              eyebrow="Unsere Gärtnerei"
              caption="Groß Steinrade, seit 1976."
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
