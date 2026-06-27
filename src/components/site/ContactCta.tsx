import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CONTACT } from "@/lib/content";
import { Clock, Phone } from "@/components/ui/icons";

export function ContactCta() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mesh-warm relative isolate overflow-hidden rounded-[2rem] border border-border px-7 py-14 text-center sm:px-16 sm:py-20">
            <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              <span className="rule-accent" />
              Besuchen Sie uns
              <span className="rule-accent" />
            </div>
            <h2 className="mt-5 text-balance text-4xl sm:text-5xl">
              Kommen Sie vorbei — wir freuen uns auf Sie.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {CONTACT.street}, {CONTACT.zip} {CONTACT.city}. {CONTACT.directions}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href={CONTACT.phoneHref} variant="primary" size="lg">
                Anrufen · {CONTACT.phoneDisplay}
              </ButtonLink>
              <ButtonLink href="/kontakt" variant="outline" size="lg">
                Kontakt & Anfahrt
              </ButtonLink>
            </div>
            <div className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <Clock size={16} className="text-secondary" /> Mo–Fr 8–18 Uhr, Sa 8–12:30 Uhr
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone size={16} className="text-secondary" /> {CONTACT.phoneDisplay}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
