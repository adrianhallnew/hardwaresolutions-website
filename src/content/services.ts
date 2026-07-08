import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "security-systems",
    name: "Security Systems",
    summary: "CCTV, access control, and alarm integration for homes and businesses.",
    description:
      "Camera systems, access control, and alarm integration designed around how a site is actually used — not a one-size-fits-all install.",
    features: [
      "24/7 recording",
      "Remote monitoring app",
      "Access control integration",
      "Alarm system integration",
    ],
    useCases: ["Retail storefronts", "Warehouses", "Residential"],
    heroImage: "/services/security-systems-hero.jpg",
    icon: "shield",
  },
  {
    slug: "monitoring-systems",
    name: "Monitoring Systems",
    summary: "Asset tracking and remote diagnostics for equipment and infrastructure.",
    description:
      "Dashboards and diagnostics that flag equipment problems before they become expensive ones — asset tracking and remote status alerts, not guesswork.",
    features: [
      "Asset tracking",
      "Remote diagnostics",
      "Alert notifications",
    ],
    useCases: ["Server rooms", "Industrial equipment", "Vehicle and asset fleets"],
    heroImage: "/services/monitoring-systems-hero.jpg",
    icon: "activity",
  },
  {
    slug: "networking-systems",
    name: "Networking Systems",
    summary: "Structured cabling, wireless mesh, and network hardening.",
    description:
      "Wired and wireless network infrastructure built to handle the load a modern site actually puts on it, installed and documented properly.",
    features: [
      "Structured cabling",
      "Wireless mesh coverage",
      "Network hardening",
      "Ongoing support",
    ],
    useCases: ["Office fit-outs", "Multi-unit residential", "Retail chains"],
    heroImage: "/services/networking-systems-hero.jpg",
    icon: "network",
  },
];
