# Brand Showcase

The "specialize, don't template" step of `/create`. Every generated site gets **one signature visual** — a hero image, looping background, texture, or product render — chosen for *this* brand and generated from its tokens via fal.ai. This is what makes a build feel bespoke instead of a filled-in template.

> Placeholders: model IDs are left as `<MODEL_ID_*>` for the user to confirm (we use fal + **Nano Banana 2**). The SDK is assumed to be **`@fal-ai/client`** — confirm before first run. Nothing here calls the network until those are filled in.

---

## 1. Decision object

`/create` first *decides* what the showcase should be, before generating anything. Produce one object and record it in the decision log:

```jsonc
{
  "type": "text-to-image",        // text-to-image | image-to-image | image-to-video | upscale | none
  "placement": "hero-background", // hero-background | hero-inset | section-break | texture | favicon-mark
  "concept": "A single sunlit greenhouse interior, rows receding into soft focus", // one concrete idea, on-brand
  "constraints": {
    "aspect": "16:9",             // matches the placement slot
    "noText": true,               // ALWAYS true — no words baked into the image
    "palette": ["#1A73E8", "#F7F8FA", "#0B0C0E"], // pulled from tokens.color
    "mood": "warm, trustworthy",  // from tokens.imagery.mood / tokens.voice
    "avoid": ["text", "logos", "off-palette colors", "generic stock"] // from tokens.imagery.doNotUse
  },
  "rationale": "Why this visual fits the brand — goes in the decision log"
}
```

**Choosing `type`:**
- `text-to-image` — default; no usable brand imagery to start from.
- `image-to-image` — restyle an existing on-brand photo or the logo into the showcase.
- `image-to-video` — only when the placement is a hero/section that benefits from subtle motion; respect reduced-motion.
- `upscale` — a chosen source image is on-brand but too low-res.
- `none` — the brand already ships strong imagery in the wiki; skip generation and use it. **Picking `none` is a valid, good outcome** — don't generate for its own sake.

---

## 2. Model selection by output type

| `type` | fal model (placeholder) | Notes |
|---|---|---|
| text-to-image | `<MODEL_ID_TEXT_TO_IMAGE>` | Nano Banana 2 — primary path |
| image-to-image | `<MODEL_ID_IMAGE_TO_IMAGE>` | restyle/extend a source image |
| image-to-video | `<MODEL_ID_IMAGE_TO_VIDEO>` | short subtle loop from a still |
| upscale | `<MODEL_ID_UPSCALE>` | resolution only, no restyle |

Resolve via a single map so swapping IDs is one edit:

```ts
// lib/showcase/models.ts
export const FAL_MODELS = {
  textToImage: process.env.FAL_MODEL_TEXT_TO_IMAGE ?? "<MODEL_ID_TEXT_TO_IMAGE>",
  imageToImage: process.env.FAL_MODEL_IMAGE_TO_IMAGE ?? "<MODEL_ID_IMAGE_TO_IMAGE>",
  imageToVideo: process.env.FAL_MODEL_IMAGE_TO_VIDEO ?? "<MODEL_ID_IMAGE_TO_VIDEO>",
  upscale:      process.env.FAL_MODEL_UPSCALE ?? "<MODEL_ID_UPSCALE>",
} as const;
```

---

## 3. Prompt construction from tokens

Build the prompt deterministically from the decision object + tokens. Order: **subject/concept → composition → style → mood → palette → lighting/medium**, then a separate **negative prompt**.

```
PROMPT = [
  concept,                                   // "A single sunlit greenhouse interior, rows receding into soft focus"
  composition(placement, aspect),            // "wide cinematic framing, generous negative space top-left for overlaid copy"
  imagery.style,                             // "editorial photography, shallow depth of field"
  imagery.mood,                              // "warm, trustworthy, human"
  paletteClause(constraints.palette),        // "color palette limited to deep blue #1A73E8, off-white #F7F8FA, near-black #0B0C0E"
  "natural light, high detail, photoreal"
].join(", ")

NEGATIVE = [
  "text, words, letters, typography, captions, watermark, logo",  // enforces noText
  "off-palette colors, neon, oversaturated",
  ...imagery.doNotUse,
  "lowres, jpeg artifacts, distorted, extra limbs"
].join(", ")
```

Rules:
- **Never request text in the image.** `noText` is always on; "text/words/letters" always in the negative prompt. Copy is real HTML over the image, never baked in.
- **Composition leaves room** for the headline/CTA that will sit over it (per `placement`).
- **Palette is stated explicitly** with hex + plain-language names so output stays on-brand and themeable.
- Keep the **negative prompt** as the guardrail; don't pile brand color names there.

---

## 4. Quality gate (regenerate → fallback)

Generated asset must pass before it's placed:

1. **On-brand check** — dominant colors within tolerance of `palette`; mood matches; **no detectable text**; composition leaves the intended negative space.
2. **If it fails → regenerate once** with a tightened prompt (strengthen the failing axis, e.g. add the stray color to the negative prompt). **One** regenerate max.
3. **If it still fails → graceful fallback**, in order:
   1. Brand imagery from the wiki (`tokens.logo` / any captured photography), or
   2. A token-driven CSS treatment (gradient/mesh/texture from the palette) — **no image at all**, still on-brand.
4. Either way, **log** the outcome (passed / regenerated / fell back) with the reason.

A fallback is a clean result, not a failure — the site must look intentional with zero generated assets.

---

## 5. Cost caps & caching

- **Caps per build:** at most **2** generation calls total (1 initial + 1 regenerate) per showcase; at most **1** showcase per site unless the user asks for more. `image-to-video` counts double toward budget.
- **Cache by prompt hash:** key = `hash(modelId + prompt + negative + constraints)`. Store results under `.cache/showcase/<hash>.{json,png,mp4}` (gitignored). A re-run with identical inputs **reuses** the asset — no new spend.
- **Persist the generated asset** into `public/showcase/` and reference it locally; never hot-link fal output URLs from the live site.
- Respect a `FAL_MAX_SPEND` / dry-run env so a build can be exercised **without** spending (dry-run emits the decision + prompt and takes the CSS fallback).

---

## 6. fal client SDK sketch

Illustrative only — placeholders unresolved until confirmed.

```ts
// lib/showcase/generate.ts
import { fal } from "@fal-ai/client";           // CONFIRM package name
import { FAL_MODELS } from "./models";

fal.config({ credentials: process.env.FAL_KEY }); // CONFIRM auth/env convention

export async function generateShowcase(decision, prompt, negative, cache) {
  const key = cache.hash(decision.type, prompt, negative, decision.constraints);
  if (cache.has(key)) return cache.get(key);      // caching (§5)
  if (process.env.SHOWCASE_DRY_RUN) return null;  // -> CSS fallback (§4)

  const model = {
    "text-to-image": FAL_MODELS.textToImage,
    "image-to-image": FAL_MODELS.imageToImage,
    "image-to-video": FAL_MODELS.imageToVideo,
    "upscale": FAL_MODELS.upscale,
  }[decision.type];

  const result = await fal.subscribe(model, {     // CONFIRM call shape for Nano Banana 2
    input: {
      prompt,
      negative_prompt: negative,
      image_size: decision.constraints.aspect,    // CONFIRM param names per model
      // image_url: <source> for image-to-image / image-to-video / upscale
    },
  });

  const asset = await cache.persist(key, result); // -> public/showcase/<hash>.<ext>
  return asset;
}
```

> Everything marked **CONFIRM** — package name, `fal.config` auth, the `subscribe` input shape, and each `<MODEL_ID_*>` — is a placeholder for the user. Treat real model IDs / env keys as the only edits needed to go live.

---

## 7. Placement & logging

- Place the asset per `decision.placement`, themed against tokens (overlay scrims use `--background`/`--foreground`, not hardcoded black/white).
- For `image-to-video`, gate playback behind `prefers-reduced-motion: no-preference` and ship a still poster fallback.
- Record in the decision log: the **decision object**, the **exact prompt + negative prompt**, the model used, gate result (pass / regenerate / fallback), and final asset path.

See [`DESIGN_TOKENS.md`](./DESIGN_TOKENS.md) for the token shapes referenced here and [`CLAUDE.md`](./CLAUDE.md) for where this fits in the build.
