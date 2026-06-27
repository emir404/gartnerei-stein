import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { GEN } from "@/lib/images";
import { CONTACT, HOURS } from "@/lib/content";
import { MapPin, Clock, Phone, Mail, Instagram } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "Gärtnerei Hamer, Milchstraße 23, 23730 Altenkrempe. Öffnungszeiten, Telefon, E-Mail und Anfahrt — direkt an der A1, Abfahrt 13.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="So erreichen Sie uns."
        intro="Rufen Sie an, schreiben Sie uns — oder kommen Sie direkt vorbei."
        crumb="Kontakt"
        image={GEN.garten}
        alt="Die Gärtnerei Hamer in Altenkrempe"
      />
      <main className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={CONTACT.phoneHref} variant="primary" size="lg">
                  <Phone size={18} /> Anrufen
                </ButtonLink>
                <ButtonLink href={CONTACT.emailHref} variant="outline" size="lg">
                  <Mail size={18} /> E-Mail
                </ButtonLink>
                <ButtonLink href={CONTACT.mapsHref} external variant="outline" size="lg">
                  <MapPin size={18} /> Route
                </ButtonLink>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/12 text-secondary">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-primary">Adresse</h2>
                    <p className="mt-2 text-foreground">
                      {CONTACT.name}
                      <br />
                      {CONTACT.street}
                      <br />
                      {CONTACT.zip} {CONTACT.city}
                    </p>
                    <p className="mt-1 text-sm text-muted">{CONTACT.directions}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/12 text-secondary">
                    <Clock size={20} />
                  </span>
                  <div className="w-full">
                    <h2 className="text-lg font-semibold text-primary">Öffnungszeiten</h2>
                    <dl className="mt-2 space-y-1.5 text-sm">
                      {HOURS.map((h) => (
                        <div key={h.d} className="flex justify-between gap-4">
                          <dt className="text-muted">{h.d}</dt>
                          <dd className="font-medium text-foreground">{h.h}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/12 text-secondary">
                    <Phone size={20} />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-primary">Direkt erreichbar</h2>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      <li className="flex items-center gap-2">
                        <Phone size={15} className="text-muted" />
                        <a href={CONTACT.phoneHref} className="text-foreground transition-colors hover:text-accent">
                          {CONTACT.phoneDisplay}
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <Mail size={15} className="text-muted" />
                        <a href={CONTACT.emailHref} className="break-all text-foreground transition-colors hover:text-accent">
                          {CONTACT.email}
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <Instagram size={15} className="text-muted" />
                        <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" className="text-foreground transition-colors hover:text-accent">
                          {CONTACT.instagram}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-foreground">Übrigens:</span> An
                unserer Regio-Box bekommen Sie rund um die Uhr frische Eier und
                Fleisch aus der Region.
              </p>
            </div>

            <Reveal>
              <iframe
                title="Standort der Gärtnerei Hamer auf der Karte"
                src="https://www.google.com/maps?q=Milchstra%C3%9Fe+23+23730+Altenkrempe&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="img-frame h-full min-h-[26rem] w-full rounded-[2rem]"
              />
            </Reveal>
          </div>
        </Container>
      </main>
    </>
  );
}
