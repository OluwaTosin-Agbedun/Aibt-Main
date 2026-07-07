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

const mobileLinks = [
  { href: "/programmes/certificate-courses", label: "Courses" },
  { href: "/programmes/mita-academy", label: "MITA Academy" },
  { href: "/programmes/executive-education", label: "Executive Education" },
  { href: "/admissions/apply", label: "Apply" },
  { href: "/lms", label: "LMS" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="font-serif text-xl font-semibold text-navy">
          AIBT
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
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
            className="border border-navy px-5 py-2.5 text-sm font-medium text-navy hover:bg-offwhite"
          >
            LMS Portal
          </Link>
          <Link
            href="/admissions/apply"
            className="bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-dark"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open && (
        <div className="border-t border-hairline bg-white lg:hidden">
          <Container className="flex flex-col py-4">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-hairline py-3 text-base text-charcoal last:border-none"
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
