# Foster's World Maker

A creative pixel-art platformer for kids. Design a theme with the actual Slack Moji / Tessera-small ONNX model, generate one sprite per asset category, preview the world, and play. Retry a single object or undo its last redraw without touching the others. The separate practice mode uses original built-in pixel art, clearly labeled, and requires no AI download.

## Sprite workshop
The offline, rule-based theme planner separates the hero from the environment and creates nine short editable object descriptions (six base assets plus flight, throw and shield). It supports common settings and characters; unusual ideas may need manual descriptions. Tessera uses count=1 and the original 16 denoising steps. Old world files with four variations are still accepted, retaining their selected picture. Earlier six-asset saves remain playable with built-in power icons until the three new sprites are drawn. Actual speed depends on the device and runtime.

## V9: Live art studio and expanded maps
- The workshop streams actual intermediate 16×16 RGBA sprites from Tessera's onStep callback (16 steps), showing them on a large studio canvas and the active object card. Final images still use one generation per asset. An interrupted redraw restores the previous sprite.
- Fullscreen targets the entire document, including the theme editor and game. Moving between them preserves fullscreen. If browser fullscreen is unavailable, the site expands in-page instead; browser chrome may remain visible.
- Main courses now combine wider sections, elevated routes, switchback climbs, moving lift networks, upper arcades and lower stepping-stone routes, with additional collectible trails.
- Every level includes an optional portal to a separate treasure room. Press Down/S or Explore near a portal to enter or exit. The main route is still available, so a secret room is never required to finish. The route minimap shows platform locations, the player and the portal.
- V9 verification: 1,000 main-route geometry checks, all 30 assisted first-ten-level tests at difficulty 1–3, simulated portal entry, room traversal and return passed. Worker frame messaging was tested with a mocked 16-step Tessera callback; actual device inference and browser fullscreen have not been tested.

## Powers and fullscreen (V8)
- Full screen button uses the browser Fullscreen API with an expanded in-page fallback; exit with the button or Escape. The HUD, controls, retry and workshop navigation remain available. V9 extends this to the whole site.
- Flight: collect a themed feather/wings/jetpack for five seconds of flight fuel (up to ten); hold Jump while airborne to rise. Fuel is only used during assisted ascent.
- Throw: collect a themed shell/orb/ball for five throws (up to fifteen). Press Z or the touch Throw button to launch bouncing projectiles that knock out cartoon enemies.
- Shield: collect themed protection to absorb one damaging enemy or spike hit, not a fall. Powers reset at the next level or fresh retry; remaining powers survive checkpoint respawns.
- All three powers appear on the starting island, with additional pickups later. Each has an editable one-image Tessera prompt. Custom worlds can play once the six base assets are ready; any missing or outdated power art uses clearly disclosed built-in icons.

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
V8 syntax and six themed power prompt examples checked. Simulated tests passed for collecting all three powers, upward flight and fuel use, firing and hitting an enemy, shield absorption and subsequent unprotected damage. The first ten levels at difficulties 1–3 also passed again with assisted input. Native fullscreen behavior, visual appearance, and live AI inference have not been browser-tested.

Single-image worker and workshop JavaScript syntax checked, with seven example theme plans verified. Actual generation speed and sprite quality are not benchmarked. Adventure JavaScript syntax checked; geometry checked across 1,000 generated maps (100 levels at each difficulty); first ten levels at difficulties 1–3 completed in simulated input tests with the jump helper enabled. Simulated fall, enemy and spike damage, game-over and retry checks passed. Harder difficulties have not been fully playtested. These are not live browser rendering or model inference tests. Manual play and device-specific performance still need testing.

## Credits
Tessera-small by Jagrat Patel, CC BY-NC 4.0. ONNX conversion and browser runtime: https://huggingface.co/spaces/cfahlgren1/slack-moji. Noncommercial use only. Model files are fetched from Hugging Face. AI art is not moderated; adult supervision recommended.
