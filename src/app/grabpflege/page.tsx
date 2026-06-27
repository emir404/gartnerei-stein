import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SplitImage } from "@/components/ui/SplitImage";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Gallery, type GalleryItem } from "@/components/ui/Gallery";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import { GRAB, FUNERAL } from "@/lib/images";
import { GRABPFLEGE, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Grabpflege",
  description:
    "Grabpflege und -gestaltung auf den Friedhöfen in Neustadt, Altenkrempe und Umgebung. Dauergrabpflege, Saisonpflege und individuelle Grabgestaltung.",
};

const GALLERY: GalleryItem[] = [
  { src: GRAB[0], alt: "Grabgestaltung" },
  { src: GRAB[1], alt: "Grabbepflanzung" },
  { src: GRAB[2], alt: "Gepflegte Grabstätte" },
  { src: FUNERAL[1], alt: "Trauergesteck" },
  { src: FUNERAL[2], alt: "Grabschmuck" },
  { src: FUNERAL[3], alt: "Kranz" },
];

export default function GrabpflegePage() {
  return (
    <>
      <PageHeader
        eyebrow="Grabpflege"
        title={GRABPFLEGE.lead}
        intro={GRABPFLEGE.intro}
        crumb="Grabpflege"
        image={GRAB[0]}
        alt="Würdevolle Grabgestaltung der Gärtnerei Hamer"
      />
      <main>
        <section className="py-20 sm:py-28">
          <SplitImage
            image={GRAB[1]}
            alt="Grabpflege der Gärtnerei Hamer"
            eyebrow="Mit Respekt"
            title="Wir kümmern uns — das ganze Jahr."
          >
            <p>{CONTACT.association}.</p>
          </SplitImage>
        </section>

        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Unsere Leistungen" title="Würdevoll und zuverlässig." className="max-w-2xl" />
            <div className="mt-12">
              <InfoGrid items={GRABPFLEGE.services} columns={2} />
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Galerie" title="Gestaltung mit Gefühl." className="max-w-2xl" />
            <Reveal className="mt-12">
              <Gallery items={GALLERY} />
            </Reveal>
          </Container>
        </section>

        <ContactCta />
      </main>
    </>
  );
}
