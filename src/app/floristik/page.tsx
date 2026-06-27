import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SplitImage } from "@/components/ui/SplitImage";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import { IMAGES } from "@/lib/images";
import { FLORISTIK, ANNIVERSARIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Floristik",
  description:
    "Sträuße, Gestecke, Kränze und Tischdekorationen mit Einfühlungsvermögen und Geschmack — Geschenk-, Hochzeits- und Trauerfloristik aus Altenkrempe.",
};

export default function FloristikPage() {
  return (
    <>
      <PageHeader
        eyebrow="Floristik"
        title={FLORISTIK.lead}
        intro={FLORISTIK.intro}
        crumb="Floristik"
      />
      <main>
        <section className="py-20 sm:py-28">
          <SplitImage
            image={IMAGES["nursery-1"]}
            alt="Florale Handarbeit aus der Gärtnerei Hamer"
            eyebrow="Handarbeit"
            title="Jedes Stück ein kleines Einzelkunstwerk."
          >
            <p>
              Unsere Profis fertigen Gestecke und Blumensträuße auf höchstem
              Niveau für jeden Anlass — ganz nach Ihren Vorstellungen.
            </p>
            <p>{FLORISTIK.note}</p>
          </SplitImage>
        </section>

        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Unser Angebot"
              title="Floristik für jeden Anlass."
              className="max-w-2xl"
            />
            <div className="mt-12">
              <InfoGrid items={FLORISTIK.categories} columns={3} />
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
              <Reveal>
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    <span className="rule-accent" />
                    Zum Jubiläum
                  </div>
                  <h2 className="mt-4 text-balance text-3xl sm:text-4xl">
                    Blumen zur Hochzeit — und zu jedem Ehejubiläum.
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted">
                    Ob Silber-, Gold- oder Diamanthochzeit: Wir gestalten den
                    passenden Blumenschmuck für Ihren besonderen Tag. Eine kleine
                    Übersicht der Jubiläen:
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {ANNIVERSARIES.map((a) => (
                    <div
                      key={a.name}
                      className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
                    >
                      <dt className="font-heading text-lg text-primary">{a.years}</dt>
                      <dd className="mt-0.5 text-sm text-muted">{a.name}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </Container>
        </section>

        <ContactCta />
      </main>
    </>
  );
}
