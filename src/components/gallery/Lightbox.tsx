"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/content/types";

export function Lightbox({
  items,
  openIndex,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const open = openIndex !== null;
  const current = openIndex !== null ? items[openIndex] : null;

  function handleKeyDown(event: React.KeyboardEvent) {
    if (openIndex === null) return;
    if (event.key === "ArrowRight") {
      onNavigate((openIndex + 1) % items.length);
    } else if (event.key === "ArrowLeft") {
      onNavigate((openIndex - 1 + items.length) % items.length);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-graphite/90 data-[state=open]:animate-[lightbox-fade-in_var(--duration-medium)_var(--ease-out)] data-[state=closed]:animate-[lightbox-fade-out_var(--duration-medium-out)_var(--ease-in)]" />
        <Dialog.Content
          onKeyDown={handleKeyDown}
          aria-label={current ? `${current.caption}, image ${openIndex! + 1} of ${items.length}` : undefined}
          className="group fixed inset-0 z-50 flex flex-col items-center justify-center p-6"
        >
          <Dialog.Title className="sr-only">
            {current ? current.caption : "Image viewer"}
          </Dialog.Title>
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-inverse focus-visible:outline-offset-2"
            >
              <X aria-hidden="true" />
            </button>
          </Dialog.Close>

          {items.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => onNavigate((openIndex! - 1 + items.length) % items.length)}
                className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-ink-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-inverse focus-visible:outline-offset-2"
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => onNavigate((openIndex! + 1) % items.length)}
                className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-ink-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-inverse focus-visible:outline-offset-2"
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </>
          )}

          {current && (
            <div className="flex max-w-3xl flex-col items-center gap-3 group-data-[state=open]:animate-[lightbox-scale-in_var(--duration-medium)_var(--ease-out)] group-data-[state=closed]:animate-[lightbox-scale-out_var(--duration-medium-out)_var(--ease-in)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="(min-width: 1024px) 768px, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-caption text-ink-inverse">{current.caption}</p>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
