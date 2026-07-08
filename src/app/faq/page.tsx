import type { Metadata } from "next";
import { faqItems } from "@/content/faq";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ | Hardware Solutions",
  description: "Frequently asked questions about Hardware Solutions installs.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h1 className="text-h1 font-semibold text-ink">Frequently Asked Questions</h1>

      <div className="mx-auto mt-8 max-w-[720px]">
        <Accordion items={faqItems} />
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <h2 className="text-h2 font-semibold text-ink">Still have questions?</h2>
        <Button href="/contact" size="lg">
          Get a quote
        </Button>
      </div>
    </div>
  );
}
