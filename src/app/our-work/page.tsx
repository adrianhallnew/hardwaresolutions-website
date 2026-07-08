"use client";

import { useState } from "react";
import { galleryItems } from "@/content/gallery";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { FilterChips, type GalleryCategory } from "@/components/gallery/FilterChips";

export default function OurWorkPage() {
  const [category, setCategory] = useState<GalleryCategory>("all");

  const filtered =
    category === "all" ? galleryItems : galleryItems.filter((item) => item.category === category);

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h1 className="text-h1 font-semibold text-ink">Our Work</h1>
      <p className="mt-4 max-w-[68ch] text-body-lg text-ink-muted">
        A look at completed installations across security, monitoring, and networking.
      </p>

      <div className="mt-8">
        <FilterChips value={category} onChange={setCategory} />
      </div>

      <div className="mt-6">
        <GalleryGrid
          items={filtered}
          totalCount={galleryItems.length}
          onClearFilter={category !== "all" ? () => setCategory("all") : undefined}
        />
      </div>
    </div>
  );
}
