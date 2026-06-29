import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Figure } from "@/components/Figure";
import { Leaf } from "@/components/Botanical";
import { sortiment } from "@/lib/site";
import geranien from "@/assets/photos/geranien.jpg";

export function Sortiment() {
  return (
    <section id="sortiment" className="scroll-mt-24 border-t border-border">
      <Container className="py-20 sm:py-28">
        <header className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <p className="label text-secondary">02 · Sortiment</p>
          <div>
            <h2 className="max-w-2xl font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05]">
              Was bei uns wächst und blüht.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Vom Beetkasten bis zum gebundenen Strauß: das meiste kommt aus
              unserer Gärtnerei in Groß Steinrade. Frisch, saisonal und mit
              Sorgfalt ausgewählt.
            </p>
          </div>
        </header>

        <Reveal className="mt-12 sm:mt-14">
          <Figure
            image={geranien}
            alt="Reihen kräftiger roter und rosa Geranien in der Gärtnerei Stein"
            eyebrow="Aus unseren Gewächshäusern"
            caption="Kräftige Beet- und Balkonpflanzen, Saison für Saison."
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="aspect-[16/9] lg:aspect-[12/5]"
          />
        </Reveal>

        <ul className="mt-14 border-b border-border">
          {sortiment.map((item, i) => (
            <li key={item.n}>
              <Reveal delay={i * 70} className="border-t border-border">
                <div className="group grid gap-3 py-8 sm:grid-cols-[5.5rem_1fr] sm:gap-10 sm:py-9">
                  <div className="flex items-start justify-between sm:block">
                    <span className="nums font-display text-[2.6rem] leading-none text-muted/55 transition-colors duration-300 group-hover:text-accent">
                      {item.n}
                    </span>
                    <Leaf className="mt-2 hidden size-5 text-primary/0 transition-colors duration-300 group-hover:text-primary/70 sm:block" />
                  </div>
                  <div>
                    <h3 className="font-display text-[1.6rem] font-normal leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
