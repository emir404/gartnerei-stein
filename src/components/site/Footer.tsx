import Link from "next/link";
import Image from "next/image";
import { LOGO } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { NAV, CONTACT, HOURS } from "@/lib/content";
import { Phone, Mail, MapPin, Instagram } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="grain bg-ink py-16 text-background/80">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.2fr] md:gap-8">
          <div>
            <div className="inline-flex rounded-xl bg-background p-3">
              <Image src={LOGO} alt="Gärtnerei Hamer" className="h-11 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Gärtnerei, Floristik, Gartencenter und Grabpflege in Altenkrempe —
              Familienbetrieb seit 1930.
            </p>
            <p className="mt-3 text-xs text-background/50">{CONTACT.association}</p>
            <a
              href={CONTACT.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 text-sm font-medium text-background transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram size={17} />
              {CONTACT.instagram}
            </a>
          </div>

          <div>
            <h2 className="label text-background/90">Bereiche</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-background/70 transition-colors hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/team" className="text-background/70 transition-colors hover:text-accent">
                  Team & Karriere
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="label text-background/90">Kontakt</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-background/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {CONTACT.street}, {CONTACT.zip} {CONTACT.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-accent">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-accent" />
                <a href={CONTACT.emailHref} className="break-all transition-colors hover:text-accent">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <dl className="mt-4 space-y-1 border-t border-background/15 pt-4 text-sm text-background/55">
              {HOURS.map((h) => (
                <div key={h.d} className="flex justify-between gap-3">
                  <dt>{h.d}</dt>
                  <dd>{h.h}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/15 pt-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {CONTACT.founded}–heute {CONTACT.legal}</p>
          <div className="flex flex-wrap gap-5">
            <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">Instagram</a>
            <a href={CONTACT.impressumHref} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">Impressum</a>
            <a href={CONTACT.datenschutzHref} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">Datenschutz</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
