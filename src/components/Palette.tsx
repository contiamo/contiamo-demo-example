const GROUPS: { name: string; swatches: { label: string; value: string; className: string; onLight?: boolean }[] }[] = [
  {
    name: "Grayscale foundation",
    swatches: [
      { label: "jw-black", value: "#1C1C1E", className: "bg-jw-black" },
      { label: "jw-charcoal", value: "#2D2D30", className: "bg-jw-charcoal" },
      { label: "jw-dark", value: "#3A3A3D", className: "bg-jw-dark" },
      { label: "jw-warm", value: "#4A4A4D", className: "bg-jw-warm" },
      { label: "jw-surface", value: "#F8F7F5", className: "bg-jw-surface", onLight: true },
      { label: "jw-surface-alt", value: "#F0EFEC", className: "bg-jw-surface-alt", onLight: true },
    ],
  },
  {
    name: "Accent (swap per demo)",
    swatches: [
      { label: "jw-accent", value: "#B8860B", className: "bg-jw-accent" },
      { label: "jw-accent-light", value: "#D4A843", className: "bg-jw-accent-light" },
    ],
  },
  {
    name: "Severity",
    swatches: [
      { label: "info", value: "#3B82F6", className: "bg-severity-info" },
      { label: "warn", value: "#D97706", className: "bg-severity-warn" },
      { label: "error", value: "#DC2626", className: "bg-severity-error" },
      { label: "ok", value: "#10B981", className: "bg-severity-ok" },
    ],
  },
];

export function Palette() {
  return (
    <div className="space-y-8">
      {GROUPS.map((g) => (
        <div key={g.name}>
          <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-jw-charcoal">{g.name}</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {g.swatches.map((s) => (
              <div
                key={s.label}
                className="overflow-hidden rounded-card border border-jw-border bg-white shadow-card"
              >
                <div className={`h-16 ${s.className} ${s.onLight ? "border-b border-jw-border-subtle" : ""}`} />
                <div className="p-2.5">
                  <div className="text-xs font-medium text-jw-charcoal">{s.label}</div>
                  <div className="font-mono text-2xs text-jw-warm">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
