import Link from "next/link";
import { testimonials } from "@/content/testimonials";
import { TestimonialCard } from "../testimonials/TestimonialCard";

export function TestimonialTeaser() {
  const featured = testimonials[0];
  if (!featured) return null;

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-2xl">
        <TestimonialCard testimonial={featured} />
      </div>
      <div className="mt-6 text-center">
        <Link href="/testimonials" className="text-body text-ink hover:underline">
          Read client stories →
        </Link>
      </div>
    </section>
  );
}
