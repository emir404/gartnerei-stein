@AGENTS.md

# Automated SMB website build pipeline

This repo researches a small/medium business from its existing website, then auto-generates a fresh, on-brand replacement site. One repo per company; the generated site lives in `src/app/`.

## Workflow

```
/wiki [site]  →  wikis/<domain>.md  →  /create  →  site in src/app/ (+ decision log)
```

1. **`/wiki acme.com`** — researches the company and extracts its design system, writing `wikis/<domain>.md` (a Company Profile + a Design Tokens JSON block, frontmatter `status: ready`).
2. **`/create`** — builds the site from the most recent ready wiki (or a named one), themed entirely from its tokens, with a generated brand showcase. Stops and asks for `/wiki` first if no ready wiki exists.

## What's here
- **`PROMPTS.md`** — curated build prompts + methodology, the source of truth for *how* to build a site. **Do not modify** unless asked.
- **`.claude/commands/wiki.md`**, **`.claude/commands/create.md`** — the two commands above.
- **`.claude/skills/create/`** — the reusable build skill `/create` invokes; all build methodology lives here.
- **`DESIGN_TOKENS.md`** — the brand-token schema `/wiki` writes and `/create` consumes (validation, derivation, tokens→CSS-variables).
- **`BRAND_SHOWCASE.md`** — the signature-visual decisioning + fal.ai genmedia spec.

## Stack
Next.js 16 (App Router, `src/app/`, `@/*` → `src/*`) · React 19 · Tailwind v4 (CSS `@theme`, no config) · shadcn/ui (themed from tokens) · fal.ai for genmedia · **bun**. This Next.js has breaking changes — read `node_modules/next/dist/docs/` before writing code (see `@AGENTS.md`).

## Working principles
- **Token-driven, not hardcoded** — every brand value resolves to a CSS variable from the tokens.
- **Specialize, don't template** — one signature visual/interaction per brand, not a generic layout.
- **Editorial restraint** — the bar is Linear / Vercel / Stripe / Resend. (The `make-interfaces-feel-better` skill is installed for polish.)
- **Inspectable & logged** — `/create` writes a decision log (structure, copy, tokens, showcase) to `wikis/<domain>.build.md`.
