import type { Metadata } from "next";
import { OurWorkGallery } from "./OurWorkGallery";

export const metadata: Metadata = {
  title: "Our Work | Hardware Solutions",
  description: "Completed security, monitoring, and networking installations.",
};

export default function OurWorkPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h1 className="text-h1 font-semibold text-ink">Our Work</h1>
      <p className="mt-4 max-w-[68ch] text-body-lg text-ink-muted">
        A look at completed installations across security, monitoring, and networking.
      </p>

      <OurWorkGallery />
    </div>
  );
}
