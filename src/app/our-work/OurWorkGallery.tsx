"use client";

import { useState } from "react";
import { galleryItems } from "@/content/gallery";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { FilterChips, type GalleryCategory } from "@/components/gallery/FilterChips";

export function OurWorkGallery() {
  const [category, setCategory] = useState<GalleryCategory>("all");

  const filtered =
    category === "all" ? galleryItems : galleryItems.filter((item) => item.category === category);

  return (
    <>
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
    </>
  );
}
