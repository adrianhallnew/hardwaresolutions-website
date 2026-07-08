import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center md:px-12">
      <p className="text-h1 font-semibold text-ink-muted">404</p>
      <h1 className="text-h2 font-semibold text-ink">Page not found</h1>
      <p className="max-w-[60ch] text-body text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/contact" variant="ghost" size="lg">
          Contact us
        </Button>
      </div>
    </div>
  );
}
