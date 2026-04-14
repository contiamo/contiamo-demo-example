export function Surfaces() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-card border border-jw-border bg-white p-6 shadow-card transition-subtle hover:shadow-card-hover">
        <div className="text-2xs uppercase tracking-wide text-jw-warm">shadow-card</div>
        <div className="mt-2 text-sm text-jw-charcoal">Default resting card. Hover promotes to card-hover.</div>
      </div>
      <div className="rounded-card border border-jw-border bg-white p-6 shadow-card-hover">
        <div className="text-2xs uppercase tracking-wide text-jw-warm">shadow-card-hover</div>
        <div className="mt-2 text-sm text-jw-charcoal">Slightly lifted. Feedback state for cards.</div>
      </div>
      <div className="rounded-card border border-jw-border bg-white p-6 shadow-elevated">
        <div className="text-2xs uppercase tracking-wide text-jw-warm">shadow-elevated</div>
        <div className="mt-2 text-sm text-jw-charcoal">Reserved for modals, popovers, command palettes.</div>
      </div>
    </div>
  );
}
