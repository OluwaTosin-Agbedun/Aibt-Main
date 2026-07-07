import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProgrammeCard from "@/components/ProgrammeCard";
import { mitaAcademyCourses } from "@/data/programmes";

export const metadata = {
  title: "MITA Academy — AIBT",
};

const cadres = [
  {
    name: "School Leaders",
    detail: "Head teachers, principals and school administrators",
  },
  {
    name: "Schedule Officers",
    detail: "Junior-to-mid cadre civil servants, typically Level 8–12",
  },
  {
    name: "Middle Management",
    detail: "Supervisory civil servants, typically Level 12–14",
  },
  {
    name: "Directorate Leadership",
    detail: "Directors and senior civil servants, typically Level 15–17",
  },
  {
    name: "Technical Cadres",
    detail: "Procurement, accounting and audit officers",
  },
];

const deliveryFeatures = [
  "Structured online learning modules",
  "WhatsApp support and progress nudges",
  "Recorded and live sessions",
  "Computer-based testing for assessment",
  "A verifiable, QR-coded certificate on completion",
];

export default function MitaAcademyPage() {
  return (
    <>
      {/* Distinct visual identity: navy band instead of plain white hero */}
      <section className="border-b border-hairline bg-navy text-white">
        <Container className="py-16 lg:py-20">
          <p className="text-xs font-medium uppercase tracking-wide text-gold">
            MITA Academy
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight">
            A Cadre-Based Training Ladder for Public Institutions
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            MITA Academy is a career-linked capability programme for school
            leaders and civil servants from Level 8 to Level 17, plus
            technical cadres in procurement, audit and finance — not a
            one-off seminar, but a structured, assessed training ladder tied
            to a verifiable certificate.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#courses" variant="secondary">
              View MITA Academy Courses
            </Button>
            <Button href="/programmes/corporate-government-training" variant="outline-light">
              Request State Cohort Proposal
            </Button>
          </div>
        </Container>
      </section>

      {/* Cadre ladder */}
      <section className="py-16">
        <Container>
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Built Around the Cadres You Serve
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {cadres.map((cadre) => (
              <div key={cadre.name} className="border border-hairline p-5">
                <p className="font-serif text-base font-semibold text-navy">
                  {cadre.name}
                </p>
                <p className="mt-2 text-sm text-charcoal/80">{cadre.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Delivery model */}
      <section className="bg-offwhite py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy">
                A Career-Linked Capability Model
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/90">
                MITA Academy is delivered through blended learning designed
                for civil servants balancing training with active duty.
                Every certificate is verifiable — a real differentiator from
                a hotel-seminar attendance certificate.
              </p>
              <p className="mt-4 text-sm text-charcoal/70">
                Available for individual enrolment and state/institutional
                cohorts.
              </p>
            </div>
            <ul className="space-y-3">
              {deliveryFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 border border-hairline bg-white p-4 text-sm text-charcoal/90">
                  <span className="text-gold">&middot;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Courses */}
      <section id="courses" className="py-16">
        <Container>
          <h2 className="font-serif text-3xl font-semibold text-navy">
            MITA Academy Certificates
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mitaAcademyCourses.map((programme) => (
              <ProgrammeCard key={programme.slug} programme={programme} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline py-12">
        <Container>
          <p className="max-w-2xl text-sm text-charcoal/70">
            MITA Academy works with individual civil servants and with state
            and institutional cohorts. Programme details, including
            state-specific delivery arrangements, are confirmed directly with{" "}
            <Link href="/programmes/corporate-government-training" className="underline hover:text-navy">
              our institutional training team
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
