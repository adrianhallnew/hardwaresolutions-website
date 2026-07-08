import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact | Hardware Solutions",
  description: "Get a quote for security, monitoring, or networking systems.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16 md:px-12">
      <h1 className="text-h1 font-semibold text-ink">Contact</h1>
      <p className="mt-4 text-body-lg text-ink-muted">
        Tell us about your site and we&apos;ll get back to you with next steps. Prefer to
        call or email directly?
      </p>
      <p className="mt-2 text-body text-ink">
        {siteInfo.phone} · {siteInfo.email}
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
