import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";
import { Sprig } from "@/components/Botanical";
import { standorte } from "@/lib/site";

export function ZweiOrte() {
  return (
    <section id="orte" className="scroll-mt-24 bg-surface">
      <Container className="py-20 sm:py-28">
        <header className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <p className="label text-secondary">03 — Zwei Orte</p>
          <div>
            <h2 className="max-w-2xl font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05]">
              Zwei Orte, ein Familienbetrieb.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Besuchen Sie uns in der Gärtnerei in Groß Steinrade oder am
              Blumenstand bei famila in Stockelsdorf — beides aus einer Hand.
            </p>
          </div>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {standorte.map((s, i) => (
            <Reveal key={s.key} delay={i * 90}>
              <article className="relative h-full overflow-hidden rounded-xl border border-border bg-card p-8 shadow-sm sm:p-10">
                <Sprig
                  className="pointer-events-none absolute -right-4 -top-6 h-32 w-auto text-primary/10"
                />
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
                    className="group inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    Route planen
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
