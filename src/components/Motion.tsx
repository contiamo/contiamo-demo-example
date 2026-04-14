import { useState } from "react";
import { Replay } from "./Section";

const DEMOS: { name: string; className: string; note: string }[] = [
  { name: "fade-in-up", className: "animate-fade-in-up", note: "Entrance, 6px rise, 0.35s. The default reveal." },
  { name: "scale-in", className: "animate-scale-in", note: "Modal / popover entrance, 0.3s." },
  { name: "slide-in", className: "animate-slide-in", note: "Toasts, drawer content. 16px slide + scale." },
  { name: "settle-in", className: "animate-settle-in", note: "Heavier entrance for large panels." },
  { name: "shake", className: "animate-shake", note: "Invalid input / rejected action." },
];

export function Motion() {
  const [key, setKey] = useState(0);
  return (
    <div className="space-y-6">
      <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xs font-medium uppercase tracking-wider text-jw-charcoal">Entrance animations</h3>
          <Replay onClick={() => setKey((k) => k + 1)} />
        </div>
        <div key={key} className="grid gap-3 md:grid-cols-2">
          {DEMOS.map((d) => (
            <div
              key={d.name}
              className={`rounded-card border border-jw-border bg-jw-surface p-4 ${d.className}`}
            >
              <div className="font-mono text-xs text-jw-accent">.{d.className}</div>
              <div className="mt-1 text-sm text-jw-charcoal">{d.name}</div>
              <div className="mt-1 text-xs text-jw-warm">{d.note}</div>
            </div>
          ))}
        </div>
      </div>

      <StaggerDemo />
      <LoopingDemos />
    </div>
  );
}

function StaggerDemo() {
  const [key, setKey] = useState(0);
  return (
    <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xs font-medium uppercase tracking-wider text-jw-charcoal">stagger-children</h3>
        <Replay onClick={() => setKey((k) => k + 1)} />
      </div>
      <ul key={key} className="stagger-children divide-y divide-jw-border-subtle">
        {[
          "LL-001 · Landpacht Schäferwiese",
          "EPC-001 · Errichtungsvertrag",
          "PPA-001 · Stromliefervertrag",
          "TSA-001 · Turbinenliefervertrag",
          "SVC-001 · Wartungsvertrag",
          "GUT-005 · Gutachtervertrag",
        ].map((row) => (
          <li key={row} className="flex items-center justify-between py-3">
            <span className="font-mono text-xs text-jw-warm">{row.split(" · ")[0]}</span>
            <span className="text-sm text-jw-charcoal">{row.split(" · ")[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LoopingDemos() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
        <div className="text-2xs uppercase tracking-wide text-jw-warm">animate-pulse-slow</div>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-severity-ok animate-pulse-slow" />
          <span className="text-sm text-jw-charcoal">Live connection</span>
        </div>
      </div>
      <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
        <div className="text-2xs uppercase tracking-wide text-jw-warm">animate-bar-pulse</div>
        <div className="mt-3 flex items-end gap-1 h-8">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className="w-1.5 rounded-sm bg-jw-accent animate-bar-pulse"
              style={{ height: `${30 + i * 10}%`, animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
      </div>
      <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
        <div className="text-2xs uppercase tracking-wide text-jw-warm">skeleton-shimmer</div>
        <div className="mt-3 space-y-2">
          <div className="h-3 w-3/4 rounded skeleton-shimmer" />
          <div className="h-3 w-1/2 rounded skeleton-shimmer" />
          <div className="h-3 w-2/3 rounded skeleton-shimmer" />
        </div>
      </div>
    </div>
  );
}
