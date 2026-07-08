import Image from "next/image";
import type { CaseStudy } from "@/content/types";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div
      id={caseStudy.id}
      className="flex flex-col gap-6 rounded-lg border border-border bg-surface p-6 shadow-card md:flex-row"
    >
      {caseStudy.image && (
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg md:w-48">
          <Image src={caseStudy.image} alt={caseStudy.title} fill className="object-cover" loading="lazy" />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-label font-medium uppercase tracking-[0.06em] text-ink-muted">
            {caseStudy.client}
          </p>
          <h3 className="text-h3 font-medium text-ink">{caseStudy.title}</h3>
        </div>
        <div>
          <p className="text-label font-medium uppercase tracking-[0.06em] text-ink-muted">Challenge</p>
          <p className="text-body text-ink">{caseStudy.challenge}</p>
        </div>
        <div>
          <p className="text-label font-medium uppercase tracking-[0.06em] text-ink-muted">Solution</p>
          <p className="text-body text-ink">{caseStudy.solution}</p>
        </div>
        <div>
          <p className="text-label font-medium uppercase tracking-[0.06em] text-ink-muted">Result</p>
          <p className="text-body text-ink">{caseStudy.result}</p>
        </div>
      </div>
    </div>
  );
}
