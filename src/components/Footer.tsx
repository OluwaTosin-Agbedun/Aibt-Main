import Link from "next/link";
import Container from "@/components/ui/Container";

const columns = [
  {
    title: "Programmes",
    links: [
      { href: "/programmes/certificate-courses", label: "Certificate Courses" },
      { href: "/programmes/mita-academy", label: "MITA Academy" },
      { href: "/programmes/executive-education", label: "Executive Education" },
      {
        href: "/programmes/corporate-government-training",
        label: "Corporate & Government Training",
      },
    ],
  },
  {
    title: "Admissions",
    links: [
      { href: "/admissions/apply", label: "Apply Now" },
      { href: "/admissions/fees", label: "Fees" },
      { href: "/admissions/faqs", label: "FAQs" },
      {
        href: "/admissions/certificate-verification",
        label: "Certificate Verification",
      },
    ],
  },
  {
    title: "Institute",
    links: [
      { href: "/about", label: "About AIBT" },
      { href: "/about/accreditation", label: "Accreditation & Certificates" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-white">
      <Container className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl font-semibold text-navy">AIBT</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal/80">
            Athena Institute of Business &amp; Technology — professional
            education, executive training and institutional learning within
            the Athena ecosystem.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-navy">{column.title}</p>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal/80 hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-hairline">
        <Container className="flex flex-col gap-3 py-6 text-xs text-charcoal/60 lg:flex-row lg:items-center lg:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Athena Institute of Business &amp; Technology (AIBT). All rights reserved.
          </p>
          <p>
            Certificates linked to National Diploma / HND pathways are delivered through Mekaria Institute of Technology and Administration (MITA), an NBTE-accredited monotechnic. See{" "}
            <Link href="/about/accreditation" className="underline hover:text-navy">
              Accreditation &amp; Certificates
            </Link>
            .
          </p>
        </Container>
      </div>
    </footer>
  );
}
