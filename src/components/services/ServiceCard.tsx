import Link from "next/link";
import { Shield, Activity, Network, ArrowRight, type LucideIcon } from "lucide-react";
import type { Service } from "@/content/types";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  activity: Activity,
  network: Network,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Shield;

  return (
    <Link
      href={`/services/${service.slug}`}
      aria-label={`${service.name} — learn more`}
      className="group flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 shadow-card transition-[border-color,box-shadow] duration-fast ease-out hover:border-ink hover:shadow-raised focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
    >
      <Icon aria-hidden="true" className="h-6 w-6 text-ink" strokeWidth={1.75} />
      <div>
        <h3 className="text-h3 font-medium text-ink">{service.name}</h3>
        <p className="mt-1 line-clamp-2 text-body text-ink-muted">{service.summary}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-body text-ink">
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-fast ease-out group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
