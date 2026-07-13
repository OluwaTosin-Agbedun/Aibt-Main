import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Fees — AIBT",
};

const feeGroups = [
  {
    title: "Certificate Courses & Emerging Professionals",
    note: "Fee available on request. Confirmed at application per programme.",
  },
  {
    title: "MITA Academy",
    note: "Fee available on request. Individual and cohort pricing differ — confirmed at application.",
  },
  {
    title: "Executive Education",
    note: "Fee available on request. Pricing differs between open enrolment and closed institutional cohorts.",
  },
  {
    title: "Corporate & Government Training",
    note: "Priced per engagement following a needs assessment. Request a proposal for a quote.",
  },
];

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Fees"
        body="AIBT programme fees vary by track, cohort type and delivery mode. Final pricing per programme is confirmed directly with our admissions team before you commit."
      />
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {feeGroups.map((group) => (
              <div key={group.title} className="border border-hairline p-6">
                <h2 className="font-serif text-lg font-semibold text-navy">
                  {group.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                  {group.note}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/admissions/apply">Apply for a Course</Button>
            <Button href="/contact" variant="secondary">
              Speak to Admissions
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
