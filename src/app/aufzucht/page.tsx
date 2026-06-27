import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SplitImage } from "@/components/ui/SplitImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Gallery, type GalleryItem } from "@/components/ui/Gallery";
import { Reveal } from "@/components/ui/Reveal";
import { Seasons } from "@/components/site/Seasons";
import { ContactCta } from "@/components/site/ContactCta";
import { GEN, PLANTS, NURSERY } from "@/lib/images";
import { AUFZUCHT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aufzucht",
  description:
    "Aus eigener Produktion: Beet- und Balkonpflanzen, Stauden, Schnittblumen und Weihnachtssterne — das ganze Jahr in unseren Gewächshäusern herangezogen.",
};

const GALLERY: GalleryItem[] = [
  { src: PLANTS[0], alt: "Pflanzen aus eigener Aufzucht" },
  { src: NURSERY[5], alt: "In den Gewächshäusern" },
  { src: PLANTS[1], alt: "Beet- und Balkonpflanzen" },
  { src: PLANTS[3], alt: "Saisonpflanzen" },
  { src: NURSERY[1], alt: "Die Gärtnerei" },
  { src: PLANTS[4], alt: "Frische Ware" },
];

export default function AufzuchtPage() {
  return (
    <>
      <PageHeader
        eyebrow="Eigene Aufzucht"
        title={AUFZUCHT.lead}
        intro={AUFZUCHT.intro}
        crumb="Aufzucht"
        image={GEN.plants}
        alt="Aufzucht in den Gewächshäusern der Gärtnerei Hamer"
      />
      <main>
        <section className="py-20 sm:py-28">
          <SplitImage
            image={NURSERY[5]}
            alt="Aufzucht in den Gewächshäusern"
            eyebrow="Aus eigener Produktion"
            title="Vieles wächst direkt bei uns heran."
          >
            <p>
              Weil wir selbst produzieren, wissen wir genau, was wir Ihnen
              mitgeben: frische Ware in bester Hamerqualität.
            </p>
          </SplitImage>
        </section>

        <Seasons />

        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Galerie" title="Frisch aus dem Gewächshaus." className="max-w-2xl" />
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
