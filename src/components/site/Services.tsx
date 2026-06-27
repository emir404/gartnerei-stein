import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/content";
import { Flower, Leaf, Heart, Sprout, ArrowRight } from "@/components/ui/icons";

const ICONS = { floristik: Flower, gartencenter: Leaf, grabpflege: Heart, aufzucht: Sprout };

export function Services() {
  return (
    <section id="leistungen" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Unsere Bereiche"
          title="Vier Wege, auf denen es bei Ihnen grünt und blüht."
          intro="Von der ersten Aussaat bis zum fertig gebundenen Strauß — und alles dazwischen. Entdecken Sie unsere Bereiche."
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const Ico = ICONS[s.slug];
            return (
              <Reveal key={s.slug} delay={(i % 2) * 90}>
                <Link
                  href={`/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={IMAGES[s.image]}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/95 text-primary shadow-sm backdrop-blur-sm">
                      <Ico size={20} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-2xl text-primary">{s.name}</h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-secondary">
                      {s.tag}
                    </p>
                    <p className="mt-4 leading-relaxed text-muted">{s.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-secondary">
                      Mehr erfahren
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 ease-soft group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
