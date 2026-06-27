import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SplitImage } from "@/components/ui/SplitImage";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import { IMAGES } from "@/lib/images";
import { GARTENCENTER } from "@/lib/content";
import { Sprout, Truck } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Gartencenter",
  description:
    "Über 80 Jahre Erfahrung in Altenkrempe: Bäume, Sträucher, Hecken, Stauden und Dekoration — plus Garten- & Landschaftsbau und Lieferservice.",
};

const HIGHLIGHTS = [
  { ...GARTENCENTER.galabau, Icon: Sprout },
  { ...GARTENCENTER.lieferservice, Icon: Truck },
];

export default function GartencenterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gartencenter"
        title={GARTENCENTER.lead}
        intro={GARTENCENTER.intro}
        crumb="Gartencenter"
      />
      <main>
        <section className="py-20 sm:py-28">
          <SplitImage
            image={IMAGES["nursery-2"]}
            alt="Das Gartencenter der Gärtnerei Hamer"
            eyebrow="Seit über 80 Jahren"
            title="Damit Sie sich bei uns rundum wohlfühlen."
          >
            <p>
              Unser Team verwöhnt Sie mit Freundlichkeit, Rat und Tat,
              Hilfsbereitschaft und guter Laune. Bei der großen Auswahl an
              Pflanzen und Dekoration ist bestimmt etwas für Sie dabei.
            </p>
          </SplitImage>
        </section>

        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Im Sortiment"
              title="Alles für Beet, Balkon und Garten."
              className="max-w-2xl"
            />
            <div className="mt-12">
              <InfoGrid items={GARTENCENTER.offerings} columns={2} />
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-5 sm:grid-cols-2">
              {HIGHLIGHTS.map((h, i) => (
                <Reveal key={h.name} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-md">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/12 text-secondary">
                      <h.Icon size={22} />
                    </span>
                    <h3 className="mt-5 text-2xl text-primary">{h.name}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{h.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <ContactCta />
      </main>
    </>
  );
}
