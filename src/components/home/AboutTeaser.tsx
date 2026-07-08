import Link from "next/link";

export function AboutTeaser() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h2 className="text-h2 font-semibold text-ink">About Hardware Solutions</h2>
      <p className="mt-4 max-w-[68ch] text-body text-ink-muted">
        [Placeholder — company story/mission summary]. We install and support security,
        monitoring, and networking systems for homes and businesses.
      </p>
      <Link href="/about" className="mt-4 inline-block text-body text-ink hover:underline">
        Learn more →
      </Link>
    </section>
  );
}
