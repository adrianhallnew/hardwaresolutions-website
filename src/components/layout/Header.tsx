"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const navItems = [
  { label: "About", anchor: "#about", href: "/about" },
  { label: "Services", anchor: "#services", href: "/services" },
  { label: "Our Work", anchor: "#work", href: "/our-work" },
  { label: "FAQ", anchor: "#faq", href: "/faq" },
  { label: "Contact", anchor: "#contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const elements = navItems
      .map((item) => document.getElementById(item.anchor.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  function isActive(item: (typeof navItems)[number]) {
    if (isHome) return activeSection === item.anchor.slice(1);
    return pathname === item.href;
  }

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-paper transition-shadow duration-fast ease-out ${
        scrolled ? "shadow-card border-border" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-3 sm:px-4 md:px-6 lg:px-12">
        <Link href="/" aria-label="Hardware Solutions home" className="flex shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Hardware Solutions" className="h-6 w-auto sm:h-7 md:h-8" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-4 md:flex lg:gap-8">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.label}
                href={isHome ? item.anchor : item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap border-b-2 pb-1 text-body transition-colors duration-fast ease-out ${
                  active
                    ? "border-ink text-ink"
                    : "border-transparent text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Button href="/contact" size="sm">
            Get a quote
          </Button>

          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
              >
                <Menu aria-hidden="true" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-40 bg-graphite/90 md:hidden" />
              <Dialog.Content
                aria-label="Mobile navigation"
                className="fixed inset-0 z-50 flex flex-col bg-paper p-6 md:hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-h3 font-semibold text-ink">Menu</span>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="inline-flex h-11 w-11 items-center justify-center text-ink"
                    >
                      <X aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>
                <nav aria-label="Primary" className="mt-8 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={isHome ? item.anchor : item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-h3 text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
