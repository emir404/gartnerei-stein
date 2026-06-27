import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Services } from "@/components/site/Services";
import { Heritage } from "@/components/site/Heritage";
import { GallerySection } from "@/components/site/GallerySection";
import { Seasons } from "@/components/site/Seasons";
import { Showcase } from "@/components/site/Showcase";
import { Testimonial } from "@/components/site/Testimonial";
import { ContactCta } from "@/components/site/ContactCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <Heritage />
      <GallerySection />
      <Seasons />
      <Showcase />
      <Testimonial />
      <ContactCta />
    </main>
  );
}
