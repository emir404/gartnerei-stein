import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SplitImage } from "@/components/ui/SplitImage";
import { Seasons } from "@/components/site/Seasons";
import { ContactCta } from "@/components/site/ContactCta";
import { IMAGES } from "@/lib/images";
import { AUFZUCHT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aufzucht",
  description:
    "Aus eigener Produktion: Beet- und Balkonpflanzen, Stauden, Schnittblumen und Weihnachtssterne — das ganze Jahr in unseren Gewächshäusern herangezogen.",
};

export default function AufzuchtPage() {
  return (
    <>
      <PageHeader
        eyebrow="Eigene Aufzucht"
        title={AUFZUCHT.lead}
        intro={AUFZUCHT.intro}
        crumb="Aufzucht"
      />
      <main>
        <section className="py-20 sm:py-28">
          <SplitImage
            image={IMAGES["nursery-4"]}
            alt="Aufzucht in den Gewächshäusern der Gärtnerei Hamer"
            eyebrow="Aus eigener Produktion"
            title="Vieles wächst direkt bei uns heran."
          >
            <p>
              Neben Beet- und Balkonpflanzen wie Geranien, Alpenveilchen,
              Eisbegonien und Stauden führen wir Schnittblumen, Topfpflanzen,
              Dekorationen und Gestecke für besondere Anlässe sowie Baumschulware
              — gern auch auf Bestellung.
            </p>
            <p>
              Weil wir selbst produzieren, wissen wir genau, was wir Ihnen
              mitgeben: frische Ware in bester Hamerqualität.
            </p>
          </SplitImage>
        </section>

        <Seasons />

        <ContactCta />
      </main>
    </>
  );
}
