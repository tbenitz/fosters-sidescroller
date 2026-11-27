# Foster's World Maker
A gentle side-scrolling game for children with original AI-generated pixel sprites. Enter a theme, generate six categories with four choices each, select artwork, and play. No stock emoji substitutions. Automatic jump is enabled by default, no lives or timer, continuous ground, keyboard and touch controls. Save and load world JSON locally.

## Running
Serve this directory via HTTPS (GitHub Pages: Settings > Pages > Deploy from a branch > main / root) or localhost. The model downloads on first use. No API key. Automatic device selection uses the upstream Tessera runtime; CPU is available. Sprite generation runs in a module worker. Upstream model documentation: https://huggingface.co/cfahlgren1/tessera-small-onnx

## Credits and limitations
Tessera-small by Jagrat Patel, CC BY-NC 4.0. ONNX conversion and runtime by cfahlgren1/Slack Moji: https://huggingface.co/spaces/cfahlgren1/slack-moji. CLIP text encoder by OpenAI (MIT). Noncommercial use only. Model files are loaded from Hugging Face, not committed here. Model output is not moderated; adult supervision recommended. Live model inference and gameplay have not been browser-tested in this environment.
