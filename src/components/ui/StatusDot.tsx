/**
 * design.md §3.7 — the site's one permitted use of the `signal` accent.
 * Static, non-interactive. Not yet wired to any page (§3.7's exhaustive
 * placement list needs real partner-tier / install-date content first).
 */
export function StatusDot({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-caption text-ink">
      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-signal" />
      {label}
    </span>
  );
}
