import Link from "next/link";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About AIBT",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AIBT"
        title="Who We Are"
        body="Athena Institute of Business & Technology (AIBT) is the professional education, executive training and institutional learning platform of the Athena ecosystem."
      />

      <section id="who-we-are" className="py-16">
        <Container>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-charcoal/90">
            <p>
              Athena Institute of Business &amp; Technology (AIBT) is the
              professional education, executive training and institutional
              learning platform of the Athena ecosystem. AIBT delivers
              certificate courses, executive education, public-sector
              training and customised programmes for professionals, public
              institutions, corporate organisations and emerging leaders.
            </p>
            <p>
              Through MITA Academy, AIBT supports structured training and
              capacity-building programmes linked to Mekaria Institute of
              Technology and Administration&rsquo;s education infrastructure.
            </p>
            <p>
              AIBT is governed as an institution, not run as an extension of
              any one individual. Programme design, quality assurance and
              certification integrity sit with dedicated governance
              structures — including a Steering Committee and an Academic
              and Certification Quality Committee — so that the credential
              behind every certificate stands independent of any single
              person.
            </p>
          </div>
        </Container>
      </section>

      <section id="athena-ecosystem" className="border-t border-hairline bg-offwhite py-16">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-navy">
            The Athena Ecosystem
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-charcoal/90">
            <p>
              AIBT sits within the Athena ecosystem, connecting Athena&rsquo;s
              policy and leadership work to a practical, commercial training
              platform. AIBT is the front door for professionals,
              institutions and organisations who want to learn and build
              capability — while Mekaria Institute of Technology and
              Administration (MITA), an NBTE-accredited monotechnic, supplies
              the accreditation and certification infrastructure behind
              programmes that require it.
            </p>
            <p>
              This means AIBT can move quickly to design, market and deliver
              relevant, practical training, while the credentials it issues
              — where linked to MITA — carry the integrity of a regulated
              awarding institution.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-navy">
              Accreditation &amp; Certificates
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/90">
              AIBT is explicit about which certificates are awarded by AIBT,
              which are awarded through MITA, and what that means for each
              programme.
            </p>
            <div className="mt-6">
              <Button href="/about/accreditation" variant="secondary">
                Read Accreditation &amp; Certificates
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-navy py-16">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-xl font-serif text-2xl font-semibold text-white">
              Explore programmes across certificate courses, MITA Academy and
              executive education.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/programmes/certificate-courses" variant="secondary">
                View Courses
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white px-6 py-3 text-sm font-medium text-white hover:bg-navy-dark"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
