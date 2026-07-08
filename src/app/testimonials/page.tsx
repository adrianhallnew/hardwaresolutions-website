import type { Metadata } from "next";
import { testimonials } from "@/content/testimonials";
import { caseStudies } from "@/content/case-studies";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { CaseStudyCard } from "@/components/testimonials/CaseStudyCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Testimonials | Hardware Solutions",
  description: "Client quotes and case studies from Hardware Solutions installs.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h1 className="text-h1 font-semibold text-ink">Testimonials & Case Studies</h1>
      <p className="mt-4 max-w-[68ch] text-body-lg text-ink-muted">
        What clients say, and a closer look at a few completed projects.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-8">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Button href="/contact" size="lg">
          Get a quote
        </Button>
      </div>
    </div>
  );
}
