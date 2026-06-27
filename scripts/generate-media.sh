#!/usr/bin/env bash
#
# Regenerate the AI-personalized signature imagery for Gärtnerei Hamer.
# Model: fal.ai Nano Banana 2 (text-to-image) + /edit (image-to-image).
# Runs via the `genmedia` CLI (run `genmedia setup` once with your FAL_KEY).
# Outputs are downloaded into src/assets/generated/ and committed.
#
# Usage:  bash scripts/generate-media.sh
#
set -euo pipefail
cd "$(dirname "$0")/.."
OUT="src/assets/generated"
mkdir -p "$OUT"
L="https://gaertnerei-hamer.de/images/2020/07/09"

# capture the result URL from genmedia JSON, then download it
geturl() { node -e "const d=JSON.parse(require('fs').readFileSync(process.argv[1],'utf8'));process.stdout.write((d.result&&d.result.images&&d.result.images[0]&&d.result.images[0].url)||'')" "$1"; }
gen_t2i() { # $1=outfile $2=aspect $3=prompt
  local j; j="$(mktemp)"
  genmedia run fal-ai/nano-banana-2 --prompt "$3" --aspect_ratio "$2" --resolution "2K" --output_format "jpeg" > "$j"
  curl -sL "$(geturl "$j")" -o "$OUT/$1"; echo "✓ $OUT/$1"
}
gen_edit() { # $1=outfile $2=source-url $3=prompt
  local j; j="$(mktemp)"
  genmedia run fal-ai/nano-banana-2/edit --image_urls "[\"$2\"]" --prompt "$3" --aspect_ratio "16:9" --resolution "2K" --output_format "jpeg" > "$j"
  curl -sL "$(geturl "$j")" -o "$OUT/$1"; echo "✓ $OUT/$1"
}

GRADE="Gently color-grade and refine this photograph into a premium editorial botanical image: warm natural light, soft shallow depth of field, clean elegant composition, refined palette of deep evergreen, honey gold and cream. Preserve the real subject and scene faithfully. No text, no words, no watermark, no logo."

# 1. signature hero (text-to-image)
gen_t2i "hero.jpg" "16:9" "Editorial botanical photograph of a sunlit garden nursery in late spring: rows of potted flowering plants, geraniums, primroses and fresh green foliage receding into soft focus, a few cut-flower bunches in the foreground. Warm natural morning light, shallow depth of field. Refined muted palette of deep evergreen, honey gold and warm cream. Generous empty space in the upper area for a headline overlay. Premium magazine quality, photoreal, high detail. No text, no words, no watermark, no logo, no people."

# 2. showcase 'bunt' (text-to-image)
gen_t2i "showcase.jpg" "16:9" "Lavish editorial close-up of an abundant seasonal flower arrangement bursting with color — dahlias, ranunculus, cosmos and fresh greenery, overflowing and joyful yet refined. Warm painterly natural light, soft depth of field. Palette anchored in deep evergreen, honey gold, soft terracotta and warm cream. Generous calm negative space on the right for text. Premium magazine photography. No text, no words, no watermark, no logo."

# 3-5. restyle real (non-people) photos (image-to-image /edit)
gen_edit "floristik-hero.jpg" "$L/floristik_01.jpg" "$GRADE"
gen_edit "garten-hero.jpg"    "$L/center_01.jpg"    "$GRADE"
gen_edit "plants-band.jpg"    "$L/pflanzen_01.jpg"  "$GRADE"

echo "Done. Review $OUT, then commit."
