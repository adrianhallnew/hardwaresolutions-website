import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { services } from "@/content/services";

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  { value: "other" as const, label: "Other" },
];

const serviceValues = serviceOptions.map((o) => o.value) as [string, ...string[]];

const NAME_PATTERN = /^[\p{L}\p{M}' .-]{2,100}$/u;

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .regex(NAME_PATTERN, "Enter a valid name (letters, spaces, hyphens, apostrophes only)"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .refine((val) => isValidPhoneNumber(val), "Enter a valid phone number, including country code"),
  service: z.enum(serviceValues, { error: "Select a service" }),
  message: z.string().trim().min(1, "Message is required"),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
