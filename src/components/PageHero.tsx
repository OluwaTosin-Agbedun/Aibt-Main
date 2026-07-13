import Container from "@/components/ui/Container";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-hairline bg-white">
      <Container className="py-16 lg:py-20">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-wide text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-navy">
          {title}
        </h1>
        {body && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/90">
            {body}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
