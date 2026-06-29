import Image from "next/image";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { Leaf } from "@/components/Botanical";
import { primaryPhone } from "@/lib/site";
import heroBg from "@/assets/photos/geranien.jpg";

export function Hero() {
  return (
    <section
      id="start"
      className="relative isolate flex min-h-[90svh] items-end overflow-hidden"
    >
      {/* full-bleed background photo of the nursery */}
      <Image
        src={heroBg}
        alt="Lange Reihen kräftiger roter Geranien unter den Glasdächern der Gärtnerei Stein"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="hero-kenburns -z-20 object-cover object-center"
      />
      {/* legibility scrims: strong at the foot for the headline, a touch at the
          very top so the overlaid header stays readable over any photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-deep/92 via-primary-deep/45 to-primary-deep/25"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-primary-deep/55 to-transparent"
      />

      <Container className="relative w-full pb-20 pt-36 text-background sm:pb-28">
        <div className="max-w-2xl">
          <p className="label inline-flex items-center gap-2 text-background/80">
            <Leaf className="size-4" />
            Familienbetrieb seit 1976 · Lübeck
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.8rem,7.6vw,5.5rem)] leading-[1.0] tracking-[-0.02em] [text-shadow:0_1px_34px_rgba(11,28,20,0.5)]">
            Aus einer Hand:
            <br />
            <em className="text-accent-soft">gewachsen &amp; gebunden.</em>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-background/85 [text-shadow:0_1px_18px_rgba(11,28,20,0.45)]">
            Ein Familienbetrieb in Lübeck / Groß Steinrade: kräftige Beet- und
            Balkonpflanzen aus der eigenen Gärtnerei, dazu täglich frische
            Blumen im Laden bei famila in Stockelsdorf.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Cta href="#sortiment" tone="dark" withArrow>
              Zum Sortiment
            </Cta>
            <Cta href={primaryPhone.phoneHref} tone="dark" variant="outline">
              {primaryPhone.phone}
            </Cta>
          </div>
        </div>
      </Container>

      {/* gentle scroll cue */}
      <a
        href="#sortiment"
        aria-label="Weiter zu unserem Sortiment"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-background/70 transition-colors hover:text-background sm:block"
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-background/40">
          <span className="cue-bob mt-1.5 block h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}
