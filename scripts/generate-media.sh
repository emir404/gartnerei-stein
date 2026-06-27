#!/usr/bin/env bash
#
# Regenerate the signature brand showcase for Gärtnerei Stein.
# Model: fal.ai Nano Banana 2 (text-to-image) via the `genmedia` CLI.
# (Run `genmedia setup` once with your FAL_KEY.)
# Output is downloaded into src/assets/generated/ and committed.
#
# Usage:  bash scripts/generate-media.sh
#
set -euo pipefail
cd "$(dirname "$0")/.."
OUT="src/assets/generated"
mkdir -p "$OUT"

geturl() { node -e "const d=JSON.parse(require('fs').readFileSync(process.argv[1],'utf8'));process.stdout.write((d.result&&d.result.images&&d.result.images[0]&&d.result.images[0].url)||(d.images&&d.images[0]&&d.images[0].url)||'')" "$1"; }

gen_t2i() { # $1=outfile $2=aspect $3=prompt
  local j; j="$(mktemp)"
  genmedia run fal-ai/nano-banana-2 --prompt "$3" --aspect_ratio "$2" --resolution "2K" --output_format "jpeg" > "$j"
  local url; url="$(geturl "$j")"
  if [ -z "$url" ]; then echo "no image url in result:"; cat "$j"; return 1; fi
  curl -sL "$url" -o "$OUT/$1"; echo "✓ $OUT/$1"
}

# Signature showcase — nursery + florist + the 'Stein' (stone) concept,
# in the brand palette. Negative cues are baked into the prompt tail.
gen_t2i "showcase.jpg" "16:9" "An abundant hand-tied seasonal bouquet of garden flowers beside a few potted balcony plants, arranged on a weathered pale limestone and stone surface in a calm sunlit florist's workshop. Wide cinematic framing with generous calm negative space on the left for overlaid text. Editorial botanical still-life photography, soft shallow depth of field. Warm, fresh, grounded, family-run, seasonal mood. Color palette limited to deep garden green #2b5740, warm oat cream #f5f1e8, soft stone grey-beige #eae3d3, sage green #4f6b43 and a single peony-rose accent #c25a66. Warm natural North-German daylight, high detail, photoreal magazine quality. No text, no words, no letters, no watermark, no logo, no people, no hands, no faces."

echo "Done. Review $OUT, then commit."
