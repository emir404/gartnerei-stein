---
description: Build the website from a ready wiki — token-driven, on-brand, with a brand showcase
argument-hint: [wiki?]
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, WebFetch, Skill
---

Build the website from a ready wiki. Optional argument **$ARGUMENTS** targets a specific wiki (slug, domain, or path); otherwise use the most recent ready one.

## 1. Resolve the target wiki
- If `$ARGUMENTS` is given, resolve it to `wikis/<slug>.md` (accept a slug, a domain, or a full path).
- Otherwise, scan `wikis/*.md` and pick the **most recently modified** file whose frontmatter has `status: ready`.

## 2. Guard
If no wiki with `status: ready` exists (or the named one isn't ready), **stop** and tell the user:

> No ready wiki found. Run `/wiki <site>` first to research the company and generate its wiki.

Do not build anything in this case.

## 3. Build
When a ready wiki is found:
1. Load [`PROMPTS.md`](../../PROMPTS.md) (build methodology) and the resolved wiki (Company Profile + Design Tokens).
2. Invoke the **`create` skill** to run the full build pipeline (validate/derive tokens → tokens-to-CSS-variables → plan structure → write copy → build shadcn + bespoke sections → brand showcase via fal.ai → QA → decision log).

## 4. Output
- The website in `src/app/` (+ `src/components/`, `public/`).
- A decision log at `wikis/<slug>.build.md`.

Report back: which wiki was built, the page structure, key token/showcase decisions, and how to preview (`bun run dev`).
