import { useState } from "react";

export function Controls() {
  const [value, setValue] = useState("LL-001");
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
        <h3 className="text-xs font-medium uppercase tracking-wider text-jw-charcoal">Buttons</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="rounded-card bg-jw-charcoal px-4 py-2 text-sm font-medium text-white transition-subtle hover:bg-jw-black">
            Primary action
          </button>
          <button className="rounded-card border border-jw-border bg-white px-4 py-2 text-sm font-medium text-jw-charcoal transition-subtle hover:bg-jw-surface-alt">
            Secondary
          </button>
          <button className="rounded-card px-3 py-1.5 text-sm text-jw-warm transition-subtle hover:bg-jw-surface-alt hover:text-jw-charcoal">
            Ghost
          </button>
          <button className="rounded-card border border-severity-error/30 bg-severity-error/5 px-4 py-2 text-sm font-medium text-severity-error transition-subtle hover:bg-severity-error/10">
            Destructive
          </button>
          <button
            disabled
            className="rounded-card bg-jw-charcoal px-4 py-2 text-sm font-medium text-white opacity-40"
          >
            Disabled
          </button>
        </div>
      </div>

      <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
        <h3 className="text-xs font-medium uppercase tracking-wider text-jw-charcoal">Pills</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill tone="info">3 new</Pill>
          <Pill tone="warn">Pending review</Pill>
          <Pill tone="error">Validation failed</Pill>
          <Pill tone="ok">Signed</Pill>
        </div>
        <h3 className="mt-6 text-xs font-medium uppercase tracking-wider text-jw-charcoal">Input</h3>
        <div className="mt-3 space-y-3">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full rounded-card border border-jw-border-strong bg-white px-3 py-2 text-sm text-jw-charcoal transition-subtle focus:border-jw-accent focus:outline-none focus:ring-4 focus:ring-jw-accent/15"
          />
          <input
            disabled
            placeholder="Disabled state"
            className="w-full rounded-card border border-jw-border bg-jw-surface-alt px-3 py-2 text-sm text-jw-warm"
          />
        </div>
      </div>
    </div>
  );
}

function Pill({ tone, children }: { tone: "info" | "warn" | "error" | "ok"; children: React.ReactNode }) {
  const dot = {
    info: "bg-severity-info",
    warn: "bg-severity-warn",
    error: "bg-severity-error",
    ok: "bg-severity-ok",
  }[tone];
  const text = {
    info: "text-severity-info",
    warn: "text-severity-warn",
    error: "text-severity-error",
    ok: "text-severity-ok",
  }[tone];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border border-jw-border bg-white px-2 py-0.5 text-xs font-medium ${text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  );
}
