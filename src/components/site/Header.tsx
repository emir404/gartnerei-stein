"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LOGO } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { NAV, CONTACT } from "@/lib/content";
import { Phone, Mail, Instagram } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-soft",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/85 backdrop-blur-md"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-18">
        <Link href="/" aria-label="Gärtnerei Hamer — Startseite" className="shrink-0">
          <Image
            src={LOGO}
            alt="Gärtnerei Hamer"
            priority
            className={cn(
              "h-9 w-auto transition sm:h-10",
              transparent && "brightness-0 invert"
            )}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  transparent
                    ? "text-background/90 hover:text-background"
                    : active
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                )}
              >
                {n.label}
                {active && (
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full",
                      transparent ? "bg-background" : "bg-accent"
                    )}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={CONTACT.instagramHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              transparent
                ? "text-background hover:bg-background/15"
                : "text-primary hover:bg-surface"
            )}
          >
            <Instagram size={19} />
          </a>
          <ButtonLink
            href={CONTACT.emailHref}
            variant={transparent ? "onDark" : "outline"}
            size="sm"
            aria-label="E-Mail schreiben"
          >
            <Mail size={16} />
            E-Mail
          </ButtonLink>
          <ButtonLink
            href={CONTACT.phoneHref}
            variant={transparent ? "onDark" : "primary"}
            size="sm"
          >
            <Phone size={16} />
            {CONTACT.phoneDisplay}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
            transparent ? "text-background" : "text-primary"
          )}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>
            ) : (
              <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
            )}
          </svg>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden bg-background transition-[max-height] duration-300 ease-soft lg:hidden",
          open ? "max-h-[36rem] border-b border-border" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : undefined}
              className={cn(
                "rounded-xl px-3 py-3 text-base font-medium transition-colors",
                pathname === n.href ? "bg-surface text-primary" : "text-foreground hover:bg-surface"
              )}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/team" className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-surface">
            Team
          </Link>
          <div className="mt-2 flex gap-2">
            <ButtonLink href={CONTACT.phoneHref} variant="primary" size="md" className="flex-1">
              <Phone size={16} /> Anrufen
            </ButtonLink>
            <ButtonLink href={CONTACT.emailHref} variant="outline" size="md" className="flex-1">
              <Mail size={16} /> E-Mail
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
