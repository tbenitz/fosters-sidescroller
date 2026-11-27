# Foster's World Maker

A creative pixel-art platformer for kids. Design a theme with the actual Slack Moji / Tessera-small ONNX model, generate one sprite per asset category, preview the world, and play. Retry a single object or undo its last redraw without touching the others. The separate practice mode uses original built-in pixel art, clearly labeled, and requires no AI download.

## Sprite workshop
The offline, rule-based theme planner separates the hero from the environment and creates six short editable object descriptions. It supports common settings and characters; unusual ideas may need manual descriptions. Tessera uses count=1 and the original 16 denoising steps. Old world files with four variations are still accepted, retaining their selected picture. Actual speed depends on the device and runtime.

## Adventure
- Ten selectable difficulty settings (default 3), with 9 to 2 lives, faster enemies, less frequent checkpoints, spikes from difficulty 5 and flying enemies from difficulty 7.
- Ten terrain families cycle through different widths, elevations and platform patterns as levels grow longer; generated gaps reach 210 pixels on hard settings.
- Double jump, rechargeable boost, roaming bounceable critters, collectible treasure, secret gems and rescue buddies.
- Falling costs a life; enemy collisions also cost a life from difficulty 4. Checkpoints retain collectibles. Extra-life pickups are available at difficulties 1–8. Completing a level restores one life up to the starting maximum. Running out of lives allows a fresh retry of the same level. No time limit.
- Optional easy-mode jump helper; manual platforming is the default.
- Keyboard and touch controls. Save and open AI worlds as JSON.

## Running
Serve over HTTPS (GitHub Pages, main / root) or localhost. First AI use downloads the model. Automatic, CPU and WebGPU options use the upstream runtime; no API key. See https://huggingface.co/cfahlgren1/tessera-small-onnx.

## Verification
Single-image worker and workshop JavaScript syntax checked, with seven example theme plans verified. Actual generation speed and sprite quality are not benchmarked. Adventure JavaScript syntax checked; geometry checked across 1,000 generated maps (100 levels at each difficulty); first ten levels at difficulties 1–3 completed in simulated input tests with the jump helper enabled. Simulated fall, enemy and spike damage, game-over and retry checks passed. Harder difficulties have not been fully playtested. These are not live browser rendering or model inference tests. Manual play and device-specific performance still need testing.

## Credits
Tessera-small by Jagrat Patel, CC BY-NC 4.0. ONNX conversion and browser runtime: https://huggingface.co/spaces/cfahlgren1/slack-moji. Noncommercial use only. Model files are fetched from Hugging Face. AI art is not moderated; adult supervision recommended.
