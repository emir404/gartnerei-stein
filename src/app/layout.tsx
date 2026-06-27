import type { Metadata } from "next";
import { Fraunces, Mulish } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Spine } from "@/components/Spine";

const heading = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-brand-heading",
  display: "swap",
});

const body = Mulish({
  subsets: ["latin"],
  variable: "--font-brand-body",
  display: "swap",
});

const description =
  "Familienbetrieb seit 1976 in Lübeck / Groß Steinrade: frische Beet- und Balkonpflanzen, Schnittblumen und Floristik. Unsere Gärtnerei an der Steinrader Hauptstraße und der Blumenladen bei famila in Stockelsdorf.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gaertnerei-stein.de"),
  title: {
    default: "Gärtnerei Stein — Gärtnerei & Blumenladen in Lübeck / Groß Steinrade",
    template: "%s — Gärtnerei Stein",
  },
  description,
  keywords: [
    "Gärtnerei",
    "Blumenladen",
    "Floristik",
    "Beetpflanzen",
    "Balkonpflanzen",
    "Schnittblumen",
    "Lübeck",
    "Groß Steinrade",
    "famila Stockelsdorf",
    "Familienbetrieb",
  ],
  authors: [{ name: "Gärtnerei Stein" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Gärtnerei Stein",
    title: "Gärtnerei Stein — Pflanzen & Blumen aus Familienhand",
    description,
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
      className={`${heading.variable} ${body.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <a
          href="#sortiment"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <Spine />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
