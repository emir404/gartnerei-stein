---
name: create
description: Build a complete, on-brand website from a ready wiki (company profile + design tokens) using PROMPTS.md as the build methodology. Token-driven theming, bespoke sections, a fal.ai brand showcase, and a decision log. Invoked by the /create command; use whenever turning a status:ready wiki into a site.
---

# Create — build a site from a wiki

You are turning one `status: ready` wiki into a finished website **in this repo** (`src/app/`). The company profile is your copy brief; the design tokens are your entire visual language. `PROMPTS.md` is the methodology and quality bar.

## Inputs
- A wiki at `wikis/<slug>.md` — frontmatter `status: ready`, a **Company Profile** (prose), and a **Design Tokens** JSON block.
- [`PROMPTS.md`](../../../PROMPTS.md) — curated build prompts + techniques (source of truth for *how* to build; never modify).
- [`DESIGN_TOKENS.md`](../../../DESIGN_TOKENS.md) — token schema, validation, derivation, tokens→CSS-variables.
- [`BRAND_SHOWCASE.md`](../../../BRAND_SHOWCASE.md) — the signature-visual decision + fal.ai spec.

## Outputs
- The website in `src/app/` (+ `src/components/`, `public/`).
- A decision log at `wikis/<slug>.build.md`.

## Non-negotiable principles
- **Token-driven, never hardcoded.** Every color/font/radius/shadow resolves to a CSS variable from the tokens. A grep of generated components for raw hex/`#` should come back essentially empty (outside the `:root` token block in `globals.css`).
- **Specialize, don't template.** Choose one signature visual/interaction for *this* brand (à la PROMPTS.md's spotlight / masked cards / scroll-reveal). No generic drop-in layout.
- **Editorial restraint.** The bar is Linear / Vercel / Stripe / Resend: tight type, generous space, minimal palette, purposeful motion. Lean on the `make-interfaces-feel-better` skill for polish.
- **Inspectable & logged.** Every meaningful decision (structure, copy, tokens, showcase, fallbacks) lands in the decision log.

---

## Pipeline

### 0. Read the Next.js 16 guides first
This is **not** the Next.js in your training data (see `AGENTS.md`). Before writing code, read the relevant guides under `node_modules/next/dist/docs/01-app/`. Known gotchas in **16.2.9**:
- `params` and `searchParams` are **Promises** → `const { x } = await params`.
- Fonts via `next/font` (the starter already wires `--font-geist-sans`); images via `next/image`.
- Metadata via the **Metadata API** (`export const metadata` / `generateMetadata`) — set real title/description/OG from the profile.
- Tailwind v4 via `@tailwindcss/postcss`; theme in CSS (`@theme` / `@theme inline`), no `tailwind.config`.
- Turbopack is default; lint no longer runs in `next build`.

### 1. Load & validate
Parse the wiki's tokens. Enforce the required fields in `DESIGN_TOKENS.md §2`. If any are missing/`null`, **stop** and tell the user to re-run `/wiki <site>` — do not invent values. Otherwise apply the **derivation rules (§3)** to every optional `null`, and note each derived value for the log.

### 2. Tokens → CSS variables
Rewrite `src/app/globals.css` per `DESIGN_TOKENS.md §4`: bare raw vars in `:root`, `@theme inline` for colors/fonts, a plain `@theme` block for radius/shadow/spacing/type-scale, dark-mode block. Load the heading/body fonts in `src/app/layout.tsx` via `next/font`, mapped to `--font-brand-heading` / `--font-brand-body` (replace the Geist defaults). Set real `metadata` (title/description/OG) and `<html lang>` from the profile. **After this step, no component should hardcode a brand value.**

### 3. Plan the page structure
From the Company Profile, choose sections and order them for an SMB marketing site — typically: nav, hero, offerings/services, proof (about / testimonials / stats), the brand showcase, contact/CTA, footer. Cut anything the profile can't substantiate. Most SMB sites are a strong single page; add routes only when the profile demands them (and remember `await params` on any dynamic route). **Write the chosen structure to the decision log before building.**

### 4. Write on-brand copy
Draft real copy from the profile — headline, subhead, section bodies, CTAs, microcopy — in the brand's `voice` (tone + formality). Specific, benefit-led, no lorem ipsum, no claims the profile doesn't support. Note notable copy choices for the log.

### 5. Build the sections
- **Primitives via shadcn/ui** (nav, buttons, inputs/forms, dialog, accordion), themed **entirely from tokens** — pass token utilities/variables; never restyle with raw values. Initialize shadcn if absent (`bunx shadcn@latest init`) and wire it to the token CSS variables.
- **Signature sections bespoke** (hero, feature/offering grid, showcase) — hand-built from tokens. Pick **one** signature device for the brand and execute it precisely (exact easing, stagger, spacing), in the spirit of PROMPTS.md. Reuse those techniques; don't copy their Vite/`App.tsx` scaffolding — this is App Router.
- Components live in `src/components/` (alias `@/components/...`); keep them server components unless they need interactivity (`"use client"`).
- Responsive + accessible: mobile-first, semantic landmarks, focus states, `prefers-reduced-motion` honored.

### 6. Brand showcase
Run `BRAND_SHOWCASE.md`: produce the **decision object**, construct the prompt from tokens (palette + mood + style + composition + negative prompt, **no text in image**), generate via `@fal-ai/client`, run the **quality gate** (regenerate once → graceful fallback to brand imagery or a token-driven CSS treatment). Persist the asset to `public/showcase/` and place it per `placement`. If model IDs/SDK are still placeholders or `SHOWCASE_DRY_RUN` is set, take the CSS fallback and say so. Log the decision, exact prompt, gate result, and asset path.

### 7. QA
- `bun run build` is clean (and `bun run dev` renders). Fix type/lint errors.
- **Token audit:** grep generated `src/components/**` and `src/app/**` for stray `#`/hardcoded colors, font names, px radii — they should resolve to tokens/utilities. Fix any leaks.
- Check responsive breakpoints, keyboard focus, reduced-motion, real metadata, no console errors.
- Run the `make-interfaces-feel-better` skill's checklist for final polish.

### 8. Write the decision log
Create `wikis/<slug>.build.md`: **page structure** (sections + why), **copy choices** (key headlines/positioning), **tokens used** (+ every derived value with its rule), **showcase** (decision object, exact prompt + negative prompt, model, gate result, asset path or fallback reason), and any **deviations/TODOs** (e.g. unresolved fal placeholders). This is the human-readable audit of the build.

---

## Guardrails
- Never modify `PROMPTS.md`.
- Never invent brand facts or colors — if it's not in the wiki and not derivable by rule, leave it out and note it.
- Keep the dependency surface lean; prefer tokens + Tailwind + a few shadcn primitives over heavy libraries.
- If the build can't proceed (failed validation, missing required tokens), stop with a clear message rather than guessing.
