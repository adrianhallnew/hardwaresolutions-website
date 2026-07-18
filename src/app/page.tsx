import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustedByStrip } from "@/components/home/TrustedByStrip";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WorkTeaser } from "@/components/home/WorkTeaser";
import { TestimonialTeaser } from "@/components/home/TestimonialTeaser";
import { FaqTeaser } from "@/components/home/FaqTeaser";
import { ContactCta } from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "Hardware Solutions | Security, Monitoring & Networking Systems",
  description: "IoT security, monitoring, and networking systems.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedByStrip />
      <AboutTeaser />
      <ServicesSection />
      <WorkTeaser />
      <TestimonialTeaser />
      <FaqTeaser />
      <ContactCta />
    </>
  );
}
