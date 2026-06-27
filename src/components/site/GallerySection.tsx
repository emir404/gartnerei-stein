import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lookbook } from "@/components/ui/Lookbook";
import type { LightboxItem } from "@/components/ui/Lightbox";
import { WEDDING, FLORISTIK, PLANTS } from "@/lib/images";

const ITEMS: LightboxItem[] = [
  { src: WEDDING[0], alt: "Brautstrauß" },
  { src: FLORISTIK[0], alt: "Florales Gesteck" },
  { src: WEDDING[1], alt: "Hochzeitsfloristik" },
  { src: FLORISTIK[1], alt: "Handgebundener Strauß" },
  { src: WEDDING[2], alt: "Brautfloristik" },
  { src: PLANTS[0], alt: "Pflanzen aus eigener Aufzucht" },
  { src: WEDDING[3], alt: "Blütenzauber zur Hochzeit" },
  { src: FLORISTIK[2], alt: "Tischdekoration" },
  { src: WEDDING[4], alt: "Brautstrauß" },
  { src: WEDDING[5], alt: "Hochzeitsblumen" },
];

export function GallerySection() {
  return (
    <section className="overflow-hidden bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Aus unserer Werkstatt"
          title="Handarbeit, die für sich spricht."
          className="max-w-2xl"
        />
      </Container>
      <div className="mt-12">
        <Lookbook items={ITEMS} />
      </div>
    </section>
  );
}
