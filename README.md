# Foster's World Maker

A creative pixel-art platformer for kids. Design a theme with the actual Slack Moji / Tessera-small ONNX model, choose from four generated variants per asset category, preview the world, and play. The separate practice mode uses original built-in pixel art, clearly labeled, and requires no AI download.

## Adventure
- Progressively longer, seeded levels with gaps, stepped islands, moving platforms and springboards.
- Double jump, rechargeable boost, roaming bounceable critters, collectible treasure, secret gems and rescue buddies.
- Checkpoints retain collected items after falling; no lives or time limits.
- Optional easy-mode jump helper; manual platforming is the default.
- Keyboard and touch controls. Save and open AI worlds as JSON.

## Running
Serve over HTTPS (GitHub Pages, main / root) or localhost. First AI use downloads the model. Automatic, CPU and WebGPU options use the upstream runtime; no API key. See https://huggingface.co/cfahlgren1/tessera-small-onnx.

## Verification
JavaScript syntax checked; geometry checked across 100 generated levels; 12 consecutive levels completed in a simulated input test with the jump helper enabled. These are not live browser rendering or model inference tests. Manual play and device-specific performance still need testing.

## Credits
Tessera-small by Jagrat Patel, CC BY-NC 4.0. ONNX conversion and browser runtime: https://huggingface.co/spaces/cfahlgren1/slack-moji. Noncommercial use only. Model files are fetched from Hugging Face. AI art is not moderated; adult supervision recommended.
