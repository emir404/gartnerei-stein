import Image from "next/image";
import { Container } from "@/components/Container";
import { Leaf } from "@/components/Botanical";
import { sections, standorte, business } from "@/lib/site";
import logo from "@/assets/brand/logo.png";

const navItems = sections.filter((s) => s.id !== "start");

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.2fr] md:gap-12">
          <div>
            <Image src={logo} alt="Gärtnerei Stein" className="h-16 w-16" />
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
              <Leaf className="size-4 text-primary" />
              Familienbetrieb seit {business.foundedYear}
            </p>
            <p className="mt-1 text-sm text-muted">
              Lübeck · Groß Steinrade
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="label text-secondary">Entdecken</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label text-secondary">Standorte</p>
            <ul className="mt-4 space-y-4">
              {standorte.map((s) => (
                <li key={s.key} className="text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-foreground">
                    {s.kind}
                  </span>
                  <br />
                  {s.street}, {s.zipCity}
                  <br />
                  <a
                    href={s.phoneHref}
                    className="nums transition-colors hover:text-foreground"
                  >
                    {s.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Gärtnerei Stein GmbH · Lübeck
          </p>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="label transition-colors hover:text-foreground"
          >
            Facebook
          </a>
        </div>
      </Container>
    </footer>
  );
}
