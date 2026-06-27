# Design Tokens

The brand-token contract between `/wiki` (writes it) and `/create` (consumes it). One wiki carries exactly one `tokens` object as a JSON block. Tokens are the **only** source of brand styling — generated markup themes off the CSS variables derived here, never off hardcoded values.

> Honesty rule: `/wiki` fills a field only when it actually found the value on the live site. Anything not found is `null` — never guessed. `/create` then fills `null`s deterministically via the [derivation rules](#3-fallback--derivation-rules) and logs every derived value.

---

## 1. Schema

```jsonc
{
  "brand": {
    "name": "Acme Co",              // required
    "domain": "acme.com",           // required
    "tagline": "Plumbing done right" // null if none
  },

  "color": {
    "primary":    "#1A73E8",        // required — main brand color
    "secondary":  "#34A853",        // null ok
    "accent":     "#FBBC05",        // null ok — high-chroma highlight / CTA
    "background": "#FFFFFF",        // required — page background
    "surface":    "#F7F8FA",        // null ok — cards/sections raised off bg
    "text":       "#0B0C0E",        // required — primary foreground
    "muted":      "#5F6571",        // null ok — secondary text
    "border":     "#E4E7EC",        // null ok — hairlines/dividers
    "palette":    ["#1A73E8", "#34A853", "#FBBC05", "#0B0C0E", "#F7F8FA"] // every distinct brand color sampled from the site, hex, most→least used
  },

  "typography": {
    "heading": {
      "family":   "Söhne",          // null -> falls back to body
      "fallback": "sans-serif",     // generic CSS fallback family
      "source":   "google",         // google | adobe | cdn | system | unknown
      "url":      null,             // @font-face/CDN url if source=cdn
      "weights":  [600, 700]
    },
    "body": {
      "family":   "Inter",          // required.family
      "fallback": "sans-serif",
      "source":   "google",
      "url":      null,
      "weights":  [400, 500]
    },
    "scale": { "base": "16px", "ratio": 1.25 } // null -> default {16px, 1.2}
  },

  "radius": { "sm": "6px", "md": "10px", "lg": "16px", "full": "9999px" }, // null -> defaults
  "spacing": { "base": "4px" },     // Tailwind v4 --spacing multiplier; null -> 4px
  "shadow": {
    "sm": "0 1px 2px rgba(11,12,14,0.05)",
    "md": "0 4px 12px rgba(11,12,14,0.08)",
    "lg": "0 12px 32px rgba(11,12,14,0.12)"
  },

  "logo": {
    "primary":  "https://acme.com/logo.svg", // null ok
    "mark":     null,   // icon/glyph only
    "wordmark": null,   // text-only lockup
    "onDark":   null    // variant for dark backgrounds
  },

  "imagery": {
    "style":    "editorial photography, natural light, shallow depth of field",
    "mood":     "warm, trustworthy, human",
    "doNotUse": ["text baked into images", "generic stock handshakes"]
  },

  "voice": {
    "tone":      ["confident", "warm", "plainspoken"], // required (>=1)
    "formality": "informal",   // formal | neutral | informal ; null -> neutral
    "notes":     "Short sentences. Second person. No jargon."
  }
}
```

---

## 2. Validation (required fields)

`/create` must refuse to build (and tell the user to re-run `/wiki`) if any of these are missing or `null`:

- `brand.name`, `brand.domain`
- `color.primary`, `color.background`, `color.text`
- `typography.body.family`
- `voice.tone` (at least one entry)

Everything else is optional and may be `null`. Colors must be valid hex; `palette` is an array (may be empty). Treat any malformed value as `null` and derive.

---

## 3. Fallback / derivation rules

Applied by `/create` for every `null`/missing optional field. **Deterministic** (no randomness) so a given wiki always builds the same site. Use CSS `color-mix(in oklab, …)` or an equivalent fixed computation; **log each derived value** in the decision log.

| Field | Derivation |
|---|---|
| `color.secondary` | Next most-used `palette` entry that isn't `primary`; else `primary`. |
| `color.accent` | Highest-chroma `palette` entry distinct from primary/secondary; else `primary`. |
| `color.surface` | `background` mixed **4%** toward `text`. |
| `color.muted` | `text` mixed **45%** toward `background`. |
| `color.border` | `text` mixed **88%** toward `background` (≈12% text). |
| `color.text` | (required) — if somehow absent, near-black/near-white by `background` luminance. |
| `typography.heading` | Falls back to `typography.body` (family, fallback, source). |
| `typography.*.weights` | Default `[400, 500, 600, 700]`, narrowed to what the family ships. |
| `typography.scale` | `{ base: "16px", ratio: 1.2 }` (minor third). |
| `radius` | `{ sm: 6px, md: 10px, lg: 16px, full: 9999px }`. |
| `spacing.base` | `4px`. |
| `shadow` | Restrained 3-step set, tinted with `text` at low alpha (sm .05 / md .08 / lg .12). |
| `logo.*` | If no logo at all, generate a wordmark from `brand.name` set in the heading font. |
| `imagery` | Derive `mood` from `voice.tone` + palette warmth; `style` defaults to "clean, on-brand, no embedded text". |
| `imagery.doNotUse` | Always includes `["text baked into images", "off-palette colors", "generic stock photos"]`. |
| `voice.formality` | `neutral`. |

Dark-mode variants (`--background`/`--foreground` under `prefers-color-scheme: dark`) are derived by inverting lightness in oklab while preserving hue, unless the brand is intrinsically dark.

---

## 4. Tokens → CSS variables

Mirror the repo's existing pattern in `src/app/globals.css`: **bare raw vars in `:root`** (these flip with color-scheme), exposed to Tailwind via **`@theme inline`** as namespaced theme tokens; **static structural tokens** (radius/shadow/spacing/type-scale) go in a plain `@theme` block. Tailwind v4 emits every `@theme` token as a real `:root` CSS variable and generates the matching utility, so everything stays inspectable and overridable.

> Naming discipline: a raw `:root` var and its theme token must have **different names** (e.g. `--primary` → `--color-primary`), exactly like the repo's `--background` → `--color-background`. Self-reference (`--color-primary: var(--color-primary)`) is circular — don't.

```css
@import "tailwindcss";

/* raw brand values — flip per color-scheme */
:root {
  --background: #FFFFFF;   /* color.background */
  --foreground: #0B0C0E;   /* color.text       */
  --surface:    #F7F8FA;
  --primary:    #1A73E8;
  --secondary:  #34A853;
  --accent:     #FBBC05;
  --muted:      #5F6571;
  --border:     #E4E7EC;
}

@theme inline {
  /* colors -> bg-*, text-*, border-* utilities, runtime-themeable */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface:    var(--surface);
  --color-primary:    var(--primary);
  --color-secondary:  var(--secondary);
  --color-accent:     var(--accent);
  --color-muted:      var(--muted);
  --color-border:     var(--border);

  /* fonts -> font-heading / font-body (next/font sets --font-brand-*) */
  --font-heading: var(--font-brand-heading);
  --font-body:    var(--font-brand-body);
  --font-sans:    var(--font-brand-body);
}

/* static structural tokens -> rounded-*, shadow-*, spacing, text-* */
@theme {
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --shadow-sm: 0 1px 2px rgba(11, 12, 14, 0.05);
  --shadow-md: 0 4px 12px rgba(11, 12, 14, 0.08);
  --shadow-lg: 0 12px 32px rgba(11, 12, 14, 0.12);

  --spacing: 4px;             /* typography.spacing.base */

  --text-base: 16px;          /* typography.scale.base */
  --text-lg:   20px;          /* base * ratio^1 */
  --text-xl:   25px;          /* base * ratio^2 ... */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0B0C0E;
    --foreground: #F7F8FA;
    /* + derived dark variants */
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-body), sans-serif;
}
```

**Fonts** load via `next/font` in `src/app/layout.tsx`, mapped to `--font-brand-heading` / `--font-brand-body` (mirroring the starter's `--font-geist-sans`). For `source: "google"` use `next/font/google`; for `cdn`/`adobe` use `next/font/local` or a stylesheet `<link>`; for `system` skip the import and set the family directly.

**Usage in markup (token-driven, never hardcoded):**

```tsx
<section className="bg-surface text-foreground">
  <h2 className="font-heading text-xl">…</h2>
  <button className="bg-primary text-background rounded-md shadow-md hover:bg-secondary">…</button>
</section>
```

Anything that can't be expressed as a utility uses the variable directly — `style={{ borderColor: "var(--border)" }}` — so there is still **no hardcoded brand value** anywhere downstream.

---

See [`BRAND_SHOWCASE.md`](./BRAND_SHOWCASE.md) for how these tokens drive generated imagery, and [`CLAUDE.md`](./CLAUDE.md) for the pipeline overview.
