import { CONTACT } from "@/lib/content";
import { Phone, Mail, MapPin } from "@/components/ui/icons";

/** Always-reachable Call / E-Mail / Route bar — mobile only. */
export function MobileContactBar() {
  return (
    <nav
      aria-label="Schnellkontakt"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
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
