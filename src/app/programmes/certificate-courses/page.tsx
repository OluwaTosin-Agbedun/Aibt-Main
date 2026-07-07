import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import ProgrammeFilterGrid from "@/components/ProgrammeFilterGrid";
import {
  certificateCourses,
  emergingProfessionalsCourses,
  filterTagOptions,
} from "@/data/programmes";

export const metadata = {
  title: "Certificate Courses — AIBT",
};

export default function CertificateCoursesPage() {
  const programmes = [...certificateCourses, ...emergingProfessionalsCourses];

  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Certificate Courses"
        body="Short professional courses for working professionals, graduates and emerging leaders. Delivered online, physically or as blended cohorts, with practical assignments and a certificate on completion."
      />
      <section className="py-16">
        <Container>
          <ProgrammeFilterGrid programmes={programmes} filterTags={filterTagOptions} />
        </Container>
      </section>
    </>
  );
}
