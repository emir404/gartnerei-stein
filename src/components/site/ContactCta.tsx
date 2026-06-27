import { ImageBand } from "@/components/ui/ImageBand";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GEN } from "@/lib/images";
import { CONTACT } from "@/lib/content";
import { Phone, Mail, MapPin } from "@/components/ui/icons";

export function ContactCta() {
  return (
    <ImageBand
      image={GEN.garten}
      alt="Besuchen Sie die Gärtnerei Hamer in Altenkrempe"
      minH="min-h-[62svh]"
    >
      <div className="max-w-2xl">
        <Eyebrow invert>Besuchen Sie uns</Eyebrow>
        <h2 className="mt-5 text-balance text-4xl text-background sm:text-5xl">
          Kommen Sie vorbei — wir freuen uns auf Sie.
        </h2>
        <p className="mt-4 text-lg text-background/85">
          {CONTACT.street}, {CONTACT.zip} {CONTACT.city} · Mo–Fr 8–18 Uhr, Sa
          8–12:30 Uhr
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={CONTACT.phoneHref} variant="accent" size="lg">
            <Phone size={18} />
            {CONTACT.phoneDisplay}
          </ButtonLink>
          <ButtonLink href={CONTACT.emailHref} variant="onDark" size="lg">
            <Mail size={18} />
            E-Mail
          </ButtonLink>
          <ButtonLink href={CONTACT.mapsHref} external variant="onDark" size="lg">
            <MapPin size={18} />
            Route
          </ButtonLink>
        </div>
      </div>
    </ImageBand>
  );
}
