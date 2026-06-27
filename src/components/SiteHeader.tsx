"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { sections, primaryPhone, business } from "@/lib/site";

const navItems = sections.filter((s) => s.id !== "start");

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on resize to desktop
  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-border bg-background/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#start"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-2 font-display text-[1.35rem] leading-none tracking-tight"
        >
          <span>Gärtnerei Stein</span>
          <span aria-hidden className="hidden text-[0.95rem] italic text-muted sm:inline">
            seit {business.foundedYear}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="label text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={primaryPhone.phoneHref}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[0.9rem] font-semibold text-background shadow-sm transition-[background-color,box-shadow,transform] duration-200 hover:bg-primary-deep hover:shadow-md active:scale-[0.97]"
          >
            <PhoneGlyph />
            Anrufen
          </a>
        </nav>

        {/* mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={primaryPhone.phoneHref}
            aria-label="Gärtnerei anrufen"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background shadow-sm active:scale-95"
          >
            <PhoneGlyph />
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground active:scale-95"
          >
            <span className="relative block h-3.5 w-4.5">
              <span
                className={cn(
                  "absolute left-0 h-[1.6px] w-full bg-current transition-transform duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-[1.6px] w-full bg-current transition-opacity duration-200",
                  open ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[1.6px] w-full bg-current transition-transform duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border py-4 last:border-b-0"
            >
              <span className="font-display text-xl">{item.label}</span>
              <span className="label text-muted">{item.n}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function PhoneGlyph() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
