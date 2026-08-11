# shangyuchiang.github.io

Personal portfolio of Shang-Yu Chiang (江尚瑀) — AI researcher & lecturer.
Live at <https://shangyuchiang.github.io>.

Plain HTML/CSS/JS, no build step, no dependencies, no external requests.
**All text lives in [`js/data.js`](js/data.js)** (`en` and `zh` objects) — edit that
file to update content; layout never needs changing.

## Features

EN/ZH-TW toggle · light/dark theme · responsive · print / save-as-PDF ·
collapsible experience details · back-to-top · scroll-spy nav.

Motion: hero aurora + particle constellation canvas, gradient name, rotating-role
typewriter, scroll reveals, count-up stats, reading progress bar.

Content can never be hidden by the animation layer — hidden initial states are
gated behind `html.js`, with an IntersectionObserver fallback, a 3-second
failsafe re-armed on every render, full `prefers-reduced-motion` support, and a
print stylesheet that forces everything visible.

Stat numbers are computed from the résumé arrays at runtime, never hardcoded.

Local preview: `python -m http.server 8135` → <http://localhost:8135>
