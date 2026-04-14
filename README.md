# contiamo-demo-example

A single-page kitchen sink that showcases the shared visual system used across
`jeldwen`, `uka-spike`, `gewobag-redaction-tool`, and `mold-gpt`. Point an
agent at this repo (and at
`../uka-spike/docs/contiamo-demo-style-guide.md`) when you scaffold a new
demo, and it should be able to copy the pieces it needs.

## Run

```sh
npm install
npm run dev
```

Opens on http://localhost:4321.

## Deployment

Pushing to `main` builds and publishes to GitHub Pages via
`.github/workflows/deploy.yml`. The live URL is shown in the deploy
environment on the repo's Actions tab.

Because the site lives under a repo path (`/contiamo-demo-example/`),
`vite.config.ts` sets `base` to match. If you fork or rename the repo,
update that `base` value.

## What's in here

One page, one section per primitive:

- Palette (grayscale foundation, accent, severity)
- Typography (Inter + Playfair Display + mono)
- Surfaces (card, card-hover, elevated)
- Controls (buttons, pills, inputs)
- Stats (editorial numerals with `stat-finalize`)
- Motion (entrance, stagger, looping, skeleton)
- Live processing (scan-line + stagger + skeleton tail)
- Overlays (modal + toast stack)

Every animated block has a replay button.

## What you copy into a new demo

At minimum:

- `tailwind.config.js` (full `theme.extend`)
- `src/index.css` (fonts, animations, utilities)
- `postcss.config.js`

Then pick and adapt individual components from `src/components/`.

## Accent swap for a new demo

The default accent is goldenrod (`#B8860B` / `#D4A843`). To change it for a
new demo:

1. Edit the `jw.accent` / `jw.accent-light` values in `tailwind.config.js`.
2. Edit the hardcoded accent inside three keyframe blocks in
   `src/index.css`: `number-flash`, `stat-finalize`, and the `scan-line`
   gradient. Tailwind tokens do not reach into keyframe `color:` properties.
