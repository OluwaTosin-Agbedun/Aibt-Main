import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Programme } from "@/data/programmes";

export default function ProgrammeDetail({ programme }: { programme: Programme }) {
  return (
    <Container className="py-16">
      <p className="text-xs font-medium uppercase tracking-wide text-gold">
        {programme.duration} · {programme.mode}
      </p>
      <h1 className="mt-3 max-w-3xl font-serif text-3xl font-semibold text-navy lg:text-4xl">
        {programme.title}
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <section>
            <h2 className="font-serif text-xl font-semibold text-navy">Overview</h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/90">
              {programme.overview}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold text-navy">
              Who Should Attend
            </h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/90">
              {programme.audience}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold text-navy">
              Learning Outcomes
            </h2>
            <ul className="mt-3 space-y-2">
              {programme.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-base leading-relaxed text-charcoal/90">
                  <span className="text-gold">&middot;</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-xl font-semibold text-navy">Modules</h2>
            <ol className="mt-3 space-y-2">
              {programme.modules.map((module, i) => (
                <li key={module} className="flex gap-3 text-base leading-relaxed text-charcoal/90">
                  <span className="font-medium text-navy">{i + 1}.</span>
                  <span>{module}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="border border-hairline p-6 lg:sticky lg:top-24 lg:h-fit">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-medium text-navy">Duration</dt>
              <dd className="mt-1 text-charcoal/80">{programme.duration}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Mode</dt>
              <dd className="mt-1 text-charcoal/80">{programme.mode}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Fee</dt>
              <dd className="mt-1 text-charcoal/80">{programme.fee}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Certificate Awarded</dt>
              <dd className="mt-1 text-charcoal/80">{programme.certificateAwarded}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Start Date</dt>
              <dd className="mt-1 text-charcoal/80">{programme.startDate}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Application Deadline</dt>
              <dd className="mt-1 text-charcoal/80">{programme.applicationDeadline}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Contact</dt>
              <dd className="mt-1 text-charcoal/80">
                <a href="mailto:admissions@aibt.edu.ng" className="underline hover:text-navy">
                  admissions@aibt.edu.ng
                </a>{" "}
                (placeholder — confirm official address)
              </dd>
            </div>
          </dl>
          <div className="mt-6">
            <Button href="/admissions/apply" className="w-full">
              Apply Now
            </Button>
          </div>
        </aside>
      </div>
    </Container>
  );
}
