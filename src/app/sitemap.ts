import type { MetadataRoute } from "next";
import { services } from "@/content/services";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/faq",
  "/our-work",
  "/partners",
  "/privacy",
  "/services",
  "/terms",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
  }));

  return [...staticEntries, ...serviceEntries];
}
