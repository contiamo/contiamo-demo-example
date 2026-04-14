import { useState } from "react";
import { Replay } from "./Section";

const STEPS = [
  { label: "Preflight checks", detail: "deterministic · 6 rules passed" },
  { label: "Extraction", detail: "Sonnet · 1.2s · 14 fields" },
  { label: "Validation", detail: "Gemini · 0.8s · 0 issues" },
  { label: "Persist", detail: "wiki + duckdb · atomic write" },
];

export function LiveProcessing() {
  const [key, setKey] = useState(0);
  return (
    <div className="rounded-card border border-jw-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-jw-border-subtle px-6 py-4">
        <div>
          <div className="text-2xs uppercase tracking-wide text-jw-warm">Live processing panel</div>
          <div className="mt-0.5 font-serif text-xl text-jw-black">Running ingest · LL-001</div>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-jw-warm">
            <span className="h-1.5 w-1.5 rounded-full bg-severity-ok animate-pulse-slow" />
            connected
          </span>
          <Replay onClick={() => setKey((k) => k + 1)} />
        </div>
      </div>

      <div key={key} className="relative overflow-hidden">
        <div className="scan-line" />
        <ul className="stagger-children divide-y divide-jw-border-subtle">
          {STEPS.map((s, i) => (
            <li key={s.label} className="flex items-center gap-4 px-6 py-4">
              <span className="font-mono text-2xs text-jw-warm tabular-nums">0{i + 1}</span>
              <div className="flex-1">
                <div className="text-sm text-jw-charcoal">{s.label}</div>
                <div className="text-xs text-jw-warm">{s.detail}</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-severity-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-severity-ok" />
                ok
              </span>
            </li>
          ))}
          <li className="px-6 py-4">
            <div className="h-3 w-2/3 rounded skeleton-shimmer" />
            <div className="mt-2 h-3 w-1/3 rounded skeleton-shimmer" />
          </li>
        </ul>
      </div>
    </div>
  );
}
