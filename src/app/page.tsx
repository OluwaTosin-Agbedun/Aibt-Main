import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ProgrammeCard from "@/components/ProgrammeCard";
import { getFeaturedProgrammes } from "@/data/programmes";

const offerCards = [
  {
    title: "Professional Certificate Courses",
    body: "Short courses for working professionals, graduates and emerging leaders.",
    cta: "Browse Certificates",
    href: "/programmes/certificate-courses",
  },
  {
    title: "MITA Academy",
    body: "Public-sector training for civil servants, school leaders, procurement officers, administrators and government institutions.",
    cta: "Explore MITA Academy",
    href: "/programmes/mita-academy",
  },
  {
    title: "Executive Education",
    body: "Premium programmes in leadership, governance, strategy, public policy and digital transformation.",
    cta: "Executive Programmes",
    href: "/programmes/executive-education",
  },
  {
    title: "Custom Institutional Training",
    body: "Bespoke training for state governments, agencies, companies and development partners.",
    cta: "Request Proposal",
    href: "/programmes/corporate-government-training",
  },
];

const whyAibt = [
  "Practical Nigerian and African context",
  "Faculty drawn from public service, policy, business and technology",
  "Flexible online, physical and blended delivery",
  "Backed by the Athena ecosystem and MITA education infrastructure",
];

const learningSteps = [
  "Apply",
  "Get admitted",
  "Attend classes",
  "Complete assignments and project",
  "Receive certificate",
  "Join alumni and community",
];

const mitaCategories = [
  "School Leadership",
  "Schedule Officers",
  "Middle Management",
  "Directorate Leadership",
  "Procurement",
  "Accounting and Audit",
  "Public Administration",
  "Digital Government",
];

export default function Home() {
  const featured = getFeaturedProgrammes();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline bg-white">
        <Container className="py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight text-navy lg:text-5xl">
              Professional Education for Public Leadership, Business and
              Technology
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/90">
              AIBT delivers certificate courses, executive education and
              public-sector training for professionals, institutions and
              emerging leaders across Nigeria and Africa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/programmes/certificate-courses">View Courses</Button>
              <Button href="/programmes/mita-academy" variant="secondary">
                MITA Academy
              </Button>
              <Button href="/programmes/corporate-government-training" variant="secondary">
                Request Training Proposal
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <Container>
          <h2 className="font-serif text-3xl font-semibold text-navy">
            What We Offer
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerCards.map((card) => (
              <div key={card.title} className="flex flex-col border border-hairline p-6">
                <h3 className="font-serif text-lg font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/80">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 text-sm font-medium text-wine hover:underline"
                >
                  {card.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Programmes */}
      <section className="bg-offwhite py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl font-semibold text-navy">
              Featured Programmes
            </h2>
            <Link
              href="/programmes/certificate-courses"
              className="text-sm font-medium text-wine hover:underline"
            >
              View all courses &rarr;
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((programme) => (
              <ProgrammeCard key={programme.slug} programme={programme} />
            ))}
          </div>
        </Container>
      </section>

      {/* MITA Academy */}
      <section className="border-y border-hairline py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy">
                MITA Academy: Practical Training for Public Institutions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/90">
                MITA Academy provides structured certificate programmes for
                public servants, education leaders, administrators and state
                institutions. Programmes are designed for practical workplace
                application and can be delivered online, physically, or as
                state-wide cohorts.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/programmes/mita-academy">
                  View MITA Academy Courses
                </Button>
                <Button
                  href="/programmes/corporate-government-training"
                  variant="secondary"
                >
                  Request State Cohort Proposal
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {mitaCategories.map((category) => (
                <div
                  key={category}
                  className="border border-hairline px-4 py-3 text-sm text-charcoal"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why AIBT */}
      <section className="py-20">
        <Container>
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Why AIBT
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyAibt.map((point) => (
              <div key={point} className="border-l-2 border-gold pl-4">
                <p className="text-sm leading-relaxed text-charcoal/90">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Learning Experience */}
      <section className="bg-offwhite py-20">
        <Container>
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Learning Experience
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/90">
            Our courses combine lectures, case studies, simulations,
            assignments, peer discussion and practical projects.
          </p>
          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {learningSteps.map((step, i) => (
              <li key={step} className="border border-hairline bg-white p-4">
                <span className="font-serif text-2xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium text-navy">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Institutional Training */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-semibold text-navy">
              Training for Governments, Agencies and Organisations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/90">
              AIBT designs and delivers tailored training for ministries,
              departments, agencies, state governments, companies and
              development partners.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-charcoal/90 sm:grid-cols-2">
              <li>&middot; Needs assessment</li>
              <li>&middot; Customised curriculum</li>
              <li>&middot; Cohort training</li>
              <li>&middot; Assessment and certification</li>
              <li>&middot; Post-training report</li>
              <li>&middot; Optional LMS access</li>
            </ul>
            <div className="mt-8">
              <Button href="/programmes/corporate-government-training">
                Request Training Proposal
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Apply */}
      <section className="border-t border-hairline bg-navy py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-white">
              Ready to begin?
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/admissions/apply" variant="secondary">
                Apply for a Course
              </Button>
              <Button href="/contact" variant="outline-light">
                Speak to Admissions
              </Button>
              <Button href="/admissions/fees" variant="outline-light">
                Download Programme Brochure
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
