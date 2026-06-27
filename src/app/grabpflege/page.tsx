import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SplitImage } from "@/components/ui/SplitImage";
import { InfoGrid } from "@/components/ui/InfoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import { IMAGES } from "@/lib/images";
import { GRABPFLEGE, CONTACT } from "@/lib/content";
import { Heart } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Grabpflege",
  description:
    "Grabpflege und -gestaltung auf den Friedhöfen in Neustadt, Altenkrempe und Umgebung. Dauergrabpflege, Saisonpflege und individuelle Grabgestaltung.",
};

export default function GrabpflegePage() {
  return (
    <>
      <PageHeader
        eyebrow="Grabpflege"
        title={GRABPFLEGE.lead}
        intro={GRABPFLEGE.intro}
        crumb="Grabpflege"
      />
      <main>
        <section className="py-20 sm:py-28">
          <SplitImage
            image={IMAGES["nursery-3"]}
            alt="Grabgestaltung der Gärtnerei Hamer"
            eyebrow="Mit Respekt"
            title="Wir kümmern uns — verlässlich und das ganze Jahr."
          >
            <p>
              Auf den Friedhöfen in Neustadt, Altenkrempe und Umgebung helfen wir
              Ihnen gern bei Grabneuanlagen und -überholungen sowie der laufenden
              Pflege.
            </p>
            <p className="flex items-center gap-2 text-base font-medium text-secondary">
              <Heart size={18} />
              {CONTACT.association}.
            </p>
          </SplitImage>
        </section>

        <section className="bg-surface py-20 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Unsere Leistungen"
              title="Würdevolle Grabpflege nach Ihren Wünschen."
              className="max-w-2xl"
            />
            <div className="mt-12">
              <InfoGrid items={GRABPFLEGE.services} columns={2} />
            </div>
          </Container>
        </section>

        <ContactCta />
      </main>
    </>
  );
}
