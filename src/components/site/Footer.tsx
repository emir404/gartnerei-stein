import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/brand/logo.png";
import { Container } from "@/components/ui/Container";
import { NAV, CONTACT, HOURS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="grain bg-ink py-16 text-background/80">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.2fr] md:gap-8">
          <div>
            <div className="inline-flex rounded-xl bg-background p-3">
              <Image src={logo} alt="Gärtnerei Hamer" className="h-10 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Gärtnerei, Floristik, Gartencenter und Grabpflege in Altenkrempe —
              Familienbetrieb seit 1930.
            </p>
            <p className="mt-3 text-xs text-background/45">{CONTACT.association}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-background">
              Bereiche
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-background/70 transition-colors hover:text-accent"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/team"
                  className="text-background/70 transition-colors hover:text-accent"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-background">
              Kontakt
            </h2>
            <address className="mt-4 space-y-1.5 text-sm not-italic text-background/70">
              <p>{CONTACT.name}</p>
              <p>
                {CONTACT.street}, {CONTACT.zip} {CONTACT.city}
              </p>
              <p>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-accent">
                  {CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={CONTACT.emailHref}
                  className="break-all transition-colors hover:text-accent"
                >
                  {CONTACT.email}
                </a>
              </p>
            </address>
            <dl className="mt-4 space-y-1 text-sm text-background/55">
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
            <a
              href={CONTACT.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Instagram
            </a>
            <a
              href={CONTACT.impressumHref}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Impressum
            </a>
            <a
              href={CONTACT.datenschutzHref}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
