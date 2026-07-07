import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import CertificateVerificationForm from "@/components/CertificateVerificationForm";

export const metadata = {
  title: "Certificate Verification — AIBT",
};

export default function CertificateVerificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Certificate Verification"
        body="Every AIBT and MITA Academy certificate carries a unique certificate number and a QR code. Enter the certificate number below to confirm it was issued by AIBT or MITA."
      />
      <section className="py-16">
        <Container className="max-w-xl">
          <CertificateVerificationForm />
        </Container>
      </section>
    </>
  );
}
