import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { Sprig, Leaf } from "@/components/Botanical";
import { standorte, primaryPhone } from "@/lib/site";

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
              Balkonpflanzen aus der eigenen Gärtnerei — und täglich frische
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

          {/* the "almanac" card — token-driven, no photo needed */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border border-border shadow-md">
              <div aria-hidden className="absolute inset-0 bloom-field" />
              <div className="relative p-8 sm:p-10">
                <Sprig className="h-28 w-auto text-primary/70" />
                <p className="label mt-5 text-secondary">Botanischer Almanach</p>
                <p className="mt-1 font-display text-[1.7rem] leading-tight">
                  Seit 1976 in Groß&nbsp;Steinrade
                </p>

                <div className="mt-7 space-y-px overflow-hidden rounded-lg border border-border bg-card/70">
                  {standorte.map((s) => (
                    <div
                      key={s.key}
                      className="flex items-center gap-3 bg-card/80 px-4 py-3.5"
                    >
                      <Leaf className="size-4 shrink-0 text-primary" />
                      <div className="min-w-0">
                        <p className="label text-[0.62rem] text-muted">
                          {s.kind}
                        </p>
                        <p className="truncate text-[0.95rem] font-semibold">
                          {s.key === "gaertnerei"
                            ? "Groß Steinrade"
                            : "famila Stockelsdorf"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
