import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Figure } from "@/components/Figure";
import schild from "@/assets/photos/schild.jpg";

const stats = [
  { value: "1976", label: "Gegründet in Groß Steinrade", tnum: true },
  { value: "2", label: "Standorte: Gärtnerei & Blumenladen", tnum: true },
  { value: "Familie", label: "Geführt von der Familie Stein", italic: true },
];

export function UeberUns() {
  return (
    <section id="ueber-uns" className="scroll-mt-24 border-t border-border">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <p className="label text-secondary lg:pt-3">04 · Über uns</p>
          <div>
            <Reveal>
              <h2 className="max-w-3xl font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.06]">
                Eine Gärtnerei zum <em className="text-primary">Anfassen.</em>
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
                Was 1976 in Groß Steinrade begann, führen wir bis heute als
                Familie weiter: ein überschaubarer Betrieb, in dem man sich
                kennt, ehrlich berät und für die eigene Ware geradesteht. Ob
                voller Balkonkasten oder ein einzelner Strauß, bei uns bekommen
                Sie beides mit der gleichen Sorgfalt.
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <Figure
                image={schild}
                alt="Gemaltes Schild „Blumen und Pflanzen aus der Gärtnerei Stein“ am Eingang, umrahmt von blühenden Sträuchern"
                position="object-top"
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="aspect-[16/10]"
              />
            </Reveal>

            <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-background p-7">
                  <dt
                    className={`font-display text-[2.6rem] leading-none ${
                      s.tnum ? "nums" : ""
                    } ${s.italic ? "italic text-primary" : ""}`}
                  >
                    {s.value}
                  </dt>
                  <dd className="mt-3 text-[0.95rem] leading-snug text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
