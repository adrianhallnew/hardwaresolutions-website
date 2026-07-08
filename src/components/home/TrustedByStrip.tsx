import Link from "next/link";
import { partners } from "@/content/partners";

export function TrustedByStrip() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 py-8 md:px-12">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {partners.map((partner) => (
          <div key={partner.id} className="group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={partner.logo} alt={partner.name} className="partner-logo-img h-8 w-auto" />
          </div>
        ))}
      </div>
      <Link href="/partners" className="text-caption text-ink-muted hover:text-ink hover:underline">
        View all partners →
      </Link>
    </div>
  );
}
