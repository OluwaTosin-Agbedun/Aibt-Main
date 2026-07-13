import { notFound } from "next/navigation";
import ProgrammeDetail from "@/components/ProgrammeDetail";
import { mitaAcademyCourses } from "@/data/programmes";

export function generateStaticParams() {
  return mitaAcademyCourses.map((p) => ({ slug: p.slug }));
}

export default async function MitaCourseDetailPage(
  props: PageProps<"/programmes/mita-academy/[slug]">
) {
  const { slug } = await props.params;
  const programme = mitaAcademyCourses.find((p) => p.slug === slug);

  if (!programme) notFound();

  return <ProgrammeDetail programme={programme} />;
}
