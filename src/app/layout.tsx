import type { Metadata } from "next";
import { Playfair_Display, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileContactBar } from "@/components/site/MobileContactBar";

const heading = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-brand-heading",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-brand-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-brand-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gaertnerei-hamer.de"),
  title: {
    default: "Gärtnerei Hamer — Floristik, Gartencenter & Grabpflege in Altenkrempe",
    template: "%s — Gärtnerei Hamer",
  },
  description:
    "Familienbetrieb seit 1930 in Altenkrempe: Floristik, Pflanzen & Blumen, Gartencenter, Grabpflege und eigene Aufzucht — alles in bester Hamerqualität.",
  keywords: [
    "Gärtnerei",
    "Floristik",
    "Gartencenter",
    "Grabpflege",
    "Altenkrempe",
    "Neustadt in Holstein",
    "Blumen",
    "Pflanzen",
    "Garten- und Landschaftsbau",
  ],
  authors: [{ name: "Gärtnerei Hamer GbR" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Gärtnerei Hamer",
    title: "Gärtnerei Hamer — Bei uns wird es bunt",
    description:
      "Familienbetrieb seit 1930 in Altenkrempe: Floristik, Gartencenter, Grabpflege und eigene Aufzucht in bester Hamerqualität.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${heading.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-dvh pb-[68px] lg:pb-0">
        <Header />
        {children}
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
