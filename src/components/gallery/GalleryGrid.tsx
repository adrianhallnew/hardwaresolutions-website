"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/content/types";
import { Lightbox } from "./Lightbox";
import { Button } from "../ui/Button";

export function GalleryGrid({
  items,
  totalCount,
  onClearFilter,
}: {
  items: GalleryItem[];
  totalCount?: number;
  onClearFilter?: () => void;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <p className="text-h3 font-medium text-ink">No photos in this category yet</p>
        {onClearFilter && (
          <Button variant="secondary" size="sm" onClick={onClearFilter}>
            Show all photos
          </Button>
        )}
      </div>
    );
  }

  return (
    <>
      {totalCount !== undefined && (
        <p aria-live="polite" className="sr-only">
          Showing {items.length} of {totalCount} photos
        </p>
      )}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`View image: ${item.caption}`}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card transition-shadow duration-fast ease-out hover:shadow-raised focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Lightbox
        items={items}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  );
}
