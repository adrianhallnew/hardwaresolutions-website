import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About | Hardware Solutions",
  description: "Company story, mission, and credentials for Hardware Solutions.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h1 className="text-h1 font-semibold text-ink">About Hardware Solutions</h1>
      <p className="mt-4 max-w-[68ch] text-body-lg text-ink-muted">
        [Placeholder — mission statement]
      </p>

      <div className="mt-8 max-w-[68ch] text-body text-ink">
        <p>
          [Placeholder — company story copy. Replace with real facts pre-launch: history,
          founding, and what the company actually does day to day.]
        </p>
        <p className="mt-4">
          [Placeholder — what sets Hardware Solutions apart: experience, certifications,
          service area.]
        </p>
      </div>

      <div className="mt-8 border-t border-border pt-8">
        <p className="text-label font-medium uppercase tracking-[0.06em] text-ink-muted">
          Credentials
        </p>
        <p className="mt-2 text-body text-ink">
          [Certifications and service area — to be confirmed. No numeric stats (years in
          business, install counts) until real figures exist.]
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="/contact" size="lg">
          Get a quote
        </Button>
      </div>
    </div>
  );
}
