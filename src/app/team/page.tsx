import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactCta } from "@/components/site/ContactCta";
import { TEAM_PHOTOS, NURSERY } from "@/lib/images";
import { TEAM, IN_MEMORIAM, JOBS, CONTACT } from "@/lib/content";
import { Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Team & Karriere",
  description:
    "Das Team der Gärtnerei Hamer — Gärtnerinnen, Gärtner und Floristen aus Altenkrempe. Offene Stellen und Ausbildungsplätze.",
};

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
}

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Unser Team"
        title="Die Menschen hinter Hamerqualität."
        intro="Gärtnerinnen, Gärtner und Floristen, die ihr Handwerk lieben — und für Sie da sind."
        crumb="Team"
        image={NURSERY[2]}
        alt="Das Team der Gärtnerei Hamer"
      />
      <main>
        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {TEAM.map((m, i) => {
                const photo = TEAM_PHOTOS[m.name];
                return (
                  <Reveal key={m.name} delay={(i % 4) * 70}>
                    <div className="img-frame overflow-hidden rounded-2xl bg-card shadow-sm">
                      <div className="relative aspect-[4/5]">
                        {photo ? (
                          <Image
                            src={photo}
                            alt={m.name}
                            fill
                            sizes="(max-width: 640px) 50vw, 25vw"
                            className="object-cover object-top"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-secondary/10">
                            <span className="font-heading text-4xl text-secondary">
                              {initials(m.name)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <p className="text-lg font-semibold text-primary">{m.name}</p>
                        <p className="text-sm text-muted">{m.role}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="bg-surface py-16">
          <Container>
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <p className="label text-muted">In stillem Gedenken</p>
              <div className="mt-4 space-y-1">
                {IN_MEMORIAM.map((m) => (
                  <p key={m.name} className="text-lg font-semibold text-foreground">
                    {m.name} <span className="text-muted">· † {m.date}</span>
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="grain overflow-hidden rounded-[2rem] bg-primary-deep p-8 text-background sm:p-14">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <Eyebrow invert>Karriere</Eyebrow>
                  <h2 className="mt-4 text-balance text-3xl text-background sm:text-4xl">
                    Werden Sie Teil unseres Teams.
                  </h2>
                  <p className="mt-4 max-w-md text-background/80">{JOBS.intro}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <ButtonLink href={CONTACT.bewerbungHref} external variant="accent" size="lg">
                      Jetzt bewerben
                    </ButtonLink>
                    <ButtonLink href={CONTACT.emailHref} variant="onDark" size="lg">
                      E-Mail schreiben
                    </ButtonLink>
                  </div>
                </div>
                <ul className="grid gap-3">
                  {JOBS.positions.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 rounded-xl bg-background/10 px-4 py-3.5 text-background"
                    >
                      <span className="text-accent">
                        <Check size={18} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <ContactCta />
      </main>
    </>
  );
}
