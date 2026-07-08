"use server";

import { headers } from "next/headers";
import { enquirySchema } from "@/lib/validation/contact";
import { checkRateLimit } from "@/lib/rate-limit/contact";
import { sendEnquiryEmail } from "@/lib/email/resend";

export type EnquiryFormState =
  | { success: true }
  | { success: false; error?: string; fieldErrors?: Partial<Record<string, string>> };

export async function submitEnquiry(
  _prevState: EnquiryFormState,
  formData: FormData,
): Promise<EnquiryFormState> {
  // Honeypot check first — if populated, look identical to a real success.
  // No validation, no rate-limit consumption, no email sent.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { success: true };
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<string, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return { success: false, fieldErrors };
  }

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const { allowed } = checkRateLimit(ip);
  if (!allowed) {
    return { success: false, error: "Too many requests, try again later" };
  }

  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  if (!contactToEmail) {
    return { success: false, error: "Something went wrong, try again" };
  }

  const { name, email, phone, service, message } = parsed.data;
  const { error } = await sendEnquiryEmail({ name, email, phone, service, message }, contactToEmail);

  if (error) {
    return { success: false, error: "Something went wrong, try again" };
  }

  return { success: true };
}
