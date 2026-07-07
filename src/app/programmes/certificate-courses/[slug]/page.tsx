import { notFound } from "next/navigation";
import ProgrammeDetail from "@/components/ProgrammeDetail";
import {
  certificateCourses,
  emergingProfessionalsCourses,
} from "@/data/programmes";

const programmes = [...certificateCourses, ...emergingProfessionalsCourses];

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export default async function CertificateCourseDetailPage(
  props: PageProps<"/programmes/certificate-courses/[slug]">
) {
  const { slug } = await props.params;
  const programme = programmes.find((p) => p.slug === slug);

  if (!programme) notFound();

  return <ProgrammeDetail programme={programme} />;
}
