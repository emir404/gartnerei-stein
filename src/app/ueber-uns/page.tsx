import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SplitImage } from "@/components/ui/SplitImage";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageBand } from "@/components/ui/ImageBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Testimonial } from "@/components/site/Testimonial";
import { ContactCta } from "@/components/site/ContactCta";
import { NURSERY } from "@/lib/images";
import { ABOUT, PILLARS } from "@/lib/content";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Gärtnerei Hamer — Familienbetrieb seit 1930 in Altenkrempe, mit Friedhofsgärtnerei und Garten- & Landschaftsbau. Unsere Geschichte und unsere Werte.",
};

export default function UeberUnsPage() {
  const values = PILLARS.map((p) => ({ name: p.title, desc: p.body }));
  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        title={ABOUT.lead}
        intro="Familienbetrieb, Friedhofsgärtnerei und Garten- & Landschaftsbau — seit 1930."
        crumb="Über uns"
        image={NURSERY[1]}
        alt="Die Gärtnerei Hamer in Altenkrempe"
      />
      <main>
        <section className="py-20 sm:py-28">
          <SplitImage
            image={NURSERY[3]}
            alt="Die Gärtnerei Hamer"
            eyebrow="Unsere Geschichte"
            title="Seit 1930 in Familienhand."
          >
            <p>{ABOUT.paragraphs[0]}</p>
            <p>{ABOUT.paragraphs[2]}</p>
          </SplitImage>
        </section>

        <ImageBand
          image={NURSERY[4]}
          alt="Gewachsen über Generationen"
          minH="min-h-[72svh]"
        >
          <div className="max-w-2xl">
            <Eyebrow invert>Tradition</Eyebrow>
            <p className="mt-6 font-heading text-7xl leading-none text-background sm:text-8xl">
              1930
            </p>
            <h2 className="mt-3 text-balance text-3xl text-background sm:text-4xl">
              Werte, die über Generationen tragen.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-background/85">
              Heute leitet Heiko Hamer den Betrieb — mit ehrlicher Handarbeit,
              guter Beratung und Liebe zu allem, was wächst und blüht.
            </p>
          </div>
        </ImageBand>

        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Wofür wir stehen" title="Beste Hamerqualität." className="max-w-2xl" />
            <div className="mt-12">
              <InfoGrid items={values} columns={3} />
            </div>
          </Container>
        </section>

        <Testimonial />

        <section className="pb-20 sm:pb-28">
          <Container>
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-balance text-3xl sm:text-4xl">Lernen Sie das Team kennen.</h2>
              <ButtonLink href="/team" variant="primary" className="mt-2">
                Zum Team
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </Container>
        </section>

        <ContactCta />
      </main>
    </>
  );
}
