import Image from "next/image";
import { Container } from "@/components/Container";
import { Sprig } from "@/components/Botanical";
import showcaseImage from "@/assets/generated/showcase.jpg";

/**
 * Brand showcase — the one signature visual. When a generated image is present
 * it runs as a full-bleed band with an overlaid caption; otherwise it falls
 * back to a fully token-driven botanical field (no image, still on-brand).
 *
 * Swap is a single edit: set `showcase` to `null` to force the CSS treatment.
 */
const showcase: typeof showcaseImage | null = showcaseImage;

export function Showcase() {
  if (showcase) {
    return (
      <section className="relative overflow-hidden border-y border-border bg-primary-deep">
        <Image
          src={showcase}
          alt="Üppiger, von Hand gebundener Saisonstrauß und getopfte Pflanzen auf einer Natursteinfläche in heller, ruhiger Werkstatt"
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-right"
          priority={false}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/30 to-primary-deep/55"
        />
        <Container className="relative">
          <div className="grain flex min-h-[58vh] max-w-2xl flex-col justify-end py-16 text-background sm:min-h-[64vh] sm:py-20">
            <p className="label text-background/75">Botanischer Almanach</p>
            <p className="mt-4 font-display text-[clamp(1.9rem,4.2vw,3.1rem)] leading-[1.12]">
              Frisch aus Groß Steinrade, von der Gärtnerei bis in Ihre Vase.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      aria-label="Frische Pflanzen und Blumen aus der Gärtnerei Stein"
      className="relative overflow-hidden border-y border-border bloom-field"
    >
      <Container className="relative py-24 text-center sm:py-32">
        <Sprig className="mx-auto h-24 w-auto text-primary/60" />
        <p className="label mt-7 justify-center text-secondary">
          Botanischer Almanach
        </p>
        <p className="mx-auto mt-4 max-w-3xl font-display text-[clamp(1.9rem,4.2vw,3.1rem)] leading-[1.14]">
          Frisch aus Groß Steinrade, von der Gärtnerei bis in Ihre Vase.
        </p>
      </Container>
    </section>
  );
}
