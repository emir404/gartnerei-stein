import Image from "next/image";
import { GEN } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HERO, CONTACT } from "@/lib/content";
import { Phone, Mail } from "@/components/ui/icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[96svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={GEN.hero}
          alt="Die blühende Gärtnerei Hamer in Altenkrempe"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="anim-ken-burns object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25" />

      <Container className="pb-16 pt-32 sm:pb-24">
        <div className="max-w-3xl">
          <div className="anim-rise" style={{ animationDelay: "0.1s" }}>
            <Eyebrow invert>{HERO.badge}</Eyebrow>
          </div>
          <h1
            className="anim-rise mt-5 text-balance text-6xl text-background sm:text-8xl lg:text-[6.5rem]"
            style={{ animationDelay: "0.2s" }}
          >
            {HERO.title}
          </h1>
          <p
            className="anim-rise mt-6 max-w-md text-lg leading-relaxed text-background/85 sm:text-xl"
            style={{ animationDelay: "0.34s" }}
          >
            {HERO.subtitle}
          </p>
          <div
            className="anim-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.46s" }}
          >
            <ButtonLink href={CONTACT.phoneHref} variant="accent" size="lg">
              <Phone size={18} />
              {CONTACT.phoneDisplay}
            </ButtonLink>
            <ButtonLink href={CONTACT.emailHref} variant="onDark" size="lg">
              <Mail size={18} />
              E-Mail
            </ButtonLink>
            <ButtonLink href="#leistungen" variant="onDark" size="lg">
              Sortiment
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
