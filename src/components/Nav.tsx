"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";

const desktopLinks = [
  { href: "/about", label: "About AIBT" },
  { href: "/programmes/certificate-courses", label: "Certificate Courses" },
  { href: "/programmes/mita-academy", label: "MITA Academy" },
  { href: "/programmes/executive-education", label: "Executive Education" },
  {
    href: "/programmes/corporate-government-training",
    label: "Corporate & Government Training",
  },
  { href: "/insights", label: "Insights" },
];

const mobileLinks: Array<{ href: string; label: string; variant?: "default" | "outline" | "solid" }> = [
  ...desktopLinks.map((link) => ({ ...link, variant: "default" as const })),
  { href: "/lms", label: "LMS Portal", variant: "outline" },
  { href: "/admissions/apply", label: "Apply Now", variant: "solid" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="font-serif text-xl font-semibold text-navy">
          AIBT
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {desktopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/lms"
            className="rounded-full border border-navy px-5 py-2.5 text-sm font-medium text-navy hover:bg-offwhite"
          >
            LMS Portal
          </Link>
          <Link
            href="/admissions/apply"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-dark"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-navy px-4 py-2 text-sm font-medium text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-hairline bg-white lg:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-3 text-base font-medium transition ${
                  link.variant === "solid"
                    ? "bg-navy text-white hover:bg-navy-dark"
                    : link.variant === "outline"
                    ? "border border-navy text-navy hover:bg-offwhite"
                    : "text-charcoal hover:text-navy"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
