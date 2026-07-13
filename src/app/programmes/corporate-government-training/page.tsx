import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import ProgrammeCard from "@/components/ProgrammeCard";
import DynamicForm from "@/components/forms/DynamicForm";
import type { FieldConfig } from "@/components/forms/DynamicForm";
import { corporateGovernmentProgrammes } from "@/data/programmes";

export const metadata = {
  title: "Corporate & Government Training — AIBT",
};

const proposalFields: FieldConfig[] = [
  { type: "text", name: "organisation", label: "Organisation Name", required: true },
  {
    type: "select",
    name: "sector",
    label: "Sector",
    required: true,
    options: [
      "State Government",
      "Federal MDA",
      "Corporate / Private Sector",
      "Development Partner / NGO",
      "Other",
    ],
  },
  { type: "number", name: "participants", label: "Number of Participants", required: true },
  {
    type: "select",
    name: "programmeArea",
    label: "Preferred Programme Area",
    required: true,
    options: [
      "Public Administration & Governance",
      "Procurement & Contract Management",
      "Public Finance, Accounting & Audit",
      "Leadership & Corporate Governance",
      "Digital Skills & Data Governance",
      "Custom / Not Sure Yet",
    ],
  },
  { type: "text", name: "location", label: "Location", required: true },
  {
    type: "select",
    name: "mode",
    label: "Online / Physical / Blended",
    required: true,
    options: ["Online", "Physical", "Blended"],
  },
  { type: "date", name: "expectedDate", label: "Expected Date", required: false },
  { type: "text", name: "contactPerson", label: "Contact Person", required: true },
  { type: "email", name: "email", label: "Email", required: true },
  { type: "tel", name: "phone", label: "Phone / WhatsApp", required: true },
];

export default function CorporateGovernmentTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Training for Governments, Agencies and Organisations"
        body="AIBT designs and delivers tailored training for ministries, departments, agencies, state governments, companies and development partners."
      />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="border border-hairline p-8">
              <h2 className="font-serif text-xl font-semibold text-navy">
                Government &amp; Public Sector
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/90">
                For states, ministries, departments and agencies, we build
                closed cohorts through a relationship-led process with the
                Head of Service, Civil Service Commission, or commissioning
                ministry. The offer is a documented, assessed, cadre-based
                training ladder — delivered through MITA Academy — not a
                one-off seminar.
              </p>
            </div>
            <div className="border border-hairline p-8">
              <h2 className="font-serif text-xl font-semibold text-navy">
                Corporate &amp; Private Organisations
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/90">
                For companies and private organisations, training is
                procured through a standard B2B process. The offer is
                applied leadership and governance capability for staff,
                scoped to your organisation&rsquo;s goals and delivered on
                your timeline.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-offwhite py-16">
        <Container>
          <h2 className="font-serif text-3xl font-semibold text-navy">
            What&rsquo;s Included
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-charcoal/90 sm:grid-cols-2 lg:grid-cols-3">
            <li className="border border-hairline bg-white p-4">Needs assessment</li>
            <li className="border border-hairline bg-white p-4">Customised curriculum</li>
            <li className="border border-hairline bg-white p-4">Cohort training</li>
            <li className="border border-hairline bg-white p-4">Assessment and certification</li>
            <li className="border border-hairline bg-white p-4">Post-training report</li>
            <li className="border border-hairline bg-white p-4">Optional LMS access</li>
          </ul>
        </Container>
      </section>

      <section className="border-t border-hairline py-16">
        <Container>
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Institutional Training Programmes
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corporateGovernmentProgrammes.map((programme) => (
              <ProgrammeCard key={programme.slug} programme={programme} />
            ))}
          </div>
        </Container>
      </section>

      <section id="request-proposal" className="border-t border-hairline bg-offwhite py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-semibold text-navy">
              Request Proposal
            </h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/90">
              Tell us about your organisation and training needs, and our
              team will follow up with a tailored proposal.
            </p>
          </div>
          <div className="mt-10 max-w-3xl">
            <DynamicForm
              fields={proposalFields}
              submitLabel="Request Proposal"
              successMessage="Your request has been received. Our institutional training team will contact you shortly."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
