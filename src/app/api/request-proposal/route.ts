import { NextResponse } from "next/server";
import { Resend } from "resend";

const trainingManagerEmail = process.env.TRAINING_MANAGER_EMAIL ?? "training.manager@aibt.edu.ng";
const fromEmail = process.env.EMAIL_FROM ?? "AIBT <no-reply@aibt.edu.ng>";

function getResendClient() {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
  }
  return new Resend(resendApiKey);
}

export async function POST(request: Request) {
  const resend = getResendClient();
  const body = (await request.json()) as Record<string, string>;

  const userEmail = body.email?.trim();
  const contactPerson = body.contactPerson?.trim();
  const organisation = body.organisation?.trim() || "Not provided";
  const phone = body.phone?.trim() || "Not provided";
  const sector = body.sector?.trim() || "Not provided";
  const participants = body.participants?.trim() || "Not provided";
  const programmeArea = body.programmeArea?.trim() || "Not provided";
  const location = body.location?.trim() || "Not provided";
  const mode = body.mode?.trim() || "Not provided";
  const expectedDate = body.expectedDate?.trim() || "Not provided";

  if (!userEmail) {
    return NextResponse.json(
      { error: "Email is required." }, 
      { status: 400 }
    );
  }

  const customerHtml = `
    <p>Dear ${contactPerson || "Customer"},</p>
    <p>Thank you for requesting a training proposal from AIBT. We have received your request and our team will contact you shortly with a tailored proposal.</p>
    <p><strong>Request details</strong></p>
    <ul>
      <li><strong>Organisation:</strong> ${organisation}</li>
      <li><strong>Sector:</strong> ${sector}</li>
      <li><strong>Participants:</strong> ${participants}</li>
      <li><strong>Preferred Programme Area:</strong> ${programmeArea}</li>
      <li><strong>Location:</strong> ${location}</li>
      <li><strong>Mode:</strong> ${mode}</li>
      <li><strong>Expected Date:</strong> ${expectedDate}</li>
      <li><strong>Contact Person:</strong> ${contactPerson}</li>
      <li><strong>Phone / WhatsApp:</strong> ${phone}</li>
    </ul>
    <p>We appreciate your interest in working with AIBT.</p>
    <p>Best regards,<br/>AIBT Institutional Training Team</p>
  `;

  const managerHtml = `
    <p>A new proposal request has been submitted.</p>
    <p><strong>Contact details</strong></p>
    <ul>
      <li><strong>Organisation:</strong> ${organisation}</li>
      <li><strong>Sector:</strong> ${sector}</li>
      <li><strong>Participants:</strong> ${participants}</li>
      <li><strong>Preferred Programme Area:</strong> ${programmeArea}</li>
      <li><strong>Location:</strong> ${location}</li>
      <li><strong>Mode:</strong> ${mode}</li>
      <li><strong>Expected Date:</strong> ${expectedDate}</li>
      <li><strong>Contact Person:</strong> ${contactPerson}</li>
      <li><strong>Email:</strong> ${userEmail}</li>
      <li><strong>Phone / WhatsApp:</strong> ${phone}</li>
    </ul>
  `;

  try {
    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: userEmail,
        subject: "AIBT Proposal Request Received",
        html: customerHtml,
      }),
      resend.emails.send({
        from: fromEmail,
        to: trainingManagerEmail,
        subject: "New Training Proposal Request Submitted",
        html: managerHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Request proposal email error", error);
    return NextResponse.json(
      { error: "Unable to send proposal request emails." }, 
      { status: 500 }
    );
  }
}
