// components/common/ConsultationForm.jsx
// Usage: <ConsultationForm />
// Drop-in anywhere. Requires: react-hot-toast, your Button component.

"use client";

import { useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";

// ─── Validation ────────────────────────────────────────────────────────────────

function validate(values) {
  const errors = {};

  if (!values.name.trim())
    errors.name = "Please enter your name.";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email.trim())
    errors.email = "Please enter your email.";
  else if (!emailRegex.test(values.email))
    errors.email = "Please enter a valid email address.";

  const phoneDigits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim())
    errors.phone = "Please enter your phone number.";
  else if (phoneDigits.length !== 10)
    errors.phone = "Phone number must be exactly 10 digits.";

  if (!values.details.trim())
    errors.details = "Please enter project details.";
  else if (values.details.trim().length < 10)
    errors.details = "Project details must be at least 10 characters.";

  return errors;
}

// ─── Field ─────────────────────────────────────────────────────────────────────

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[rgb(var(--text))]">
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

// ─── Input class helper ────────────────────────────────────────────────────────

function inputCls(hasError) {
  return [
    "rounded-sm border px-4 py-3",
    "bg-[rgb(var(--bg))]/60 text-[rgb(var(--text))]",
    "outline-none transition",
    hasError
      ? "border-red-500/60"
      : "border-[rgb(var(--text))]/20",
    "focus:border-[rgb(var(--color-primary))]/70",
  ].join(" ");
}

// ─── Main Component ────────────────────────────────────────────────────────────

const EMPTY_FORM = { name: "", email: "", phone: "", details: "" };

export default function ConsultationForm() {
  const [form, setForm]               = useState(EMPTY_FORM);
  const [errors, setErrors]           = useState({});
  const [submitting, setSubmitting]   = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ── Handlers ──────────────────────────────────────────────────────────────

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/[^\d]/g, "") : value,
    }));
    // Clear the error for this field as the user types
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the form errors");
      return;
    }

    setSubmitting(true);
    toast.loading("Submitting...", { id: "consultation-toast" });

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/abhinandgangadharan17@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success === "true") {
        toast.success("Request submitted successfully", {
          id: "consultation-toast",
        });
        setForm(EMPTY_FORM);
        setErrors({});
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast.error("Something went wrong. Try again", {
        id: "consultation-toast",
      });
    } finally {
      setSubmitting(false);
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <section className="pb-40">
      <div className="max-w-7xl mx-auto px-6" id="consultation">
        <div className="rounded-sm border border-[rgb(var(--text))]/20 bg-[rgb(var(--bg))]/40 p-8 sm:p-10 shadow-sm">

          {/* Header */}
          <h3 className="text-3xl font-semibold tracking-tight text-[rgb(var(--text))]">
            Request a Project Consultation
          </h3>
          <p className="mt-3 text-[rgb(var(--text-dark))] text-md">
            Share your details and project requirements — we'll get back to you
            shortly.
          </p>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Hidden formsubmit fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Name */}
            <Field label="Name" error={errors.name}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputCls(!!errors.name)}
              />
            </Field>

            {/* Email */}
            <Field label="Email" error={errors.email}>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className={inputCls(!!errors.email)}
              />
            </Field>

            {/* Phone */}
            <Field label="Phone Number" error={errors.phone}>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="10 digit phone number"
                maxLength={10}
                className={inputCls(!!errors.phone)}
              />
            </Field>

            {/* Project Details — full width */}
            <div className="flex flex-col gap-2 lg:col-span-2">
              <label className="text-sm font-medium text-[rgb(var(--text))]">
                Project Details
              </label>
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                placeholder="Tell us about your project (location, budget range, size, timeline...)"
                rows={5}
                className={[
                  inputCls(!!errors.details),
                  "placeholder:text-black/40 resize-none",
                ].join(" ")}
              />
              {errors.details ? (
                <p className="text-sm text-red-500">{errors.details}</p>
              ) : (
                <p className="text-sm text-[rgb(var(--text))]/50">
                  Minimum 10 characters
                </p>
              )}
            </div>

            {/* Submit row — full width */}
            <div className="lg:col-span-2 flex flex-col gap-3 items-start">
              <Button variant="primary" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Request"}
              </Button>

              {showSuccess && (
                <p className="text-sm font-medium text-green-600">
                  Your message has been sent successfully. We'll contact you
                  shortly.
                </p>
              )}

              <p className="text-sm text-[rgb(var(--text))]/60 mt-2 sm:mt-3">
                We respect your privacy. Your details are used only for
                contacting you.
              </p>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}