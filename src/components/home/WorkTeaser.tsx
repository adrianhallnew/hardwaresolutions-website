import Link from "next/link";
import { galleryItems } from "@/content/gallery";
import { GalleryGrid } from "../gallery/GalleryGrid";

export function WorkTeaser() {
  const highlights = galleryItems.slice(0, 6);

  return (
    <section id="work" className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h2 className="text-h2 font-semibold text-ink">Our work</h2>
      <div className="mt-8">
        <GalleryGrid items={highlights} />
      </div>
      <Link href="/our-work" className="mt-6 inline-block text-body text-ink hover:underline">
        See all work →
      </Link>
    </section>
  );
}
