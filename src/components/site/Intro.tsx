import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PILLARS } from "@/lib/content";
import { Sprout, Heart, Tag } from "@/components/ui/icons";

const ICONS = [Sprout, Heart, Tag];

export function Intro() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>Liebe Pflanzenfreunde</Eyebrow>
            <h2 className="mt-5 text-balance text-4xl sm:text-5xl">
              Schön, dass Sie da sind.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Seit 1930 ziehen wir in Altenkrempe Pflanzen heran und binden
              Blumen für jeden Anlass — am schönsten ist es, wenn Sie persönlich
              vorbeikommen.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:gap-3">
            {PILLARS.map((p, i) => {
              const Ico = ICONS[i];
              return (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/12 text-secondary">
                      <Ico size={20} />
                    </span>
                    <h3 className="mt-4 text-lg text-primary">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
