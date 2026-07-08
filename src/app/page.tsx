/**
 * TEMPORARY Phase 1 token-verification showcase.
 * Replaced by the real Home page in Phase 2 (implementation.md).
 */

const colors = [
  { name: "paper", cls: "bg-paper border border-border" },
  { name: "graphite", cls: "bg-graphite" },
  { name: "surface", cls: "bg-surface border border-border" },
  { name: "surface-dark", cls: "bg-surface-dark" },
  { name: "success", cls: "bg-success" },
  { name: "error", cls: "bg-error" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-12 p-8 bg-paper text-ink">
      <section>
        <h2 className="text-h2 font-semibold mb-4">Colors</h2>
        <div className="flex flex-wrap gap-4">
          {colors.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <div className={`h-16 w-16 rounded-lg ${c.cls}`} />
              <span className="text-caption text-ink-muted">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-h2 font-semibold mb-4">Type scale</h2>
        <div className="flex flex-col gap-3">
          <p className="text-hero font-semibold">Hero display</p>
          <p className="text-h1 font-semibold">Page title h1</p>
          <p className="text-h2 font-semibold">Section heading h2</p>
          <p className="text-h3 font-medium">Card heading h3</p>
          <p className="text-body-lg">Body large — hero subhead, intro paragraphs</p>
          <p className="text-body">Body — default paragraph text</p>
          <p className="text-caption text-ink-muted">Caption / metadata</p>
          <p className="text-label font-medium uppercase tracking-[0.06em] text-ink-muted">
            Label / eyebrow
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-h2 font-semibold mb-4">Shadows</h2>
        <div className="flex gap-6">
          <div className="h-20 w-20 rounded-lg bg-surface shadow-card" />
          <div className="h-20 w-20 rounded-lg bg-surface shadow-raised" />
          <div className="h-20 w-20 rounded-lg bg-surface shadow-modal" />
        </div>
      </section>

      <section className="bg-graphite text-ink-inverse p-6 rounded-lg">
        <h2 className="text-h2 font-semibold mb-2">Dark section (graphite)</h2>
        <p className="text-body">Ink-inverse text on graphite background.</p>
        <p className="text-caption text-ink-muted-inverse mt-1">Muted ink-inverse caption.</p>
      </section>

      <section>
        <h2 className="text-h2 font-semibold mb-4">Radius / motion sanity check</h2>
        <button className="rounded-md bg-ink hover:bg-ink/90 px-5 py-2 text-body text-paper transition-transform duration-press ease-out active:scale-[0.97]">
          Primary button
        </button>
      </section>
    </main>
  );
}
