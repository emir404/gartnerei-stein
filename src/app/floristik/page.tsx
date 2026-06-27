import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SplitImage } from "@/components/ui/SplitImage";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Gallery, type GalleryItem } from "@/components/ui/Gallery";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import { GEN, FLORISTIK as FLO, WEDDING, FUNERAL } from "@/lib/images";
import { FLORISTIK } from "@/lib/content";

export const metadata: Metadata = {
  title: "Floristik",
  description:
    "Sträuße, Gestecke, Kränze und Tischdekorationen mit Einfühlungsvermögen und Geschmack — Geschenk-, Hochzeits- und Trauerfloristik aus Altenkrempe.",
};

const GALLERY: GalleryItem[] = [
  { src: FLO[0], alt: "Florales Gesteck" },
  { src: WEDDING[0], alt: "Brautstrauß" },
  { src: FLO[1], alt: "Handgebundener Strauß" },
  { src: WEDDING[2], alt: "Hochzeitsfloristik" },
  { src: FLO[2], alt: "Tischdekoration" },
  { src: FUNERAL[0], alt: "Trauerfloristik" },
  { src: WEDDING[4], alt: "Brautfloristik" },
  { src: FLO[3], alt: "Blumengesteck" },
];

export default function FloristikPage() {
  return (
    <>
      <PageHeader
        eyebrow="Floristik"
        title={FLORISTIK.lead}
        intro={FLORISTIK.intro}
        crumb="Floristik"
        image={GEN.floristik}
        alt="Florale Handarbeit der Gärtnerei Hamer"
      />
      <main>
        <section className="py-20 sm:py-28">
          <SplitImage
            image={FLO[1]}
            alt="Floristik aus der Gärtnerei Hamer"
            eyebrow="Handarbeit"
            title="Jedes Stück ein Einzelkunstwerk."
          >
            <p>{FLORISTIK.note}</p>
          </SplitImage>
        </section>

        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Unser Angebot" title="Für jeden Anlass." className="max-w-2xl" />
            <div className="mt-12">
              <InfoGrid items={FLORISTIK.categories} columns={3} />
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Galerie" title="Unsere floralen Arbeiten." className="max-w-2xl" />
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
