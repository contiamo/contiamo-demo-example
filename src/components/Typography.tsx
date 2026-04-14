export function Typography() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
        <div className="text-2xs uppercase tracking-wide text-jw-warm">Serif · Playfair Display</div>
        <div className="mt-3 space-y-3">
          <div className="font-serif text-5xl text-jw-black">Aa 64</div>
          <div className="font-serif text-3xl text-jw-black">Editorial heading</div>
          <div className="font-serif text-xl text-jw-charcoal">Section title in serif</div>
        </div>
        <p className="mt-4 text-xs text-jw-warm">Use for hero numbers, stat blocks, and section titles. Pair with tabular-nums on any changing value.</p>
      </div>

      <div className="rounded-card border border-jw-border bg-white p-6 shadow-card">
        <div className="text-2xs uppercase tracking-wide text-jw-warm">Sans · Inter</div>
        <div className="mt-3 space-y-2">
          <div className="text-base text-jw-charcoal">Body copy sits on Inter at base size.</div>
          <div className="text-sm text-jw-charcoal">Small sans for dense UI regions.</div>
          <div className="text-xs text-jw-warm">Meta and secondary labels use warm grey.</div>
          <div className="text-2xs uppercase tracking-wide text-jw-warm">2xs uppercase label</div>
          <div className="font-mono text-xs text-jw-warm">mono · LL-001 · 4f9a2b</div>
        </div>
      </div>
    </div>
  );
}
