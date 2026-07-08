import Link from "next/link";
import { faqItems } from "@/content/faq";
import { Accordion } from "../ui/Accordion";

export function FaqTeaser() {
  const topItems = faqItems.slice(0, 3);

  return (
    <section id="faq" className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h2 className="text-h2 font-semibold text-ink">Frequently asked questions</h2>
      <div className="mt-8 max-w-[720px]">
        <Accordion items={topItems} />
      </div>
      <Link href="/faq" className="mt-6 inline-block text-body text-ink hover:underline">
        See all FAQs →
      </Link>
    </section>
  );
}
