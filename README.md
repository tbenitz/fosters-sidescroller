# Foster's World Maker

A creative pixel-art platformer for kids. Design a theme with the actual Slack Moji / Tessera-small ONNX model, generate one sprite per asset category, preview the world, and play. Retry a single object or undo its last redraw without touching the others. The separate practice mode uses original built-in pixel art, clearly labeled, and requires no AI download.

## Sprite workshop
The offline, rule-based theme planner separates the hero from the environment and creates six short editable object descriptions. It supports common settings and characters; unusual ideas may need manual descriptions. Tessera uses count=1 and the original 16 denoising steps. Old world files with four variations are still accepted, retaining their selected picture. Actual speed depends on the device and runtime.

## Adventure
- Progressively longer, seeded levels with gaps, stepped islands, moving platforms and springboards.
- Double jump, rechargeable boost, roaming bounceable critters, collectible treasure, secret gems and rescue buddies.
- Checkpoints retain collected items after falling; no lives or time limits.
- Optional easy-mode jump helper; manual platforming is the default.
- Keyboard and touch controls. Save and open AI worlds as JSON.

## Running
Serve over HTTPS (GitHub Pages, main / root) or localhost. First AI use downloads the model. Automatic, CPU and WebGPU options use the upstream runtime; no API key. See https://huggingface.co/cfahlgren1/tessera-small-onnx.

## Verification
Single-image worker and workshop JavaScript syntax checked, with seven example theme plans verified. Actual generation speed and sprite quality are not benchmarked. Adventure JavaScript syntax checked; geometry checked across 100 generated levels; 12 consecutive levels completed in a simulated input test with the jump helper enabled. These are not live browser rendering or model inference tests. Manual play and device-specific performance still need testing.

## Credits
Tessera-small by Jagrat Patel, CC BY-NC 4.0. ONNX conversion and browser runtime: https://huggingface.co/spaces/cfahlgren1/slack-moji. Noncommercial use only. Model files are fetched from Hugging Face. AI art is not moderated; adult supervision recommended.
