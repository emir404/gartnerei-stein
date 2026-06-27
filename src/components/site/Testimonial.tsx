import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIAL } from "@/lib/content";

export function Testimonial() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <div className="font-heading text-6xl leading-none text-accent" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote className="-mt-2 text-balance font-heading text-2xl italic leading-snug text-foreground sm:text-3xl">
              {TESTIMONIAL.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-muted">
              {TESTIMONIAL.source}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
