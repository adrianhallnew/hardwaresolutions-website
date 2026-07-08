import type { Metadata } from "next";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/services/ServiceCard";

export const metadata: Metadata = {
  title: "Services | Hardware Solutions",
  description: "Security systems, monitoring systems, and networking systems.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <h1 className="text-h1 font-semibold text-ink">Services</h1>
      <p className="mt-4 max-w-[68ch] text-body-lg text-ink-muted">
        IoT systems for security, monitoring, and networking — installed and supported
        properly.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
