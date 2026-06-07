#!/usr/bin/env python3
"""Generate 3 hero image variations for ArnoMaquinas (21:9 ultrawide)."""

import os
import sys
from pathlib import Path
from datetime import datetime

ENV_PATH = Path.home() / ".claude" / ".env"
if ENV_PATH.exists():
    for line in ENV_PATH.read_text().splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            os.environ.setdefault(k, v.strip('"\''))

from google import genai
from google.genai import types

MODEL = os.environ.get("HERO_MODEL", "gemini-2.5-flash-image")
ASPECT = "21:9"
OUT_DIR = Path(__file__).parent.parent / "src" / "imports" / "hero"
OUT_DIR.mkdir(parents=True, exist_ok=True)

COMMON_RULES = (
    "Ultrawide cinematic 21:9 composition. Photorealistic, premium editorial "
    "interior photography (not stock photo style). Natural warm lighting from "
    "left-side window. CRITICAL COMPOSITION: the main subject (executive chair) "
    "must be positioned in the center-right and right third of the frame. The "
    "left ~35% of the frame must be a calm, low-detail environment (soft "
    "out-of-focus wall, soft window light, simple plant) — this area will be "
    "covered by a UI panel and should contain NO important detail or product. "
    "No text, no logos, no watermarks, no people. Shallow depth of field, "
    "crisp focus on the chair upholstery and stitching. Color palette: warm "
    "wood, deep navy/charcoal accents, soft cream walls. Mood: established "
    "1975 heritage brand, solidity, craftsmanship, premium corporate."
)

VARIATIONS = [
    {
        "slug": "01-presidente",
        "prompt": (
            "A single high-end executive chair in black/graphite full-grain "
            "leather, tall back, polished aluminum base, the protagonist of "
            "the scene, positioned center-right of frame. Behind it: a dark "
            "mahogany executive desk with closed leather portfolio and brass "
            "desk lamp, floor-to-ceiling bookshelf with leather-bound books "
            "softly out of focus, and a window with daytime city skyline "
            "bokeh on the far right. Style: classic presidential office, "
            "heritage corporate. " + COMMON_RULES
        ),
    },
    {
        "slug": "02-sala-reuniao",
        "prompt": (
            "Three matching executive conference chairs in tan/cognac leather "
            "with chrome bases, arranged around the near end of a long dark "
            "walnut conference table, chairs clustered in the center-right "
            "and right of the frame. Background: vertical slatted acoustic "
            "wood panel wall in warm oak tones with hidden cove lighting, a "
            "single pendant light casting cinematic warm glow on the table "
            "surface. Style: premium corporate boardroom. " + COMMON_RULES
        ),
    },
    {
        "slug": "03-ergonomica",
        "prompt": (
            "A modern ergonomic office chair with breathable black mesh back, "
            "adjustable armrests, lumbar support, and matte aluminum base, "
            "positioned center-right of frame. Behind it: a clean contemporary "
            "workstation with a light oak desk, a closed laptop, a ceramic "
            "coffee cup, and a tall monstera plant. Walls in soft cream with "
            "natural daylight from the left. Style: premium executive home "
            "office, modern minimalist. " + COMMON_RULES
        ),
    },
]


def main():
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("ERROR: GEMINI_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    client = genai.Client(api_key=api_key)
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    results = []

    for v in VARIATIONS:
        print(f"\n[{v['slug']}] generating...")
        try:
            resp = client.models.generate_content(
                model=MODEL,
                contents=v["prompt"],
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE"],
                    image_config=types.ImageConfig(aspect_ratio=ASPECT),
                ),
            )
        except Exception as e:
            print(f"  FAILED: {e}")
            results.append((v["slug"], None, str(e)))
            continue

        saved = None
        if resp.candidates and resp.candidates[0].content.parts:
            for part in resp.candidates[0].content.parts:
                if getattr(part, "inline_data", None) and part.inline_data.data:
                    fp = OUT_DIR / f"{v['slug']}-{ts}.png"
                    fp.write_bytes(part.inline_data.data)
                    saved = fp
                    print(f"  saved: {fp}")
                    break
        if not saved:
            print("  no image in response")
            results.append((v["slug"], None, "no image in response"))
        else:
            results.append((v["slug"], str(saved), None))

    print("\n--- summary ---")
    for slug, path, err in results:
        print(f"{slug}: {'OK ' + path if path else 'ERR ' + (err or '')}")


if __name__ == "__main__":
    main()
