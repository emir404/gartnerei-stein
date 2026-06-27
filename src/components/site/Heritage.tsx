import { ImageBand } from "@/components/ui/ImageBand";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NURSERY } from "@/lib/images";

export function Heritage() {
  return (
    <ImageBand
      image={NURSERY[0]}
      alt="Die Gärtnerei Hamer — gewachsen seit 1930"
      minH="min-h-[80svh]"
    >
      <div className="max-w-2xl">
        <Eyebrow invert>Seit 1930</Eyebrow>
        <p className="mt-6 font-heading text-7xl leading-none text-background sm:text-8xl">
          1930
        </p>
        <h2 className="mt-3 text-balance text-3xl text-background sm:text-5xl">
          Ein Familienbetrieb, gewachsen über Generationen.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-background/85">
          Was 1930 begann, führt heute Heiko Hamer mit einem eingespielten Team
          weiter — mit ehrlicher Handarbeit und Liebe zu allem, was wächst und
          blüht.
        </p>
        <ButtonLink href="/ueber-uns" variant="accent" size="lg" className="mt-8">
          Unsere Geschichte
        </ButtonLink>
      </div>
    </ImageBand>
  );
}
