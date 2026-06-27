---
site: https://gaertnerei-hamer.de/
domain: gaertnerei-hamer.de
status: ready
generated: 2026-06-27
---

# Gärtnerei Hamer — Wiki

## Company Profile

**Gärtnerei Hamer** (legal: Gärtnerei Hamer GbR) is a family-run nursery, garden centre, and florist in **Altenkrempe**, on the Baltic coast of Schleswig-Holstein, Germany. It has been a family business **since 1930** and is now run across multiple generations. The brand's spirit is captured in its tagline **"Bei uns wird es bunt"** ("With us, it gets colorful") and the welcome line *"Alles grünt und blüht in unserer Gärtnerei"* ("Everything grows and blooms in our nursery"). The site's own meta description sums up the offer: *"Viele Neuheiten und alte Bekannte für Beet, Balkon und Fensterbank. Alles in Top Qualität aus eigener Produktion."* ("Many novelties and old favorites for the flower bed, balcony, and windowsill — all in top quality from our own production.")

**What they do / offerings** (German names preserved):
- **Floristik** — *Geschenkfloristik* (gift floristry), *Trauerfloristik* (funeral/sympathy floristry), *Hochzeitsfloristik* (wedding floristry), *Pflanzen & Blumen* (plants & cut flowers), *Accessoires*.
- **Gartencenter** — the garden centre, plus *Garten- & Landschaftsbau* (garden & landscape construction) and a *Lieferservice* (delivery service).
- **Grabpflege** — *Individuelle Grabpflege* (individual grave care) and *Dauergrabpflege* (permanent/ongoing grave care).
- **Aufzucht** — own seasonal plant cultivation (Frühling / Sommer / Herbst / Winter), a core differentiator.
- **Additional products** — *Sämereien* (seeds), *Pflanzenschutz- und Pflegemittel* (plant protection & care), *Tischdekorationen*, *Kränze und Dekorationen* (wreaths), *Gutscheine* (gift vouchers).

**Positioning & differentiators:** quality from **own production** ("aus eigener Produktion"), **kompetente Beratung** (expert, personal advice), **hochwertige Ware** (high-quality goods) at **günstige Preise** (fair prices), and the trust of a long-standing **Familienbetrieb**. The full-service range — grow, sell, arrange, deliver, and maintain (including graves) — is unusually complete for a local nursery.

**Target audience:** local homeowners and renters with gardens, terraces, balconies or windowsills; customers needing wedding or funeral/sympathy flowers; and families arranging grave care. Broadly, the site addresses *"Liebe Pflanzenfreunde"* ("dear plant lovers").

**Location & contact:**
- Address: **Milchstraße 23, 23730 Altenkrempe, Germany** (near Autobahn A1, exit 13 Neustadt/Pelzerhaken)
- Phone: **+49 (0) 4561 - 88 39** · Fax: +49 (0) 4561 - 39 56 11
- Email: **info@gaertnerei-hamer.de**
- Hours: **Mon–Fri 8:00–18:00, Sat 8:00–12:30, Sun closed**
- Instagram: **@gaertnerei_hamer**

**Tone of voice:** warm, personal, family-oriented and enthusiastic about plants. The German copy uses the polite **Sie** form but stays friendly and inviting (e.g. *"wir freuen uns, Ihnen hier einen kleinen Eindruck unseres großen Angebots…"*). It leans on heritage, hospitality, and hands-on expertise.

**Notable facts / proof points:** founded **1930**; a named, visible team (Heidi & Hans Hamer with florists Ilka Bähnke, Marika Klemens, René Brüsewitz, and the next generation incl. Heiko Hamer); runs an **apprenticeship program** (*Unsere Azubis*) and is actively hiring; and keeps an on-site **Regio-Box** with regional egg and meat vending machines — a charming, hyper-local touch.

### Design-system notes (observed on the live site)
The live site is a **Joomla + Helix Ultimate + SP Page Builder** build. Observed, with two honest caveats the rebuild should *fix*, not inherit:
1. **Links & primary buttons render in the stock Helix template blue `#0345BF`** — the theme's un-customized default preset. It clashes with the brand's hand-built green/gold content and is almost certainly unintended.
2. The page **declares** brand fonts (`Staatliches` display, `Open Sans` body, `Source Sans Pro` numerals) but **loads no webfont** (`<link>`/`@font-face`) — so live visitors actually see system fallbacks.

Observed brand cues: pale yellow-green section background `#FCFFCF`, forest-green feature blocks (`#11513F`, `#0E412E`), gold circular number badges (`#CDB100`, fully round), sharp-cornered cards, an occasional dramatic offset drop-shadow on white-framed photos, and large condensed display headlines over full-bleed nursery photography (hero `/images/2020/07/08/startbild2020.jpg`).

---

## Design Audit (refinement — these overrides are what `/create` builds from)

The live palette and type are *recognizably* "garden," but dated and a little muddy: a sickly pale-chartreuse field, a greenish mustard, a teal that fights the greens, the accidental stock blue, and Open Sans (generic) under an all-caps condensed display face that reads more "sports club" than "heritage nursery since 1930." Keeping the brand's **soul** — deep garden greens, a warm bloom accent, seasonal/colorful, family heritage — I refined it to an editorial botanical system that hits the Linear/Vercel/Stripe/Resend restraint bar. The original observed values are preserved in the table below; the JSON that follows is the refined set.

| Role | Live site (observed) | Refined | Why |
|---|---|---|---|
| Background | `#FCFFCF` pale chartreuse | `#FBF8F1` warm paper (+ `#ECEFE3` sage surface) | Warmer, premium, lets greens & photography breathe; the chartreuse read cheap. |
| Primary | `#11513F` grey-green | `#1B4D3B` deep evergreen | Same garden green, cleaner and more confident. |
| Secondary | `#356274` teal | `#3E8E5E` leaf green | The teal fought the greens; a fresh leaf green says "growth/bloom." |
| Accent | `#CDB100` greenish mustard | `#DCA13A` honey-marigold (+ `#C9603A` terracotta bloom) | Cleaner warm pop against deep green; on-message for "Bei uns wird es bunt." |
| Text | `#252525` | `#1E211C` warm near-black | Faint green-black warmth instead of flat grey. |
| Links / buttons | `#0345BF` stock blue | brand greens | Drops the accidental, off-brand template default entirely. |
| Heading font | Staatliches (condensed caps) | **Playfair Display** (editorial serif) | High-contrast magazine serif — the Botanical Editorial pass. |
| Body font | Open Sans | **Figtree** + **JetBrains Mono** labels | Clean modern sans body, mono uppercase micro-labels. |
| Radius | `0px` + fully-round badges | `6 / 10 / 18px` | Gentle warmth without losing crispness. |
| Shadow | `30px 30px 141px rgba(30,17,17,.5)` | soft green-tinted set | Restrained, editorial elevation instead of a harsh dark blur. |

Fonts will be **properly loaded** via `next/font` (fixing caveat 2), and the stock blue is removed (fixing caveat 1). The low-res `Hamerlogo268.png` is kept as a mark/favicon, but the on-site lockup is set as a crisp **Fraunces wordmark**.

## Design Tokens
```json
{
  "brand": {
    "name": "Gärtnerei Hamer",
    "domain": "gaertnerei-hamer.de",
    "tagline": "Bei uns wird es bunt"
  },
  "color": {
    "primary": "#1B4D3B",
    "secondary": "#2F7350",
    "accent": "#DCA13A",
    "background": "#FBF8F1",
    "surface": "#EEF1E6",
    "text": "#1E211C",
    "muted": "#5F6459",
    "border": "#E4E1D5",
    "palette": ["#FBF8F1", "#1B4D3B", "#EEF1E6", "#2F7350", "#DCA13A", "#1E211C", "#0F3328", "#5F6459", "#E4E1D5", "#C9603A", "#FFFFFF", "#16180F"]
  },
  "typography": {
    "heading": {
      "family": "Playfair Display",
      "fallback": "serif",
      "source": "google",
      "url": null,
      "weights": [400, 500, 600, 700]
    },
    "body": {
      "family": "Figtree",
      "fallback": "sans-serif",
      "source": "google",
      "url": null,
      "weights": [400, 500, 600, 700]
    },
    "scale": { "base": "16px", "ratio": 1.25 }
  },
  "radius": { "sm": "8px", "md": "14px", "lg": "22px", "xl": "34px", "full": "9999px" },
  "spacing": { "base": "4px" },
  "shadow": {
    "sm": "0 2px 8px rgba(20, 40, 30, 0.05)",
    "md": "0 14px 34px rgba(20, 40, 30, 0.08)",
    "lg": "0 32px 72px rgba(20, 40, 30, 0.14)"
  },
  "logo": {
    "primary": "https://gaertnerei-hamer.de/images/Hamerlogo268.png",
    "mark": "https://gaertnerei-hamer.de/images/Hamerlogo268.png",
    "wordmark": null,
    "onDark": null
  },
  "imagery": {
    "style": "Warm botanical photography — plants, seasonal blooms, hands in soil, the nursery and the family team; natural light; generous negative space; occasional white-framed photo with a soft drop-shadow.",
    "mood": "warm, natural, abundant, seasonal, crafted, heritage",
    "doNotUse": ["text baked into images", "the stock template-default blue #0345BF", "generic corporate stock photos", "cold or sterile tones", "harsh on-camera flash"]
  },
  "voice": {
    "tone": ["warm", "family-oriented", "welcoming", "enthusiastic", "down-to-earth"],
    "formality": "neutral",
    "notes": "Addresses customers warmly as 'Liebe Pflanzenfreunde'; uses the polite German Sie form; emphasizes family tradition since 1930, quality from own production, and friendly expert advice. Primary language: German (occasional English accents acceptable in an editorial rebuild)."
  }
}
```

### Token notes
- **Type pairing (Botanical Editorial pass):** **Playfair Display** (editorial serif) for headlines + **Figtree** (body) + **JetBrains Mono** (uppercase micro-labels). Google Fonts, self-hosted via `next/font`. (Earlier passes: Fraunces/Hanken, then Lora/Figtree.)
- **Contrast (WCAG AA):** `secondary` and `muted` were darkened (`#2F7350`, `#5F6459`) so labels/eyebrows hit ≥4.5:1 on paper and sage; the seasonal band derives an on-color text token (paper on dark seasons, ink on light) so white-on-honey never appears.
- **Surface vs background:** warm paper `#FBF8F1` page with pale-sage `#ECEFE3` panels for alternating bands; pure `#FFFFFF` for raised cards. Deep green `#1B4D3B` / near-black `#16180F` for inverted feature/footer bands.
- **Accent discipline:** honey `#DCA13A` is the primary accent (CTAs, highlights); terracotta `#C9603A` is a secondary "bloom" for occasional warmth/variety — used sparingly.
- **Radius & shadow** refined for gentle, editorial warmth (see audit). Dark mode is derived in `globals.css` (deep green-black field, paper text).
- **Source Sans Pro** (live-site numerals) is dropped; Hanken Grotesk tabular figures cover numerals.
