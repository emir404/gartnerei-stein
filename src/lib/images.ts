import hero from "@/assets/brand/hero.jpg";
import family from "@/assets/brand/family.jpg";
import logo from "@/assets/brand/logo.png";
import n1 from "@/assets/brand/nursery-1.jpg";
import n2 from "@/assets/brand/nursery-2.jpg";
import n3 from "@/assets/brand/nursery-3.jpg";
import n4 from "@/assets/brand/nursery-4.jpg";
import n5 from "@/assets/brand/nursery-5.jpg";

/** Central registry so content can reference images by string key. */
export const IMAGES = {
  hero,
  family,
  logo,
  "nursery-1": n1,
  "nursery-2": n2,
  "nursery-3": n3,
  "nursery-4": n4,
  "nursery-5": n5,
} as const;

export type ImageKey = keyof typeof IMAGES;
