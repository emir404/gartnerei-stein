import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { CONTACT, HOURS } from "@/lib/content";

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Besuchen Sie uns"
              title="Mitten in Altenkrempe."
              intro="Am schönsten ist es persönlich: Kommen Sie vorbei, stöbern Sie und lassen Sie sich in Ruhe beraten."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={CONTACT.phoneHref} variant="primary" size="lg">
                Anrufen · {CONTACT.phoneDisplay}
              </ButtonLink>
              <ButtonLink
                href={CONTACT.mapsHref}
                external
                variant="outline"
                size="lg"
              >
                Route planen
              </ButtonLink>
            </div>
            <p className="mt-8 rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-foreground">Übrigens:</span> An
              unserer Regio-Box bekommen Sie rund um die Uhr frische Eier und
              Fleisch aus der Region.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:col-span-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                  Adresse
                </h3>
                <p className="mt-3 text-lg text-foreground">
                  {CONTACT.name}
                  <br />
                  {CONTACT.street}
                  <br />
                  {CONTACT.zip} {CONTACT.city}
                </p>
                <p className="mt-2 text-sm text-muted">{CONTACT.directions}</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                  Öffnungszeiten
                </h3>
                <dl className="mt-3 space-y-2 text-sm">
                  {HOURS.map((h) => (
                    <div key={h.d} className="flex justify-between gap-4">
                      <dt className="text-muted">{h.d}</dt>
                      <dd className="font-medium text-foreground">{h.h}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                  Kontakt
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a
                      href={CONTACT.phoneHref}
                      className="text-foreground transition-colors hover:text-accent"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={CONTACT.emailHref}
                      className="break-all text-foreground transition-colors hover:text-accent"
                    >
                      {CONTACT.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={CONTACT.instagramHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground transition-colors hover:text-accent"
                    >
                      Instagram {CONTACT.instagram}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
