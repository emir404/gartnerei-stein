import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Blob } from "@/components/ui/Blob";
import { ButtonLink } from "@/components/ui/Button";

const STATS = [
  { n: "1930", l: "gegründet" },
  { n: "90+", l: "Jahre Erfahrung" },
  { n: "4", l: "Bereiche unter einem Dach" },
];

export function Heritage() {
  return (
    <section className="grain relative isolate overflow-hidden bg-primary-deep py-20 text-background sm:py-28">
      <Blob
        className="anim-float pointer-events-none absolute -left-16 top-12 h-72 w-72 opacity-10"
        color="var(--accent)"
      />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="rule-accent" />
              Seit 1930
            </div>
            <h2 className="mt-6 text-balance text-4xl text-background sm:text-5xl">
              Ein Familienbetrieb, gewachsen über Generationen.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-background/75">
              Was 1930 begann, führen wir bis heute mit denselben Werten weiter:
              ehrliche Handarbeit, gute Beratung und die Liebe zu allem, was
              wächst und blüht. Heute leitet Heiko Hamer den Betrieb — gemeinsam
              mit einem eingespielten Team aus Gärtnern und Floristen.
            </p>
            <dl className="mt-9 grid grid-cols-3 gap-6 border-t border-background/15 pt-8">
              {STATS.map((s) => (
                <div key={s.l}>
                  <dt className="font-heading text-3xl text-accent sm:text-4xl">
                    {s.n}
                  </dt>
                  <dd className="mt-1 text-sm text-background/70">{s.l}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink href="/ueber-uns" variant="accent" size="md" className="mt-9">
              Unsere Geschichte
            </ButtonLink>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="mask-blob overflow-hidden shadow-lg">
                <Image
                  src={IMAGES["nursery-2"]}
                  alt="Blick in die Gärtnerei Hamer"
                  className="aspect-[4/3] h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 w-40 rotate-[-4deg] overflow-hidden rounded-2xl border-4 border-background bg-background shadow-lg sm:w-52">
                <Image
                  src={IMAGES.family}
                  alt="Die Familie Hamer in ihrer Gärtnerei"
                  className="h-full w-full object-cover"
                  sizes="220px"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
