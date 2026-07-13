import { notFound } from "next/navigation";
import ProgrammeDetail from "@/components/ProgrammeDetail";
import { executiveEducationCourses } from "@/data/programmes";

export function generateStaticParams() {
  return executiveEducationCourses.map((p) => ({ slug: p.slug }));
}

export default async function ExecutiveCourseDetailPage(
  props: PageProps<"/programmes/executive-education/[slug]">
) {
  const { slug } = await props.params;
  const programme = executiveEducationCourses.find((p) => p.slug === slug);

  if (!programme) notFound();

  return <ProgrammeDetail programme={programme} />;
}
