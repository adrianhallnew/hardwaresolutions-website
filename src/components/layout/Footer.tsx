import Link from "next/link";
import { services } from "@/content/services";
import { siteInfo } from "@/content/site";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Partners", href: "/partners" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-graphite text-ink-inverse">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <p className="text-h3 font-semibold">{siteInfo.companyName}</p>
            <p className="mt-2 text-caption text-ink-muted-inverse">
              IoT security, monitoring, and networking systems.
            </p>
          </div>

          <nav aria-label="Services">
            <p className="text-label font-medium uppercase tracking-[0.06em] text-ink-muted-inverse">
              Services
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="/services" className="text-body hover:underline">
                  All Services
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-body hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-label font-medium uppercase tracking-[0.06em] text-ink-muted-inverse">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="text-label font-medium uppercase tracking-[0.06em] text-ink-muted-inverse">
              Legal
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-border-inverse pt-6 text-caption text-ink-muted-inverse">
          <p>{siteInfo.address}</p>
          <p>
            {siteInfo.phone} · {siteInfo.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
