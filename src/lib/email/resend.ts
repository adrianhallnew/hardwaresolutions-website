import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EnquiryEmailInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export async function sendEnquiryEmail(input: EnquiryEmailInput, to: string) {
  const { data, error } = await resend.emails.send({
    from: `Hardware Solutions <${process.env.CONTACT_FROM_EMAIL}>`,
    to: [to],
    replyTo: input.email,
    subject: `New enquiry from ${input.name}`,
    text: [
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Phone: ${input.phone}`,
      `Service: ${input.service}`,
      "",
      "Message:",
      input.message,
    ].join("\n"),
    html: [
      `<p><strong>Name:</strong> ${escapeHtml(input.name)}</p>`,
      `<p><strong>Email:</strong> ${escapeHtml(input.email)}</p>`,
      `<p><strong>Phone:</strong> ${escapeHtml(input.phone)}</p>`,
      `<p><strong>Service:</strong> ${escapeHtml(input.service)}</p>`,
      `<p><strong>Message:</strong></p>`,
      `<p>${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>`,
    ].join("\n"),
  });

  return { data, error };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
