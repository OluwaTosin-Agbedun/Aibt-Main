"use client";

import { useMemo, useState } from "react";
import ProgrammeCard from "@/components/ProgrammeCard";
import type { Programme } from "@/data/programmes";

export default function ProgrammeFilterGrid({
  programmes,
  filterTags,
}: {
  programmes: Programme[];
  filterTags: string[];
}) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!active) return programmes;
    return programmes.filter((p) => p.filterTags.includes(active));
  }, [active, programmes]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={`px-4 py-2 text-sm font-medium ${
            active === null
              ? "bg-navy text-white"
              : "border border-hairline text-charcoal hover:border-navy"
          }`}
        >
          All Courses
        </button>
        {filterTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            className={`px-4 py-2 text-sm font-medium ${
              active === tag
                ? "bg-navy text-white"
                : "border border-hairline text-charcoal hover:border-navy"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((programme) => (
          <ProgrammeCard key={programme.slug} programme={programme} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-charcoal/70">
          No courses currently match this filter.
        </p>
      )}
    </div>
  );
}
