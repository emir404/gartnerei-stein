"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/content";
import { Phone, Mail, MapPin } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/** Call / E-Mail / Route — mobile only, slides in after the hero scrolls away. */
export function MobileContactBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Schnellkontakt"
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md transition-transform duration-300 ease-soft lg:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3 text-xs font-semibold">
        <a
          href={CONTACT.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-primary transition-colors hover:bg-surface"
        >
          <Phone size={18} />
          Anrufen
        </a>
        <a
          href={CONTACT.emailHref}
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-primary transition-colors hover:bg-surface"
        >
          <Mail size={18} />
          E-Mail
        </a>
        <a
          href={CONTACT.mapsHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-primary transition-colors hover:bg-surface"
        >
          <MapPin size={18} />
          Route
        </a>
      </div>
    </nav>
  );
}
