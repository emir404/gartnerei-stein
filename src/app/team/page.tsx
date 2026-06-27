import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ContactCta } from "@/components/site/ContactCta";
import { TEAM, IN_MEMORIAM, JOBS, CONTACT } from "@/lib/content";
import { Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Team & Karriere",
  description:
    "Das Team der Gärtnerei Hamer — Gärtnerinnen, Gärtner und Floristen aus Altenkrempe. Offene Stellen und Ausbildungsplätze.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Unser Team"
        title="Die Menschen hinter Hamerqualität."
        intro="Gärtnerinnen, Gärtner und Floristen, die ihr Handwerk lieben — und für Sie da sind."
        crumb="Team"
      />
      <main>
        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((m, i) => (
                <Reveal key={m.name} delay={(i % 3) * 80}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:shadow-md">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-lg text-primary">
                      {initials(m.name)}
                    </span>
                    <div>
                      <p className="font-heading text-lg text-primary">{m.name}</p>
                      <p className="text-sm text-muted">{m.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-surface py-16">
          <Container>
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                In stillem Gedenken
              </p>
              <div className="mt-4 space-y-1">
                {IN_MEMORIAM.map((m) => (
                  <p key={m.name} className="font-heading text-lg text-foreground">
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
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    <span className="rule-accent" />
                    Karriere
                  </div>
                  <h2 className="mt-4 text-balance text-3xl text-background sm:text-4xl">
                    Werden Sie Teil unseres Teams.
                  </h2>
                  <p className="mt-4 max-w-md text-background/75">{JOBS.intro}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <ButtonLink
                      href={CONTACT.bewerbungHref}
                      external
                      variant="accent"
                      size="lg"
                    >
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
