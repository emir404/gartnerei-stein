---
description: Research a company from its website and write an on-brand wiki + design tokens
argument-hint: [site]
allowed-tools: WebSearch, WebFetch, Read, Write, Bash(mkdir:*)
---

Research the company at **$ARGUMENTS** and write a wiki that `/create` can build from. Follow [`DESIGN_TOKENS.md`](../../DESIGN_TOKENS.md) for the token schema — it is the authority.

## 1. Normalize the input
From `$ARGUMENTS` derive:
- `domain` — strip scheme and `www.` (e.g. `https://www.acme.com/` → `acme.com`).
- `slug` — domain with dots → hyphens (e.g. `acme.com` → `acme-com`). The wiki path is `wikis/<slug>.md`.

## 2. Research the company (web)
Fetch the live site (homepage + about/services/contact) and search the web. Gather:
- What they do; services/offerings (with names).
- Positioning & differentiators; target audience.
- Location(s); contact details (phone, email, address, hours, socials).
- Tone of voice; notable facts / credentials / proof points.

## 3. Extract the design system from the live site
Inspect the rendered page and its CSS/assets and capture, **only what you can actually observe**:
- **Colors** — primary, secondary, accent, background, surface, text, muted, border, and the full `palette` (every distinct brand color as hex, most→least used).
- **Typography** — heading & body font families, fallbacks, source (google/adobe/cdn/system), weights, and the type scale.
- **Radius, spacing, shadow** — observed corner radii, spacing rhythm, elevation/shadows.
- **Logo** — URLs for primary / mark / wordmark / on-dark variants.
- **Imagery** — style & mood; things to avoid (`doNotUse`).
- **Voice** — tone descriptors, formality.

## 4. Write `wikis/<slug>.md`
Create the `wikis/` folder if needed (`mkdir -p wikis`). Write the file with this shape:

````markdown
---
site: <original $ARGUMENTS>
domain: <domain>
status: ready
generated: <YYYY-MM-DD>
---

# <Brand> — Wiki

## Company Profile
<clear prose: what they do, offerings, positioning, audience, location, contact, voice, notable facts>

## Design Tokens
```json
{ ...one object conforming exactly to DESIGN_TOKENS.md... }
```
````

## Rules
- **Never invent facts or colors.** If a value can't be found, set it to `null` in the JSON and say so in the prose — do not guess. `/create` fills `null`s via its derivation rules.
- Ensure the JSON validates against the schema (required fields present, valid hex, `palette` an array).
- Set `status: ready` only when both the profile and tokens are complete enough to build from.
- Report back: the wiki path, what you found, and anything notable you couldn't determine.
