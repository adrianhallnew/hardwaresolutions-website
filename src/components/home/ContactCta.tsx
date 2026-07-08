import { Button } from "../ui/Button";

export function ContactCta() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 text-center md:px-12">
        <h2 className="text-h2 font-semibold text-ink">Ready to get started?</h2>
        <p className="max-w-[60ch] text-body text-ink-muted">
          Tell us about your site and we&apos;ll get back to you with next steps.
        </p>
        <Button href="/contact" size="lg">
          Get a quote
        </Button>
      </div>
    </section>
  );
}
