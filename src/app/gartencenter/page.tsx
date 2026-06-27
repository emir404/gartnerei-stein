import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SplitImage } from "@/components/ui/SplitImage";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Gallery, type GalleryItem } from "@/components/ui/Gallery";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import { GEN, GARTEN, PLANTS } from "@/lib/images";
import { GARTENCENTER } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gartencenter",
  description:
    "Über 80 Jahre Erfahrung in Altenkrempe: Bäume, Sträucher, Hecken, Stauden und Dekoration — plus Garten- & Landschaftsbau und Lieferservice.",
};

const OFFERINGS = [
  ...GARTENCENTER.offerings,
  GARTENCENTER.galabau,
  GARTENCENTER.lieferservice,
];

const GALLERY: GalleryItem[] = [
  { src: GARTEN[0], alt: "Im Gartencenter" },
  { src: PLANTS[0], alt: "Pflanzen & Stauden" },
  { src: GARTEN[1], alt: "Dekoration im Gartencenter" },
  { src: PLANTS[1], alt: "Beet- und Balkonpflanzen" },
  { src: GARTEN[2], alt: "Pflanzenauswahl" },
  { src: GARTEN[3], alt: "Gartencenter Altenkrempe" },
  { src: PLANTS[2], alt: "Stauden" },
  { src: GARTEN[4], alt: "Im Gartencenter" },
];

export default function GartencenterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gartencenter"
        title={GARTENCENTER.lead}
        intro={GARTENCENTER.intro}
        crumb="Gartencenter"
        image={GEN.garten}
        alt="Das Gartencenter der Gärtnerei Hamer"
      />
      <main>
        <section className="py-20 sm:py-28">
          <SplitImage
            image={PLANTS[0]}
            alt="Pflanzen im Gartencenter"
            eyebrow="Seit über 80 Jahren"
            title="Alles für Beet, Balkon und Garten."
            reverse
          >
            <p>
              Unser Team verwöhnt Sie mit Freundlichkeit, Rat und Tat — bei der
              großen Auswahl ist bestimmt etwas für Sie dabei.
            </p>
          </SplitImage>
        </section>

        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Im Sortiment" title="Von der Hecke bis zum Strauß." className="max-w-2xl" />
            <div className="mt-12">
              <InfoGrid items={OFFERINGS} columns={3} />
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Galerie" title="Ein Blick ins Gartencenter." className="max-w-2xl" />
            <Reveal className="mt-12">
              <Gallery items={GALLERY} bento />
            </Reveal>
          </Container>
        </section>

        <ContactCta />
      </main>
    </>
  );
}
