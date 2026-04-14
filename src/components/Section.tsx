import type { ReactNode } from "react";

export function Section({
  id,
  title,
  blurb,
  children,
}: {
  id: string;
  title: string;
  blurb?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-jw-border-subtle py-14">
      <div className="mx-auto max-w-6xl px-8">
        <header className="mb-8">
          <div className="text-2xs uppercase tracking-[0.18em] text-jw-warm">{id}</div>
          <h2 className="mt-1 font-serif text-3xl text-jw-black">{title}</h2>
          {blurb && <p className="mt-2 max-w-2xl text-sm text-jw-warm">{blurb}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export function Replay({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-card border border-jw-border bg-white px-2.5 py-1 text-2xs uppercase tracking-wide text-jw-warm transition-subtle hover:border-jw-border-strong hover:text-jw-charcoal"
    >
      Replay
    </button>
  );
}
