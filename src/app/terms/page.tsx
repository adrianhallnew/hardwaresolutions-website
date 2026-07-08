import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hardware Solutions",
  description: "Terms and conditions for using the Hardware Solutions website.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h1 className="text-h1 font-semibold text-ink">Terms & Conditions</h1>
      <p className="mt-2 text-caption text-ink-muted">Last updated: [Date placeholder]</p>

      <div className="mt-8 max-w-[68ch] text-body text-ink">
        <p className="italic text-ink-muted">
          Placeholder legal text only — not legal advice. This page must be reviewed by
          qualified legal counsel before launch.
        </p>

        <h2 className="mt-8 text-h3 font-medium text-ink">Use of this site</h2>
        <p className="mt-2">
          [Placeholder — standard acceptable-use terms for browsing this site and
          submitting the contact form.]
        </p>

        <h2 className="mt-8 text-h3 font-medium text-ink">Services</h2>
        <p className="mt-2">
          [Placeholder — terms specific to installation services will be confirmed
          separately as part of any quote or contract.]
        </p>

        <h2 className="mt-8 text-h3 font-medium text-ink">Governing jurisdiction</h2>
        <p className="mt-2">[Country/State placeholder]</p>

        <h2 className="mt-8 text-h3 font-medium text-ink">Contact</h2>
        <p className="mt-2">
          Questions about these terms can be sent to [email@placeholder.com].
        </p>
      </div>
    </div>
  );
}
