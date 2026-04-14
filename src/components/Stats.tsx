import { useState } from "react";
import { Replay } from "./Section";

export function Stats() {
  const [key, setKey] = useState(0);
  return (
    <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-medium uppercase tracking-wider text-jw-charcoal">Stat block</h3>
        <Replay onClick={() => setKey((k) => k + 1)} />
      </div>
      <div key={key} className="mt-6 grid gap-8 stagger-children sm:grid-cols-3">
        <Stat value="64" label="contracts" />
        <Stat value="12" label="pending review" />
        <Stat value="€ 1.2M" label="annual rent" />
      </div>
      <p className="mt-6 text-xs text-jw-warm">
        Serif + tabular-nums is the default editorial treatment. If your demo drops Playfair, swap to font-sans font-semibold and keep the rest.
      </p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-5xl text-jw-black tabular-nums animate-stat-finalize">{value}</div>
      <div className="mt-1 text-2xs uppercase tracking-wide text-jw-warm">{label}</div>
    </div>
  );
}
