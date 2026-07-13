import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Accreditation & Certificates — AIBT",
};

export default function AccreditationPage() {
  return (
    <>
      <PageHero
        eyebrow="About AIBT"
        title="Accreditation and Certificates"
      />

      <section className="py-16">
        <Container>
          <div className="max-w-3xl space-y-6 text-base leading-relaxed text-charcoal/90">
            <p>
              AIBT offers professional and executive certificate programmes.
              Where programmes are linked to National Diploma or Higher
              National Diploma pathways, they are delivered through Mekaria
              Institute of Technology and Administration, an NBTE-accredited
              monotechnic. Professional certificates, executive certificates
              and short courses are awarded by AIBT, MITA, or partner
              institutions as stated on each programme page.
            </p>
            <p>
              AIBT does not represent any programme as a degree, National
              Diploma or Higher National Diploma unless it is delivered
              through an approved awarding institution and clearly stated.
            </p>

            <div className="border-l-2 border-gold pl-6">
              <h2 className="font-serif text-xl font-semibold text-navy">
                How the Two Institutions Work Together
              </h2>
              <p className="mt-3">
                Athena Institute (operating publicly as AIBT) designs,
                markets, prices and sells the programmes. Mekaria Institute
                of Technology and Administration (MITA) supplies
                accreditation and certification integrity and awards the
                credential, where a programme is linked to MITA. This split
                is part of what makes the credential credible, and it is
                named here rather than hidden inside a single undifferentiated
                &ldquo;AIBT&rdquo; identity.
              </p>
            </div>

            <h2 className="font-serif text-xl font-semibold text-navy">
              What We Do Not Claim
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-gold">&middot;</span>
                <span>
                  We do not state or imply that a certificate is
                  &ldquo;recognised for promotion,&rdquo; carries
                  civil-service career-advancement value, or is
                  &ldquo;NSQF-aligned&rdquo; in any state or jurisdiction
                  unless that recognition has been formally secured and
                  documented for that specific jurisdiction.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">&middot;</span>
                <span>
                  We do not publish alumni counts, cohort numbers, state
                  adoption figures or success/placement percentages unless
                  they are real and current.
                </span>
              </li>
            </ul>

            <h2 className="font-serif text-xl font-semibold text-navy">
              Certificate Verification
            </h2>
            <p>
              Every issued certificate carries a unique certificate number
              and QR-code verification. To confirm the authenticity of an
              AIBT or MITA Academy certificate, use our{" "}
              <a href="/admissions/certificate-verification" className="underline hover:text-navy">
                Certificate Verification
              </a>{" "}
              tool.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
