import type { StaticImageData } from "next/image";

import hero from "@/assets/brand/hero/hero.jpg";
import logo from "@/assets/brand/logo.png";

import n1 from "@/assets/brand/nursery/n1.jpg";
import n2 from "@/assets/brand/nursery/n2.jpg";
import n3 from "@/assets/brand/nursery/n3.jpg";
import n4 from "@/assets/brand/nursery/n4.jpg";
import n5 from "@/assets/brand/nursery/n5.jpg";
import n6 from "@/assets/brand/nursery/n6.jpg";

import f1 from "@/assets/brand/floristik/f1.jpg";
import f2 from "@/assets/brand/floristik/f2.jpg";
import f3 from "@/assets/brand/floristik/f3.jpg";
import f4 from "@/assets/brand/floristik/f4.jpg";

import w1 from "@/assets/brand/wedding/w1.jpg";
import w2 from "@/assets/brand/wedding/w2.jpg";
import w3 from "@/assets/brand/wedding/w3.jpg";
import w4 from "@/assets/brand/wedding/w4.jpg";
import w5 from "@/assets/brand/wedding/w5.jpg";
import w6 from "@/assets/brand/wedding/w6.jpg";

import fu1 from "@/assets/brand/funeral/fu1.jpg";
import fu2 from "@/assets/brand/funeral/fu2.jpg";
import fu3 from "@/assets/brand/funeral/fu3.jpg";
import fu4 from "@/assets/brand/funeral/fu4.jpg";

import p1 from "@/assets/brand/plants/p1.jpg";
import p2 from "@/assets/brand/plants/p2.jpg";
import p3 from "@/assets/brand/plants/p3.jpg";
import p4 from "@/assets/brand/plants/p4.jpg";
import p5 from "@/assets/brand/plants/p5.jpg";

import g1 from "@/assets/brand/garten/g1.jpg";
import g2 from "@/assets/brand/garten/g2.jpg";
import g3 from "@/assets/brand/garten/g3.jpg";
import g4 from "@/assets/brand/garten/g4.jpg";
import g5 from "@/assets/brand/garten/g5.jpg";

import gr1 from "@/assets/brand/grab/gr1.jpg";
import gr2 from "@/assets/brand/grab/gr2.jpg";
import gr3 from "@/assets/brand/grab/gr3.jpg";

import heiko from "@/assets/brand/team/heiko.jpg";
import franziska from "@/assets/brand/team/franziska.jpg";
import ilka from "@/assets/brand/team/ilka.jpg";
import rene from "@/assets/brand/team/rene.jpg";
import yannik from "@/assets/brand/team/yannik.jpg";

// fal.ai Nano Banana 2 — generated once, committed (see scripts/generate-media + BRAND_SHOWCASE.md)
import genHero from "@/assets/generated/hero.jpg";
import genShowcase from "@/assets/generated/showcase.jpg";
import genFloristik from "@/assets/generated/floristik-hero.jpg";
import genGarten from "@/assets/generated/garten-hero.jpg";
import genPlants from "@/assets/generated/plants-band.jpg";
import sSpring from "@/assets/generated/season-fruehling.jpg";
import sSummer from "@/assets/generated/season-sommer.jpg";
import sAutumn from "@/assets/generated/season-herbst.jpg";
import sWinter from "@/assets/generated/season-winter.jpg";

/** Real brand photography, by category. */
export const HERO_IMG = hero;
export const LOGO = logo;

export const NURSERY: StaticImageData[] = [n1, n2, n3, n4, n5, n6];
export const FLORISTIK: StaticImageData[] = [f1, f2, f3, f4];
export const WEDDING: StaticImageData[] = [w1, w2, w3, w4, w5, w6];
export const FUNERAL: StaticImageData[] = [fu1, fu2, fu3, fu4];
export const PLANTS: StaticImageData[] = [p1, p2, p3, p4, p5];
export const GARTEN: StaticImageData[] = [g1, g2, g3, g4, g5];
export const GRAB: StaticImageData[] = [gr1, gr2, gr3];

/** Only confidently-matched 2024/2020 portraits; others fall back to initials. */
export const TEAM_PHOTOS: Record<string, StaticImageData> = {
  "Heiko Hamer": heiko,
  "Franziska Hamer": franziska,
  "Ilka Bähnke": ilka,
  "René Brüsewitz": rene,
  "Yannik Asmussen": yannik,
};

/** AI-personalized signature imagery (fal.ai Nano Banana 2). */
export const GEN = {
  hero: genHero,
  showcase: genShowcase,
  floristik: genFloristik,
  garten: genGarten,
  plants: genPlants,
} as const;

/** Seasonal stage imagery, in SEASONS order: Frühling, Sommer, Herbst, Winter. */
export const SEASON_IMG: StaticImageData[] = [sSpring, sSummer, sAutumn, sWinter];
