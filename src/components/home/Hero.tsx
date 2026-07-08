import Image from "next/image";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:gap-16 md:px-12 md:py-24">
      <div className="flex flex-1 flex-col items-start gap-6">
        <h1 className="text-hero lg:text-[3.5rem] lg:leading-[1.1] font-semibold text-ink">
          IoT systems for security, monitoring, and networking.
        </h1>
        <p className="text-body-lg text-ink-muted">
          We design and install camera systems, environmental monitoring, and network
          infrastructure — for homes and businesses that need it done properly.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/contact" size="lg">
            Get a quote
          </Button>
          <Button href="#services" variant="secondary" size="lg">
            View services
          </Button>
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-lg md:aspect-square">
        <Image
          src="/hero-home.jpg"
          alt="Placeholder image — Hardware Solutions installation"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
