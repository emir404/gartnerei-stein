import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";
import { standorte, business } from "@/lib/site";

export function Kontakt() {
  return (
    <section
      id="kontakt"
      className="grain scroll-mt-24 bg-primary-deep text-background"
    >
      <Container className="relative py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <p className="label text-background/65 lg:pt-3">05 · Kontakt</p>
          <div>
            <Reveal>
              <h2 className="max-w-2xl font-display text-[clamp(2.1rem,4.8vw,3.5rem)] leading-[1.04]">
                Kommen Sie vorbei.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
                Wir haben keinen Onlineshop, dafür zwei Orte, an denen Sie alles
                in die Hand nehmen können. Rufen Sie an oder schauen Sie einfach
                vorbei.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-background/15 bg-background/10 sm:grid-cols-2">
              {standorte.map((s) => (
                <div
                  key={s.key}
                  className="flex flex-col bg-primary-deep p-7 sm:p-8"
                >
                  <p className="label text-background/60">{s.kind}</p>
                  <p className="mt-2 font-display text-2xl">{s.shortPlace}</p>
                  <p className="mt-3 leading-relaxed text-background/75">
                    {s.street}
                    <br />
                    {s.zipCity}
                  </p>
                  <p className="nums mt-3 text-sm text-background/65">
                    {s.hoursShort}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <Cta href={s.phoneHref} tone="dark">
                      Anrufen · {s.phone}
                    </Cta>
                    <a
                      href={s.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-background transition-colors hover:text-accent-soft"
                    >
                      Route
                      <span
                        aria-hidden
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-background/70">
              Mehr von uns auf{" "}
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-background underline decoration-background/30 underline-offset-4 transition-colors hover:text-accent-soft"
              >
                Facebook
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
