"use client";

import { useActionState, useState } from "react";
import { submitEnquiry, type EnquiryFormState } from "@/app/contact/actions";
import { enquirySchema, serviceOptions } from "@/lib/validation/contact";
import { Button } from "../ui/Button";

const initialState: EnquiryFormState = { success: false };

type FieldName = "name" | "email" | "phone" | "service" | "message";

const emptyValues: Record<FieldName, string> = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState);
  const [values, setValues] = useState(emptyValues);
  const [blurErrors, setBlurErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [dismissed, setDismissed] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const showSuccess = state.success && !dismissed;

  // Reset "dismissed" the moment a new submission starts (not by reactively
  // detecting the state change afterward) — this runs in the submit handler,
  // not during render, so it needs no ref/effect state-sync trick.
  //
  // submitCount is used as the <select>'s key below: a native form submission
  // can reset a <select>'s DOM value even though it's React-controlled: since
  // the `value` prop itself never changes across a submission, React's diff
  // sees "no change" and skips re-touching the DOM, silently leaving whatever
  // the browser reset it to. Changing the key forces a fresh mount, which
  // always applies the current value prop regardless of prior DOM state.
  function handleSubmit(formData: FormData) {
    setSubmitCount((c) => c + 1);
    setDismissed(false);
    formAction(formData);
  }

  function updateField(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validateField(field: FieldName, value: string) {
    const shape = enquirySchema.shape[field];
    const result = shape.safeParse(value);
    setBlurErrors((prev) => ({
      ...prev,
      [field]: result.success ? undefined : result.error.issues[0]?.message,
    }));
  }

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-surface p-8 text-center opacity-0 animate-[lightbox-fade-in_var(--duration-medium)_var(--ease-out)] [animation-fill-mode:forwards]">
        <h2 className="text-h3 font-medium text-ink">Enquiry sent</h2>
        <p className="text-body text-ink-muted">We&apos;ll get back to you within 1 business day.</p>
        <Button
          variant="ghost"
          onClick={() => {
            setValues(emptyValues);
            setBlurErrors({});
            setDismissed(true);
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  // Server errors only apply to values the server actually validated — if the
  // visitor has since edited a field, its own blur error takes precedence.
  const serverError = !state.success ? state.error : undefined;
  const serverFieldErrors = !state.success ? state.fieldErrors : undefined;

  function errorFor(field: FieldName) {
    return blurErrors[field] ?? serverFieldErrors?.[field];
  }

  const fieldBaseClasses =
    "h-11 w-full rounded-md border bg-surface px-4 text-body text-ink transition-colors duration-fast ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2";

  function fieldClasses(field: FieldName) {
    return `${fieldBaseClasses} ${errorFor(field) ? "border-error" : "border-border"}`;
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-5" noValidate>
      {serverError && (
        <div className="rounded-md border border-error bg-error/5 px-4 py-3 text-body text-error">
          {serverError}
        </div>
      )}

      {/* Honeypot — visually hidden, not display:none (design.md §3.5) */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="text-body font-medium text-ink">
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          aria-required="true"
          value={values.name}
          onChange={(e) => updateField("name", e.target.value)}
          aria-describedby={errorFor("name") ? "name-error" : undefined}
          onBlur={(e) => validateField("name", e.target.value)}
          className={`mt-1 ${fieldClasses("name")}`}
        />
        {errorFor("name") && (
          <p id="name-error" role="alert" className="mt-1 text-caption text-error">
            {errorFor("name")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-body font-medium text-ink">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          value={values.email}
          onChange={(e) => updateField("email", e.target.value)}
          aria-describedby={errorFor("email") ? "email-error" : undefined}
          onBlur={(e) => validateField("email", e.target.value)}
          className={`mt-1 ${fieldClasses("email")}`}
        />
        {errorFor("email") && (
          <p id="email-error" role="alert" className="mt-1 text-caption text-error">
            {errorFor("email")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="text-body font-medium text-ink">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          aria-required="true"
          placeholder="+1 555 123 4567"
          value={values.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          aria-describedby={errorFor("phone") ? "phone-error" : undefined}
          onBlur={(e) => validateField("phone", e.target.value)}
          className={`mt-1 ${fieldClasses("phone")}`}
        />
        {errorFor("phone") && (
          <p id="phone-error" role="alert" className="mt-1 text-caption text-error">
            {errorFor("phone")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="text-body font-medium text-ink">
          Service of interest *
        </label>
        <select
          key={submitCount}
          id="service"
          name="service"
          required
          aria-required="true"
          value={values.service}
          onChange={(e) => updateField("service", e.target.value)}
          onBlur={(e) => validateField("service", e.target.value)}
          className={`mt-1 ${fieldClasses("service")}`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errorFor("service") && (
          <p role="alert" className="mt-1 text-caption text-error">
            {errorFor("service")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-body font-medium text-ink">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-describedby={errorFor("message") ? "message-error" : undefined}
          onBlur={(e) => validateField("message", e.target.value)}
          className={`mt-1 ${fieldClasses("message")}`}
        />
        {errorFor("message") && (
          <p id="message-error" role="alert" className="mt-1 text-caption text-error">
            {errorFor("message")}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" loading={isPending} className="mt-2">
        Send enquiry
      </Button>
    </form>
  );
}
