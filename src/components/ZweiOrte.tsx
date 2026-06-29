import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";
import { standorte } from "@/lib/site";
import stiefmuetterchen from "@/assets/photos/stiefmuetterchen.jpg";
import chrysanthemen from "@/assets/photos/chrysanthemen.jpg";

const cardPhoto: Record<string, StaticImageData> = {
  gaertnerei: stiefmuetterchen,
  blumenladen: chrysanthemen,
};
const cardAlt: Record<string, string> = {
  gaertnerei:
    "Tische voller blühender Stiefmütterchen in der Gärtnerei in Groß Steinrade",
  blumenladen:
    "Üppige rosafarbene Chrysanthemen, frisch für den Blumenladen bei famila",
};

export function ZweiOrte() {
  return (
    <section id="orte" className="scroll-mt-24 bg-surface">
      <Container className="py-20 sm:py-28">
        <header className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <p className="label text-secondary">03 · Zwei Orte</p>
          <div>
            <h2 className="max-w-2xl font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05]">
              Zwei Orte, ein Familienbetrieb.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Besuchen Sie uns in der Gärtnerei in Groß Steinrade oder am
              Blumenstand bei famila in Stockelsdorf. Beides aus einer Hand.
            </p>
          </div>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {standorte.map((s, i) => (
            <Reveal key={s.key} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                  <Image
                    src={cardPhoto[s.key]}
                    alt={cardAlt[s.key]}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <p className="label text-secondary">{s.kind}</p>
                  <h3 className="mt-2 font-display text-[1.75rem] leading-tight">
                    {s.name}
                  </h3>

                  <address className="mt-4 not-italic leading-relaxed text-muted">
                    {s.street}
                    <br />
                    {s.zipCity}
                  </address>

                  <dl className="mt-7 border-t border-border">
                    {s.hours.map((h) => (
                      <div
                        key={h.days}
                        className="flex items-baseline justify-between gap-4 border-b border-border py-2.5"
                      >
                        <dt className="text-[0.95rem] text-muted">{h.days}</dt>
                        <dd className="nums text-[0.95rem] font-semibold">
                          {h.time}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <Cta href={s.phoneHref}>Anrufen · {s.phone}</Cta>
                    <a
                      href={s.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/route inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      Route planen
                      <span
                        aria-hidden
                        className="transition-transform duration-200 group-hover/route:translate-x-0.5"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
