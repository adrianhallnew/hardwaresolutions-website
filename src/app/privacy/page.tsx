import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hardware Solutions",
  description: "How Hardware Solutions collects and uses your information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h1 className="text-h1 font-semibold text-ink">Privacy Policy</h1>
      <p className="mt-2 text-caption text-ink-muted">Last updated: [Date placeholder]</p>

      <div className="mt-8 max-w-[68ch] text-body text-ink">
        <p className="italic text-ink-muted">
          Placeholder legal text only — not legal advice. This page must be reviewed by
          qualified legal counsel before launch.
        </p>

        <h2 className="mt-8 text-h3 font-medium text-ink">What data we collect</h2>
        <p className="mt-2">
          When you submit the contact form, we collect your name, email address, phone
          number (optional), service of interest, and message.
        </p>

        <h2 className="mt-8 text-h3 font-medium text-ink">How we use it</h2>
        <p className="mt-2">
          We use this information only to respond to your enquiry. We do not use it for
          marketing and do not sell it to third parties. We do not use tracking cookies or
          analytics on this site.
        </p>

        <h2 className="mt-8 text-h3 font-medium text-ink">Governing jurisdiction</h2>
        <p className="mt-2">[Country/State placeholder]</p>

        <h2 className="mt-8 text-h3 font-medium text-ink">Contact</h2>
        <p className="mt-2">
          Questions about this policy can be sent to [email@placeholder.com].
        </p>
      </div>
    </div>
  );
}
