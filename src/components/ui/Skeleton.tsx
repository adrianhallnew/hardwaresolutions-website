export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={["animate-pulse bg-border rounded-xl", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}
