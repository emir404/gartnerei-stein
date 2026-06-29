import { Hero } from "@/components/Hero";
import { Lede } from "@/components/Lede";
import { Sortiment } from "@/components/Sortiment";
import { ZweiOrte } from "@/components/ZweiOrte";
import { UeberUns } from "@/components/UeberUns";
import { Showcase } from "@/components/Showcase";
import { Kontakt } from "@/components/Kontakt";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Florist", "GardenStore"],
  name: "Gärtnerei Stein",
  description:
    "Familienbetriebene Gärtnerei seit 1976 in Lübeck / Groß Steinrade mit einem Blumenladen bei famila in Stockelsdorf.",
  foundingDate: "1976",
  url: "https://gaertnerei-stein.de",
  telephone: "+49 451 495877",
  priceRange: "€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Steinrader Hauptstraße 28",
    postalCode: "23556",
    addressLocality: "Lübeck",
    addressRegion: "Schleswig-Holstein",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  sameAs: ["https://www.facebook.com/gaertnereistein"],
  department: [
    {
      "@type": "Florist",
      name: "Gärtnerei Stein · Blumenladen bei famila",
      telephone: "+49 451 81300818",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ravensbusch 1",
        postalCode: "23617",
        addressLocality: "Stockelsdorf",
        addressCountry: "DE",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Lede />
      <Sortiment />
      <ZweiOrte />
      <UeberUns />
      <Showcase />
      <Kontakt />
    </>
  );
}
