import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import ProgrammeCard from "@/components/ProgrammeCard";
import { executiveEducationCourses } from "@/data/programmes";

export const metadata = {
  title: "Executive Education — AIBT",
};

export default function ExecutiveEducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Executive Education"
        body="Programmes built for commissioners, permanent secretaries and senior corporate leaders making institution-level decisions in leadership, governance, strategy, public policy and digital transformation."
      />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {executiveEducationCourses.map((programme) => (
              <ProgrammeCard key={programme.slug} programme={programme} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-offwhite py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-semibold text-navy">
              Fees
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/90">
              Executive Education fees vary by programme and by cohort type
              (open enrolment or closed institutional cohort). Fee available
              on request — speak to our admissions team for current pricing
              and available intakes.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
