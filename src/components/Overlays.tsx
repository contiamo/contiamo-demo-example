import { useState, useEffect } from "react";

type Toast = { id: number; tone: "info" | "warn" | "error" | "ok"; text: string };

const TONE_BORDER: Record<Toast["tone"], string> = {
  info: "border-l-severity-info",
  warn: "border-l-severity-warn",
  error: "border-l-severity-error",
  ok: "border-l-severity-ok",
};

export function Overlays() {
  const [open, setOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = (tone: Toast["tone"], text: string) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, tone, text }]);
  };

  useEffect(() => {
    if (!toasts.length) return;
    const t = setTimeout(() => setToasts((arr) => arr.slice(1)), 3500);
    return () => clearTimeout(t);
  }, [toasts]);

  return (
    <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
      <h3 className="text-xs font-medium uppercase tracking-wider text-jw-charcoal">Overlays</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setOpen(true)}
          className="rounded-card bg-jw-charcoal px-4 py-2 text-sm font-medium text-white transition-subtle hover:bg-jw-black"
        >
          Open modal
        </button>
        <button
          onClick={() => push("ok", "Contract persisted. LL-001 · 14 fields.")}
          className="rounded-card border border-jw-border bg-white px-4 py-2 text-sm font-medium text-jw-charcoal transition-subtle hover:bg-jw-surface-alt"
        >
          Toast · ok
        </button>
        <button
          onClick={() => push("warn", "Validation returned 2 warnings.")}
          className="rounded-card border border-jw-border bg-white px-4 py-2 text-sm font-medium text-jw-charcoal transition-subtle hover:bg-jw-surface-alt"
        >
          Toast · warn
        </button>
        <button
          onClick={() => push("error", "Extraction failed. Retry or escalate.")}
          className="rounded-card border border-jw-border bg-white px-4 py-2 text-sm font-medium text-jw-charcoal transition-subtle hover:bg-jw-surface-alt"
        >
          Toast · error
        </button>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fade-in-up"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-card bg-white p-6 shadow-elevated animate-scale-in"
          >
            <div className="text-2xs uppercase tracking-wide text-jw-warm">Confirm action</div>
            <h3 className="mt-1 font-serif text-2xl text-jw-black">Persist contract to wiki?</h3>
            <p className="mt-3 text-sm text-jw-warm">
              This writes atomically to DuckDB and the markdown wiki. The action can be rolled back from the
              run history within 24 hours.
            </p>
            <div className="mt-6 flex items-center justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded-card px-3 py-1.5 text-sm text-jw-warm transition-subtle hover:bg-jw-surface-alt hover:text-jw-charcoal"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  push("ok", "Contract persisted. LL-001.");
                }}
                className="rounded-card bg-jw-charcoal px-4 py-2 text-sm font-medium text-white transition-subtle hover:bg-jw-black"
              >
                Persist
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex w-80 flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto rounded-card border border-jw-border border-l-4 bg-white p-3 shadow-elevated animate-slide-in ${TONE_BORDER[t.tone]}`}
          >
            <div className="text-2xs uppercase tracking-wide text-jw-warm">{t.tone}</div>
            <div className="text-sm text-jw-charcoal">{t.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
