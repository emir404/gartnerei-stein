import { Container } from "@/components/Container";
import { StemRule } from "@/components/Botanical";
import { Reveal } from "@/components/Reveal";

export function Lede() {
  return (
    <section className="border-t border-border">
      <Container className="py-16 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <div className="lg:pt-3">
            <p className="label text-secondary">Grußwort</p>
            <StemRule className="mt-5 hidden h-3 w-40 text-primary/50 lg:block" />
          </div>
          <Reveal>
            <p className="font-display text-[clamp(1.65rem,3.4vw,2.7rem)] leading-[1.18] tracking-[-0.01em]">
              Seit 1976 stehen wir mit beiden Händen in der Erde — gezogen,
              gepflegt und von Hand gebunden, alles aus unserem{" "}
              <em className="text-primary">Familienbetrieb.</em>
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              Was in Groß Steinrade heranwächst, finden Sie kurz darauf frisch im
              Blumenladen bei famila. Kurze Wege, ehrliche Qualität und ein Rat,
              der aus Erfahrung kommt — das ist uns seit jeher wichtiger als das
              schnelle Geschäft.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
