import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SplitImage } from "@/components/ui/SplitImage";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Testimonial } from "@/components/site/Testimonial";
import { ContactCta } from "@/components/site/ContactCta";
import { IMAGES } from "@/lib/images";
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
        intro="Familienbetrieb, Friedhofsgärtnerei und Garten- & Landschaftsbau — gewachsen über Generationen."
        crumb="Über uns"
      />
      <main>
        <section className="py-20 sm:py-28">
          <SplitImage
            image={IMAGES.family}
            alt="Die Familie Hamer in ihrer Gärtnerei"
            eyebrow="Unsere Geschichte"
            title="Seit 1930 in Familienhand."
          >
            {ABOUT.paragraphs.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </SplitImage>
        </section>

        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Wofür wir stehen"
              title="Werte, die seit Generationen tragen."
              className="max-w-2xl"
            />
            <div className="mt-12">
              <InfoGrid items={values} columns={3} />
            </div>
            <Reveal>
              <div className="mt-6 rounded-2xl border border-border bg-card p-7 shadow-sm">
                <p className="text-lg leading-relaxed text-muted">{ABOUT.galabau}</p>
              </div>
            </Reveal>
          </Container>
        </section>

        <Testimonial />

        <section className="pb-20 sm:pb-28">
          <Container>
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-balance text-3xl sm:text-4xl">
                Lernen Sie das Team kennen.
              </h2>
              <p className="max-w-xl text-muted">
                Hinter jeder Pflanze und jedem Strauß stehen Menschen, die ihr
                Handwerk lieben.
              </p>
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
