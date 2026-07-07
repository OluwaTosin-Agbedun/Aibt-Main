import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "LMS Portal — AIBT",
};

export default function LmsPage() {
  return (
    <>
      <PageHero
        eyebrow="LMS Portal"
        title="LMS Portal"
        body="Enrolled learners access course materials, assessments and certificates through the AIBT Learning Management System."
      />
      <section className="py-16">
        <Container className="max-w-2xl">
          <p className="text-sm leading-relaxed text-charcoal/80">
            The LMS Portal link will be activated for enrolled learners once
            a cohort is admitted. If you have been given LMS access details
            directly, use the link provided in your admission email.
          </p>
          <div className="mt-8">
            <Button href="/admissions/apply" variant="secondary">
              Apply for a Course
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
