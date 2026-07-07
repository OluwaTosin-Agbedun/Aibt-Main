import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import ApplyFormTabs from "@/components/ApplyFormTabs";

export const metadata = {
  title: "Apply Now — AIBT",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Apply Now"
        body="Choose the applicant profile that matches you — the form adjusts to ask only what's relevant."
      />
      <section className="py-16">
        <Container className="max-w-3xl">
          <ApplyFormTabs />
        </Container>
      </section>
    </>
  );
}
