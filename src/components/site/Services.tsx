import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GEN, GRAB } from "@/lib/images";
import { SERVICES } from "@/lib/content";
import { ArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const IMG: Record<string, StaticImageData> = {
  floristik: GEN.floristik,
  gartencenter: GEN.garten,
  grabpflege: GRAB[0],
  aufzucht: GEN.plants,
};
const SPANS = ["sm:col-span-4", "sm:col-span-2", "sm:col-span-2", "sm:col-span-4"];

export function Services() {
  return (
    <section id="leistungen" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Unsere Bereiche"
          title="Vier Wege, auf denen es bei Ihnen grünt und blüht."
          className="max-w-2xl"
        />
        <div className="mt-12 grid gap-4 sm:auto-rows-[300px] sm:grid-cols-6">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 80}
              className={cn("h-[260px] sm:h-auto", SPANS[i])}
            >
              <Link
                href={`/${s.slug}`}
                className="group img-frame relative block h-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={IMG[s.slug]}
                  alt={`${s.name} bei Gärtnerei Hamer`}
                  fill
                  sizes="(max-width: 640px) 100vw, 60vw"
                  className="object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
                <div className="text-shadow-soft absolute inset-x-0 bottom-0 p-6">
                  <span className="label text-background/80">{s.tag}</span>
                  <h3 className="mt-1.5 flex items-center gap-2 text-2xl text-background sm:text-3xl">
                    {s.name}
                    <ArrowRight
                      size={20}
                      className="-translate-x-2 opacity-0 transition-all duration-300 ease-soft group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
