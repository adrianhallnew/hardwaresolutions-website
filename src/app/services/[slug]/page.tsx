import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { galleryItems } from "@/content/gallery";
import { caseStudies } from "@/content/case-studies";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CaseStudyCard } from "@/components/testimonials/CaseStudyCard";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Hardware Solutions`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedGallery = galleryItems.filter((item) => item.category === slug).slice(0, 4);
  const relatedCaseStudy = caseStudies.find((cs) => cs.service === slug);

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-1">
          <h1 className="text-h1 font-semibold text-ink">{service.name}</h1>
          <p className="mt-4 max-w-[68ch] text-body-lg text-ink-muted">{service.description}</p>
        </div>
        <div className="relative aspect-[3/2] w-full flex-1 overflow-hidden rounded-lg">
          <Image
            src={service.heroImage}
            alt={`Placeholder image — ${service.name}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-h2 font-semibold text-ink">What&apos;s included</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {service.features.map((feature) => (
            <li key={feature} className="rounded-lg border border-border bg-surface p-4 text-body text-ink">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-h2 font-semibold text-ink">Typical use cases</h2>
        <ul className="mt-4 list-disc pl-5 text-body text-ink-muted">
          {service.useCases.map((useCase) => (
            <li key={useCase}>{useCase}</li>
          ))}
        </ul>
      </div>

      {relatedGallery.length > 0 && (
        <div className="mt-12">
          <h2 className="text-h2 font-semibold text-ink">Recent installs</h2>
          <div className="mt-4">
            <GalleryGrid items={relatedGallery} />
          </div>
        </div>
      )}

      {relatedCaseStudy && (
        <div className="mt-12">
          <h2 className="text-h2 font-semibold text-ink">Case study</h2>
          <div className="mt-4">
            <CaseStudyCard caseStudy={relatedCaseStudy} />
          </div>
          <Link
            href={`/testimonials#${relatedCaseStudy.id}`}
            className="mt-4 inline-block text-body text-ink hover:underline"
          >
            Read the full story →
          </Link>
        </div>
      )}

      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <h2 className="text-h2 font-semibold text-ink">Ready to talk about {service.name.toLowerCase()}?</h2>
        <Button href="/contact" size="lg">
          Get a quote
        </Button>
      </div>
    </div>
  );
}
