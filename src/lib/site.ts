/**
 * Single source of truth for Gärtnerei Stein — facts drawn only from the wiki
 * (verified company profile). No invented claims.
 */

export const business = {
  name: "Gärtnerei Stein",
  foundedYear: 1976,
  city: "Lübeck",
  district: "Groß Steinrade",
  facebook: "https://www.facebook.com/gaertnereistein",
  // proposed/target domain — the business owns none today
  domain: "gaertnerei-stein.de",
} as const;

export type Standort = {
  key: string;
  kind: string;
  name: string;
  shortPlace: string;
  street: string;
  zipCity: string;
  phone: string;
  phoneHref: string;
  hours: { days: string; time: string }[];
  hoursShort: string;
  mapsUrl: string;
};

export const standorte: Standort[] = [
  {
    key: "gaertnerei",
    kind: "Gärtnerei",
    name: "Gärtnerei in Groß Steinrade",
    shortPlace: "Groß Steinrade",
    street: "Steinrader Hauptstraße 28",
    zipCity: "23556 Lübeck",
    phone: "0451 495877",
    phoneHref: "tel:+49451495877",
    hours: [
      { days: "Mo – Fr", time: "08:00 – 18:00" },
      { days: "Samstag", time: "08:00 – 16:00" },
      { days: "Sonntag", time: "geschlossen" },
    ],
    hoursShort: "Mo–Fr 8–18 · Sa 8–16",
    mapsUrl: "https://maps.app.goo.gl/UzCychEA3okEF2nV7",
  },
  {
    key: "blumenladen",
    kind: "Blumenladen",
    name: "Blumenladen bei famila",
    shortPlace: "famila Stockelsdorf",
    street: "Ravensbusch 1",
    zipCity: "23617 Stockelsdorf",
    phone: "0451 81300818",
    phoneHref: "tel:+4945181300818",
    hours: [
      { days: "Mo – Do", time: "08:00 – 19:00" },
      { days: "Fr – Sa", time: "08:00 – 20:00" },
      { days: "Sonntag", time: "geschlossen" },
    ],
    hoursShort: "Mo–Do 8–19 · Fr–Sa 8–20",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=famila+Stockelsdorf+Ravensbusch+1",
  },
];

/** Primary phone for header/hero CTAs (the Gärtnerei). */
export const primaryPhone = standorte[0];

/** Section index for the signature "spine" navigation. */
export const sections = [
  { id: "start", n: "01", label: "Start" },
  { id: "sortiment", n: "02", label: "Sortiment" },
  { id: "orte", n: "03", label: "Zwei Orte" },
  { id: "ueber-uns", n: "04", label: "Über uns" },
  { id: "kontakt", n: "05", label: "Kontakt" },
] as const;

export const sortiment = [
  {
    n: "01",
    title: "Beet- & Balkonpflanzen",
    body:
      "Kräftige Beet- und Balkonpflanzen für die Saison — von der ersten Frühlingsbepflanzung bis zum vollen Sommerkasten. Aus unserer Gärtnerei in Groß Steinrade.",
  },
  {
    n: "02",
    title: "Schnittblumen & Sträuße",
    body:
      "Frische Schnittblumen und von Hand gebundene Sträuße — für den Alltag, zum Verschenken oder einfach für sich. Täglich frisch im Blumenladen bei famila.",
  },
  {
    n: "03",
    title: "Garten- & Grünpflanzen",
    body:
      "Stauden, Grün- und Gartenpflanzen für Beet, Terrasse und Fensterbank — gesund gezogen und ehrlich ausgewählt.",
  },
  {
    n: "04",
    title: "Floristik",
    body:
      "Florale Arbeiten und Gestecke für Ihre Anlässe — schlicht oder üppig, immer aus der Hand der Familie Stein.",
  },
  {
    n: "05",
    title: "Beratung aus Erfahrung",
    body:
      "Was wächst wo am besten? Seit 1976 geben wir unser Wissen gern weiter — persönlich, geduldig und ohne Verkaufsdruck.",
  },
] as const;
