import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "FAQs — AIBT",
};

const faqs = [
  {
    question: "Who can apply to AIBT programmes?",
    answer:
      "AIBT programmes are open to working professionals, graduates, civil servants, public institutions and corporate organisations, depending on the programme. Each course page states who should attend.",
  },
  {
    question: "How are AIBT courses delivered?",
    answer:
      "Courses are delivered online, physically, or as a blended combination — lectures, case studies, simulations, assignments, peer discussion and practical projects.",
  },
  {
    question: "Who awards the certificate?",
    answer:
      "Certificates are awarded by AIBT, MITA, or a partner institution as stated on each programme page. See Accreditation & Certificates for the full explanation.",
  },
  {
    question: "Does AIBT award degrees?",
    answer:
      "No. AIBT does not represent any programme as a degree, National Diploma or Higher National Diploma unless it is delivered through an approved awarding institution and clearly stated.",
  },
  {
    question: "How much do programmes cost?",
    answer:
      "Fees vary by programme, cohort type and delivery mode. See the Fees page or contact admissions for current pricing.",
  },
  {
    question: "Can my organisation or state government book a custom cohort?",
    answer:
      "Yes. Visit Corporate & Government Training to request a proposal for a custom or state-wide cohort.",
  },
  {
    question: "How do I verify a certificate?",
    answer:
      "Every AIBT and MITA Academy certificate carries a unique number and QR code. Use the Certificate Verification page to confirm authenticity.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="Frequently Asked Questions" />
      <section className="py-16">
        <Container className="max-w-3xl">
          <div className="divide-y divide-hairline border-y border-hairline">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h2 className="font-serif text-lg font-semibold text-navy">
                  {faq.question}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
