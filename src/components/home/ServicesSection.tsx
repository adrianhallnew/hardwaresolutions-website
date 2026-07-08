import { services } from "@/content/services";
import { ServiceCard } from "../services/ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <h2 className="text-h2 font-semibold text-ink">Services</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
