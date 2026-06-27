import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PILLARS } from "@/lib/content";
import { Sprout, Heart, Tag } from "@/components/ui/icons";

const ICONS = [Sprout, Heart, Tag];

export function Intro() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            <span className="rule-accent" />
            Liebe Pflanzenfreunde
            <span className="rule-accent" />
          </div>
          <h2 className="mt-5 text-balance text-4xl sm:text-5xl">
            Schön, dass Sie da sind.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Seit 1930 ziehen wir in Altenkrempe Pflanzen heran, binden Blumen für
            jeden Anlass und beraten Sie mit Herz und Fachwissen — am schönsten
            ist es, wenn Sie persönlich vorbeikommen.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Ico = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/12 text-secondary">
                    <Ico size={22} />
                  </span>
                  <h3 className="mt-5 text-xl text-primary">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
