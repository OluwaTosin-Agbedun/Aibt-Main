import Link from "next/link";
import type { Programme } from "@/data/programmes";

const trackBasePath: Record<Programme["track"], string> = {
  certificate: "/programmes/certificate-courses",
  mita: "/programmes/mita-academy",
  executive: "/programmes/executive-education",
  corporate: "/programmes/corporate-government-training",
  emerging: "/programmes/certificate-courses",
};

export default function ProgrammeCard({ programme }: { programme: Programme }) {
  const detailHref =
    programme.track === "corporate"
      ? "/programmes/corporate-government-training"
      : `${trackBasePath[programme.track]}/${programme.slug}`;

  return (
    <div className="flex h-full flex-col border border-hairline bg-white p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-gold">
        {programme.duration} · {programme.mode}
      </p>
      <h3 className="mt-3 font-serif text-lg font-semibold text-navy">
        {programme.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
        {programme.audience}
      </p>
      <p className="mt-4 text-sm font-medium text-charcoal">{programme.fee}</p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/admissions/apply"
          className="bg-navy px-4 py-2 text-sm font-medium text-white hover:bg-navy-dark"
        >
          Apply Now
        </Link>
        <Link
          href={detailHref}
          className="border border-navy px-4 py-2 text-sm font-medium text-navy hover:bg-offwhite"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
