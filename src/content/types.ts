export type ServiceSlug = "security-systems" | "monitoring-systems" | "networking-systems";

export type Service = {
  slug: ServiceSlug;
  name: string;
  summary: string;
  description: string;
  features: string[];
  useCases: string[];
  heroImage: string;
  icon: string;
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: ServiceSlug;
};

export type FaqItem = {
  question: string;
  answer: string;
  topic?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  service?: ServiceSlug;
};

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  service: ServiceSlug;
  challenge: string;
  solution: string;
  result: string;
  image?: string;
};

export type Partner = {
  id: string;
  name: string;
  logo: string;
  tier?: string;
  url?: string;
};

export type SiteInfo = {
  companyName: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: { platform: string; url: string }[];
};
