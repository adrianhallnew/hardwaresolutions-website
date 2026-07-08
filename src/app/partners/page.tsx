import type { Metadata } from "next";
import { partners } from "@/content/partners";
import { PartnerLogoGrid } from "@/components/partners/PartnerLogoGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partners | Hardware Solutions",
  description: "Certified brand and manufacturer partnerships.",
};

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h1 className="text-h1 font-semibold text-ink">Partners</h1>
      <p className="mt-4 max-w-[68ch] text-body-lg text-ink-muted">
        [Placeholder — why these partnerships matter: quality and support guarantee, not
        just a logo wall.]
      </p>

      <div className="mt-8">
        <PartnerLogoGrid partners={partners} />
      </div>

      <div className="mt-16 flex justify-center">
        <Button href="/contact" size="lg">
          Get a quote
        </Button>
      </div>
    </div>
  );
}
