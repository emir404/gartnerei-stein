# Build decision log — Gärtnerei Hamer

Built **2026-06-27** by `/create`, then redesigned (**v2**) via the **ui-ux-pro-max** skill: "redesign all sections, modern vibe, better fonts, all content from the original site, add subpages."
Stack: **Next.js 16.2.9 · React 19 · Tailwind v4** (App Router, `src/app/`). German-first, token-driven, multi-page.

## Design system (ui-ux-pro-max)
- **Style:** Organic Biophilic — earthy greens, rounded organic shapes (16–34px radii), soft natural shadows, flowing blob accents, mesh backdrops. Kept our botanical palette (the skill's generic black+pink suggestion was off-brand for a nursery).
- **Fonts (better, modern):** **Lora** (editorial serif headings) + **Figtree** (modern humanist sans body), replacing Fraunces/Hanken — honors the skill's organic serif pick while modernizing the body. Self-hosted via `next/font/google`.
- **Icons:** one consistent SVG set (`components/ui/icons.tsx`) — no emoji.

## Information architecture (8 routes)
Multi-page, shared `Header` (active states via `usePathname`, transparent only on home, mobile sheet) + `Footer` in the root layout.

| Route | Page | Source content |
|---|---|---|
| `/` | Home | hero, values, services overview, **Jahreszeiten** signature band, heritage, testimonial, showcase, contact CTA |
| `/floristik` | Floristik | live intro copy + 5 categories + Hochzeits-Jubiläen table |
| `/gartencenter` | Gartencenter | "über 80 Jahre", sortiment, GaLaBau + Lieferservice |
| `/grabpflege` | Grabpflege | Neustadt/Altenkrempe, Dauer-/Saisonpflege, Bund deutscher Friedhofsgärtner |
| `/aufzucht` | Aufzucht | own-production intro + reused interactive Seasons band |
| `/ueber-uns` | Über uns | story since 1930, values, testimonial, team teaser |
| `/team` | Team & Karriere | accurate roster + in-memoriam + open positions |
| `/kontakt` | Kontakt | address, hours, contact, embedded map, Regio-Box |

Each subpage: `PageHeader` (eyebrow + h1 + intro + **breadcrumbs**) → content → shared `ContactCta`. Reusable blocks: `SplitImage`, `InfoGrid`, `Blob`, `PageHeader`, `Breadcrumbs`.

## Content provenance & a key correction
All copy pulled from the live site (profil, team, floristik, gartencenter, grabpflege, aufzucht, kontakt, aktuelles, jobs). **Correction:** the live team page lists **Hans Hamer (†27.10.2022)** and **Manuela Hamer (†06.04.2025)** as deceased; the v1 home draft had wrongly presented Hans as present staff. Fixed everywhere — **Heiko Hamer** (Inhaber, Gärtnermeister) is shown as today's lead; Hans & Manuela appear only in a respectful **"In stillem Gedenken"** block on `/team`. Only verifiable claims used (since 1930, 90+ years, named team, Bund membership, Hamerqualität).

## Accessibility (WCAG AA — skill's #1 CRITICAL rule)
Contrast was computed for every risky pair and corrected:
- `secondary` `#3E8E5E → #2F7350` (eyebrows/labels 3.8 → 5.4:1) and `muted` `#6E7468 → #5F6459` (on sage 4.2 → 5.3:1).
- Services tag recolored off honey-on-white (2.3:1 → secondary 5.4:1).
- Seasons band derives a per-season **on-color text token** (paper on dark seasons, ink on light) — white-on-honey (2.1:1) is gone; summer now 8.0:1.
- Visible focus rings, `aria-current` on nav, breadcrumbs, `role="tablist"` seasons, 44px touch targets (hamburger, mobile menu, tabs), `prefers-reduced-motion` honored (global + Reveal), alt text, `lang="de"`, per-page metadata + titles.

## Brand showcase
Unchanged from v1: token-driven "bunt" spectrum treatment over brand photography (graceful fallback while fal.ai model IDs are placeholders). Decision object + intended prompt remain in the prior log section / `BRAND_SHOWCASE.md`.

## Assets
8 of the brand's own photos pulled local to `src/assets/brand/` (hero, family, logo, nursery-1…5), served via `next/image` (static import → auto dims, blur-up, optimization). Map via Google Maps `output=embed` (no key, lazy-loaded).

## Verification
- `bun run build` ✓ clean — TypeScript passed, **all 8 routes prerendered static**, no errors.
- Token audit ✓ 0 hardcoded hex / font names in components; tokens compile into the CSS bundle; **no emoji** in source.
- Runtime smoke test ✓ (`bun run start`): correct h1s on every route, breadcrumbs, active nav state, Seasons band, embedded map, Regio-Box; **Lora + Figtree** confirmed on `<html>`; team shows Heiko active with Hans/Manuela only in memoriam.
- Preview: `bun run dev` → http://localhost:3000

## Remaining / TODO
- **fal.ai model IDs + SDK** still placeholders → showcase uses the CSS/photo fallback.
- Dark mode intentionally light-only (protects the warm botanical identity).
- Per-person team photos not available (initials avatars used); a redrawn SVG logo would beat the low-res PNG.
