import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import DynamicForm from "@/components/forms/DynamicForm";
import type { FieldConfig } from "@/components/forms/DynamicForm";

export const metadata = {
  title: "Contact — AIBT",
};

const enquiryFields: FieldConfig[] = [
  { type: "text", name: "name", label: "Full Name", required: true },
  { type: "email", name: "email", label: "Email", required: true },
  { type: "tel", name: "phone", label: "Phone / WhatsApp", required: false },
  { type: "textarea", name: "message", label: "Message", required: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in Touch" />
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-xl font-semibold text-navy">
                Contact Details
              </h2>
              <dl className="mt-6 space-y-5 text-sm text-charcoal/90">
                <div>
                  <dt className="font-medium text-navy">Office Address</dt>
                  <dd className="mt-1">
                    [Placeholder — confirm official AIBT office address]
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-navy">Email</dt>
                  <dd className="mt-1">
                    <a href="mailto:info@aibt.edu.ng" className="underline hover:text-navy">
                      info@aibt.edu.ng
                    </a>{" "}
                    (placeholder — confirm official address)
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-navy">Phone / WhatsApp</dt>
                  <dd className="mt-1">[Placeholder — confirm official number]</dd>
                </div>
                <div>
                  <dt className="font-medium text-navy">Social</dt>
                  <dd className="mt-1">[Placeholder — confirm official handles]</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-navy">
                Send an Enquiry
              </h2>
              <div className="mt-6">
                <DynamicForm
                  fields={enquiryFields}
                  submitLabel="Send Message"
                  successMessage="Your message has been received. We will respond as soon as possible."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
