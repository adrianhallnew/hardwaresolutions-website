"use client";

import { Badge } from "../ui/Badge";
import type { ServiceSlug } from "@/content/types";

export type GalleryCategory = "all" | ServiceSlug;

const options: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "security-systems", label: "Security" },
  { value: "monitoring-systems", label: "Monitoring" },
  { value: "networking-systems", label: "Networking" },
];

export function FilterChips({
  value,
  onChange,
}: {
  value: GalleryCategory;
  onChange: (category: GalleryCategory) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Filter by category"
      className="flex gap-2 overflow-x-auto pb-2"
    >
      {options.map((opt) => (
        <Badge
          key={opt.value}
          interactive
          selected={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </Badge>
      ))}
    </div>
  );
}
