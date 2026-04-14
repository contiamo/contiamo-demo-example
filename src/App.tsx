import { Section } from "./components/Section";
import { Wordmark } from "./components/Wordmark";
import { Palette } from "./components/Palette";
import { Typography } from "./components/Typography";
import { Surfaces } from "./components/Surfaces";
import { Controls } from "./components/Controls";
import { Stats } from "./components/Stats";
import { Motion } from "./components/Motion";
import { LiveProcessing } from "./components/LiveProcessing";
import { Overlays } from "./components/Overlays";

const NAV = [
  ["palette", "Palette"],
  ["typography", "Typography"],
  ["surfaces", "Surfaces"],
  ["controls", "Controls"],
  ["stats", "Stats"],
  ["motion", "Motion"],
  ["live", "Live processing"],
  ["overlays", "Overlays"],
] as const;

export default function App() {
  return (
    <div className="min-h-full">
      <div className="hidden h-8 items-center justify-between bg-jw-black px-6 text-2xs tracking-wider text-white/70 md:flex">
        <span className="text-white/50">contiamo</span>
        <div className="flex items-center">
          <span>Style kitchen sink</span>
          <span className="mx-3 text-white/20">|</span>
          <span className="text-white/50">v0.1.0</span>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b border-jw-border bg-jw-surface/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <Wordmark />
            <span className="rounded-full border border-jw-border bg-white px-2 py-0.5 text-2xs uppercase tracking-wide text-jw-warm">
              Style kitchen sink
            </span>
          </div>
          <nav className="hidden gap-1 md:flex scrollbar-none">
            {NAV.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-card px-2.5 py-1 text-xs text-jw-warm transition-subtle hover:bg-jw-surface-alt hover:text-jw-charcoal"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-8 pt-16 pb-10">
        <div className="text-2xs uppercase tracking-[0.18em] text-jw-warm">Contiamo · demo example</div>
        <h1 className="mt-2 font-serif text-5xl text-jw-black">The house style, in one page.</h1>
        <p className="mt-4 max-w-2xl text-base text-jw-warm">
          A reference surface for every primitive shared across the Contiamo demo apps. Click replay on any
          block to restart an animation. Copy the files from this repo into a new demo, swap the accent
          color, and you have a working baseline.
        </p>
      </div>

      <Section id="palette" title="Palette" blurb="Grayscale foundation is shared across all demos. Accent swaps per demo; severity tokens are optional.">
        <Palette />
      </Section>

      <Section id="typography" title="Typography" blurb="Inter for body and UI. Playfair Display for hero numbers, stats, and section titles. Mono for ids and hashes.">
        <Typography />
      </Section>

      <Section id="surfaces" title="Surfaces" blurb="Three shadow tiers. Canonical card radius is 6px. Hover promotes shadow tier, not color.">
        <Surfaces />
      </Section>

      <Section id="controls" title="Controls" blurb="Buttons, pills, and inputs compose from Tailwind utilities at the call site. No global button base class.">
        <Controls />
      </Section>

      <Section id="stats" title="Stats" blurb="Editorial numerals with stat-finalize entrance. Always tabular-nums on any value that can change.">
        <Stats />
      </Section>

      <Section id="motion" title="Motion" blurb="One easing curve: cubic-bezier(0.16, 1, 0.3, 1). Entrance, stagger, and looping animations. Replay to rewatch.">
        <Motion />
      </Section>

      <Section id="live" title="Live processing" blurb="The shared pattern for streaming work: scan-line overlay, staggered rows, skeleton tail for the next step.">
        <LiveProcessing />
      </Section>

      <Section id="overlays" title="Overlays" blurb="Modals use fade-in-up backdrop + scale-in dialog. Toasts slide in from the right with a severity-colored left border.">
        <Overlays />
      </Section>

      <footer className="border-t border-jw-border-subtle py-10">
        <div className="mx-auto max-w-6xl px-8 text-xs text-jw-warm">
          See <span className="font-mono">docs/contiamo-demo-style-guide.md</span> in the uka-spike repo for
          the written spec.
        </div>
      </footer>
    </div>
  );
}
