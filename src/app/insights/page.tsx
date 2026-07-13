import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Insights — AIBT",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Insights"
        body="Articles, policy notes, leadership essays, programme updates and alumni stories from AIBT."
      />
      <section className="py-16">
        <Container>
          <div className="border border-hairline bg-offwhite p-10 text-center">
            <p className="font-serif text-xl font-semibold text-navy">
              Coming Soon
            </p>
            <p className="mt-3 text-sm text-charcoal/80">
              AIBT Insights is launching soon. Check back for articles,
              policy notes and programme updates from our faculty and
              partners.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
