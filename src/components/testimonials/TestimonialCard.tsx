import type { Testimonial } from "@/content/types";
import { services } from "@/content/services";
import { Badge } from "../ui/Badge";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const service = testimonial.service ? services.find((s) => s.slug === testimonial.service) : undefined;

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 shadow-card">
      <p className="text-body-lg text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
      <div>
        <p className="text-caption text-ink-muted">
          {testimonial.author}
          {testimonial.role ? `, ${testimonial.role}` : ""}
          {testimonial.company ? ` — ${testimonial.company}` : ""}
        </p>
        {service && <Badge className="mt-2">{service.name}</Badge>}
      </div>
    </div>
  );
}
