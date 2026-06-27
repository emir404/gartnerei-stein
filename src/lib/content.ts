/**
 * Site content for Gärtnerei Hamer — all copy drawn from the live site
 * (gaertnerei-hamer.de) and company profile. German-first, warm "Sie" voice.
 * Content lives here so it stays inspectable and easy to edit.
 */

export const CONTACT = {
  name: "Gärtnerei Hamer",
  legal: "Gärtnerei Hamer GbR",
  owner: "Heiko Hamer",
  founded: 1930,
  street: "Milchstraße 23",
  zip: "23730",
  city: "Altenkrempe",
  region: "Schleswig-Holstein",
  directions: "Direkt an der A1, Abfahrt 13 (Neustadt/Pelzerhaken)",
  phoneDisplay: "04561 · 88 39",
  phoneHref: "tel:+4945618839",
  fax: "04561 · 39 56 11",
  email: "info@gaertnerei-hamer.de",
  emailHref: "mailto:info@gaertnerei-hamer.de",
  instagram: "@gaertnerei_hamer",
  instagramHref: "https://www.instagram.com/gaertnerei_hamer/",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=G%C3%A4rtnerei+Hamer+Milchstra%C3%9Fe+23+23730+Altenkrempe",
  association: "Mitglied im Bund deutscher Friedhofsgärtner",
  impressumHref: "https://gaertnerei-hamer.de/index.php/impressum.html",
  datenschutzHref: "https://gaertnerei-hamer.de/index.php/datenschutz.html",
  bewerbungHref:
    "https://gaertnerei-hamer.de/index.php/profil/jobs-stellenangebote.html",
} as const;

export const HOURS = [
  { d: "Montag – Freitag", h: "8:00 – 18:00 Uhr" },
  { d: "Samstag", h: "8:00 – 12:30 Uhr" },
  { d: "Sonntag", h: "geschlossen" },
] as const;

export const NAV = [
  { label: "Floristik", href: "/floristik" },
  { label: "Gartencenter", href: "/gartencenter" },
  { label: "Grabpflege", href: "/grabpflege" },
  { label: "Aufzucht", href: "/aufzucht" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const HERO = {
  badge: "Familienbetrieb seit 1930",
  title: "Bei uns wird es bunt.",
  subtitle:
    "Gärtnerei, Floristik, Gartencenter und Grabpflege in Altenkrempe — seit 1930 in Familienhand. Pflanzen, Blumen und Beratung in bester Hamerqualität, vieles aus eigener Aufzucht.",
} as const;

export const PILLARS = [
  {
    title: "Aus eigener Aufzucht",
    body: "Ein großer Teil unserer Pflanzen wächst direkt bei uns in den Gewächshäusern heran — frische Ware in bester Hamerqualität.",
  },
  {
    title: "Persönliche Beratung",
    body: "Unser Team verwöhnt Sie mit Freundlichkeit, Rat und Tat, Hilfsbereitschaft und guter Laune. Wir nehmen uns Zeit für Sie.",
  },
  {
    title: "Faire Preise",
    body: "Alles zu angemessenen Preisen — im Vergleich zu anderen Gärtnereien günstig, ohne bei der Qualität Abstriche zu machen.",
  },
] as const;

/** Used on the home grid and as the source of each service subpage. */
export const SERVICES = [
  {
    slug: "floristik",
    name: "Floristik",
    tag: "Blüten für jeden Anlass",
    summary:
      "Sträuße, Gestecke, Kränze und Tischdekorationen — mit Einfühlungsvermögen und Geschmack gefertigt.",
    items: [
      "Geschenkfloristik",
      "Hochzeitsfloristik",
      "Trauerfloristik",
      "Pflanzen & Blumen",
      "Accessoires",
    ],
    image: "nursery-1",
  },
  {
    slug: "gartencenter",
    name: "Gartencenter",
    tag: "Alles für Beet, Balkon & Garten",
    summary:
      "Bäume, Sträucher, Heckenpflanzen, Stauden und Dekoration — plus Garten- & Landschaftsbau und Lieferservice.",
    items: [
      "Pflanzen & Stauden",
      "Bäume, Sträucher & Hecken",
      "Garten- & Landschaftsbau",
      "Dekoration",
      "Lieferservice",
    ],
    image: "nursery-2",
  },
  {
    slug: "grabpflege",
    name: "Grabpflege",
    tag: "Würdevoll & zuverlässig",
    summary:
      "Grabneuanlagen, Überholungen und Pflege auf den Friedhöfen in Neustadt, Altenkrempe und Umgebung.",
    items: [
      "Individuelle Grabpflege",
      "Dauergrabpflege",
      "Jahres- & Saisonpflege",
      "Winterliche Grababdeckung",
    ],
    image: "hero",
  },
  {
    slug: "aufzucht",
    name: "Aufzucht",
    tag: "Aus eigener Produktion",
    summary:
      "Vom Frühlingsblüher bis zum Weihnachtsstern — vieles ziehen wir das ganze Jahr in unseren Gewächshäusern selbst heran.",
    items: [
      "Beet- & Balkonpflanzen",
      "Stauden",
      "Schnittblumen & Topfpflanzen",
      "Baumschulware auf Bestellung",
    ],
    image: "nursery-2",
  },
] as const;

export const TESTIMONIAL = {
  quote:
    "Die Beratung ist stets nett und kompetent. Die Pflanzen sind alle qualitativ hochwertig. Die Preise sind im Vergleich zu anderen Gärtnereien günstig.",
  source: "Aus einer Kundenbewertung",
} as const;

/* ---------------- About / story ---------------- */
export const ABOUT = {
  lead: "Eine Gärtnerei im Familienbetrieb — seit 1930.",
  paragraphs: [
    "Wir sind eine Gärtnerei im Familienbetrieb (seit 1930) mit angeschlossener Friedhofsgärtnerei sowie Garten- und Landschaftsbau. Über die Jahrzehnte ist aus dem kleinen Betrieb ein Ort geworden, an dem alles grünt und blüht.",
    "Das ganze Jahr ziehen wir Pflanzen heran: Im Frühjahr beginnen wir mit Frühblühern wie Stiefmütterchen und Primeln. Im Sommer wächst in unseren Gewächshäusern ein großes Sortiment an Beet- und Balkonpflanzen heran, ab Anfang Mai gibt es Gemüsepflanzen und vorgezogene Blumenampeln. Zum Jahresende ziehen wir Weihnachtssterne direkt im eigenen Gewächshaus.",
    "Dazu führen wir Schnittblumen, Topfpflanzen, Dekorationen, Gestecke für besondere Anlässe, Baumschulware und Stauden — gern auch auf Bestellung. Alles zu angemessenen Preisen und bester Hamerqualität.",
  ],
  galabau:
    "Als erfahrener Fachbetrieb im Garten- und Landschaftsbau gestalten wir Gärten ganz nach Ihren Vorstellungen — und pflegen sie auf Wunsch dauerhaft weiter.",
} as const;

/* ---------------- Team ---------------- */
export const TEAM = [
  { name: "Heiko Hamer", role: "Inhaber · Gärtnermeister im Zierpflanzenbau" },
  { name: "Heidi Hamer", role: "Seniorchefin" },
  { name: "René Brüsewitz", role: "Ober-Florist" },
  { name: "Ilka Bähnke", role: "Floristin" },
  { name: "Franziska Hamer", role: "Floristin" },
  { name: "Marika Klemens", role: "Gärtnerin" },
  { name: "Andre Hamer", role: "Gärtner im GaLaBau" },
  { name: "Yannik Asmussen", role: "Geselle" },
] as const;

export const IN_MEMORIAM = [
  { name: "Hans Hamer", date: "27.10.2022" },
  { name: "Manuela Hamer", date: "06.04.2025" },
] as const;

/* ---------------- Careers ---------------- */
export const JOBS = {
  intro:
    "Wir suchen Verstärkung — werden Sie Teil unseres Familienbetriebs. Ausbildung und Festanstellung sind möglich.",
  positions: [
    "Zierpflanzengärtner (m/w/d)",
    "Friedhofsgärtner (m/w/d)",
    "Staudengärtner (m/w/d)",
    "Azubi Zierpflanzenbau (m/w/d)",
  ],
} as const;

/* ---------------- Per-service detail (subpages) ---------------- */
export const FLORISTIK = {
  lead: "Florale Handarbeit für jeden Anlass.",
  intro:
    "Unsere Mitarbeiter fertigen in der Floristik-Abteilung Sträuße, Gestecke, Kränze und Tischdekorationen mit Einfühlungsvermögen und Geschmack — jedes ein kleines Einzelkunstwerk, vom schlichten Strauß bis zur festlichen Anlassgestaltung.",
  note: "Und wenn es schnell gehen soll, wählen Sie einfach Ihren Favoriten aus unserem breiten Angebot vor Ort.",
  categories: [
    {
      name: "Geschenkfloristik",
      desc: "Liebevoll gebundene Sträuße und kleine Aufmerksamkeiten — für Geburtstag, Dank oder einfach so.",
    },
    {
      name: "Hochzeitsfloristik",
      desc: "Brautstrauß, Anstecker, Tisch- und Raumschmuck — abgestimmt auf Ihren schönsten Tag.",
    },
    {
      name: "Trauerfloristik",
      desc: "Kränze, Gestecke und Trauersträuße, würdevoll gestaltet, um Abschied in Würde zu begleiten.",
    },
    {
      name: "Pflanzen & Blumen",
      desc: "Schnittblumen und Topfpflanzen, frisch und in großer Auswahl — vieles aus eigener Aufzucht.",
    },
    {
      name: "Accessoires",
      desc: "Vasen, Übertöpfe und Dekoration, die Ihre Blumen und Pflanzen perfekt in Szene setzen.",
    },
  ],
} as const;

export const ANNIVERSARIES = [
  { years: "12,5 Jahre", name: "Petersilien-Hochzeit" },
  { years: "25 Jahre", name: "Silber-Hochzeit" },
  { years: "40 Jahre", name: "Rubin-Hochzeit" },
  { years: "50 Jahre", name: "Goldene Hochzeit" },
  { years: "60 Jahre", name: "Diamant-Hochzeit" },
  { years: "65 Jahre", name: "Eiserne Hochzeit" },
] as const;

export const GARTENCENTER = {
  lead: "Damit Sie sich bei uns rundum wohlfühlen.",
  intro:
    "Mit über 80 Jahren Erfahrung in Altenkrempe verwöhnt Sie unser Team mit Freundlichkeit, Rat und Tat, Hilfsbereitschaft und guter Laune. Bei der großen Auswahl an Pflanzen und Dekoration ist bestimmt etwas für Sie dabei.",
  offerings: [
    { name: "Bäume, Sträucher & Hecken", desc: "Eine große Auswahl für Garten und Grundstück." },
    { name: "Stauden & Beetpflanzen", desc: "Ein umfangreiches Staudensortiment, vieles aus eigener Aufzucht." },
    { name: "Dekoration", desc: "Dekorationsartikel in allen Größen für drinnen und draußen." },
    { name: "Sämereien & Pflege", desc: "Saatgut sowie Pflege- und Pflanzenschutzmittel." },
  ],
  galabau: {
    name: "Garten- & Landschaftsbau",
    desc: "Als erfahrener Fachbetrieb gestalten wir Ihren Garten ganz nach Ihren Vorstellungen — und pflegen ihn auf Wunsch dauerhaft.",
  },
  lieferservice: {
    name: "Lieferservice",
    desc: "Größere Pflanzen und Bestellungen bringen wir Ihnen auf Wunsch direkt nach Hause.",
  },
} as const;

export const GRABPFLEGE = {
  lead: "Grabpflege und -gestaltung — würdevoll und zuverlässig.",
  intro:
    "Auf den Friedhöfen in Neustadt, Altenkrempe und Umgebung helfen wir Ihnen gern bei Grabneuanlagen und -überholungen sowie der Grabpflege. Als Mitglied im Bund deutscher Friedhofsgärtner haben wir uns auf individuelle Grabgestaltung spezialisiert.",
  services: [
    { name: "Individuelle Grabgestaltung", desc: "Grabneuanlagen und -überholungen, abgestimmt auf Ihre Wünsche." },
    { name: "Dauergrabpflege", desc: "Wir pflegen die Ruhestätte dauerhaft — verlässlich, das ganze Jahr." },
    { name: "Jahres- & Saisonpflege", desc: "Jahrespflege oder einzelne Bepflanzungen für Frühling und Sommer." },
    { name: "Winterliche Grababdeckung", desc: "Stimmungsvoller, schützender Winterschmuck für die kalte Jahreszeit." },
  ],
} as const;

export const AUFZUCHT = {
  lead: "Das ganze Jahr in Farbe — aus eigener Produktion.",
  intro:
    "Neben Beet- und Balkonpflanzen wie Geranien, Alpenveilchen, Eisbegonien und Stauden führen wir Schnittblumen, Topfpflanzen, Dekorationen und Gestecke für besondere Anlässe sowie Baumschulware — gern auch auf Bestellung.",
} as const;

/** Signature interactive band on the home page. accentVar references brand tokens. */
export const SEASONS = [
  {
    key: "fruehling",
    label: "Frühling",
    accentVar: "--secondary",
    dark: true,
    headline: "Alles fängt an zu treiben.",
    note: "Wir starten ins Gärtnerjahr mit Frühblühern: Stiefmütterchen, Primeln und frisches Grün für Beet und Balkon.",
    plants: ["Stiefmütterchen", "Primeln", "Tulpen", "Kräuter"],
  },
  {
    key: "sommer",
    label: "Sommer",
    accentVar: "--accent",
    dark: false,
    headline: "Jetzt wird es richtig bunt.",
    note: "In den Gewächshäusern wächst ein großes Sortiment Beet- und Balkonpflanzen heran. Ab Mai gibt es Gemüsepflanzen und Blumenampeln.",
    plants: ["Geranien", "Eisbegonien", "Petunien", "Gemüsepflanzen"],
  },
  {
    key: "herbst",
    label: "Herbst",
    accentVar: "--accent-bloom",
    dark: false,
    headline: "Warme Farben, letzte Blüten.",
    note: "Heide, Chrysanthemen, Astern und Alpenveilchen bringen das Beet warm und stimmungsvoll durch den Herbst.",
    plants: ["Heide", "Chrysanthemen", "Astern", "Alpenveilchen"],
  },
  {
    key: "winter",
    label: "Winter",
    accentVar: "--primary",
    dark: true,
    headline: "Grün und festlich.",
    note: "Zum Jahresende ziehen wir Weihnachtssterne im eigenen Gewächshaus. Dazu Tannengrün und handgebundene Adventskränze.",
    plants: ["Weihnachtssterne", "Tannengrün", "Amaryllis", "Adventskränze"],
  },
] as const;
