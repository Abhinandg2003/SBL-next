"use client";

import { useEffect, useState } from "react";
import LogoStrip from "@/components/Logostrip";
import FAQdark from "@/components/Faqdark";

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
      <label className="text-md  text-white">
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
    "text-white/60",
    "outline-none transition",
    hasError
      ? "border-red-500/60"
      : "border-white/20",
    "focus:border-[rgb(var(--color-primary))]/70",
  ].join(" ");
}

// ─── Main Component ────────────────────────────────────────────────────────────

const EMPTY_FORM = { name: "", email: "", phone: "", details: "" };




const faqs = [
  {
    q: "What type of projects do you handle?",
    a: "We specialize in premium residential and commercial construction, including turnkey projects from planning to final handover.",
  },
  {
    q: "Do you provide turnkey construction services?",
    a: "Yes. We manage the complete project end-to-end, including materials, skilled labor, supervision, and timely delivery.",
  },
  {
    q: "How do you ensure quality and safety?",
    a: "We follow strict quality checks, use reliable materials, and ensure safe site practices at every stage of construction.",
  },
  {
    q: "Can I customize the design as per my needs?",
    a: "Absolutely. We work closely with you to match your vision, budget, and functional requirements with transparent planning.",
  },
  {
    q: "What makes Unity Heights Constructions different from others?",
    a: "Our focus on premium-quality materials, transparent pricing, strict safety standards, and single-point accountability sets us apart. We combine professional management with hands-on supervision to deliver reliable, long-lasting results.",
  },
  {
    q: "How can I get a quote or start a project?",
    a: "Just click “Get in Touch” and share your requirements. We’ll schedule a call or site visit and provide a clear, detailed estimate.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full text-left rounded-sm border border-[rgb(var(--text))]/20 bg-[rgb(var(--bg))]/40 p-5 transition hover:bg-[rgb(var(--text))]/5"
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-base sm:text-lg font-semibold text-[rgb(var(--text))]">
          {item.q}
        </h4>

        <span
          className={`text-xl text-[rgb(var(--text))]/70 transition-transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          ›
        </span>
      </div>

      {isOpen && (
        <p className="mt-3 text-sm sm:text-base text-[rgb(var(--text))]/75 leading-relaxed max-w-3xl">
          {item.a}
        </p>
      )}
    </button>
  );
}

export default function Contact() {

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
        "https://formsubmit.co/ajax/abhinandg2003@gmail.com",
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


  

  const [openIndex, setOpenIndex] = useState(null);

  const scrollToConsultation = () => {
    const section = document.getElementById("consultation");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full  ">
      {/* HERO */}
      <section className="relative overflow-hidden sm:px-5 px-10  bg-white">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Green blob */}
          <div className="absolute -top-60 left-1/3 w-[35rem] h-[35rem] rounded-full bg-blue-400/5 blur-[140px]" />

          {/* Red blob */}
          <div className="absolute bottom-20 right-[-10rem] w-[30rem] h-[30rem] rounded-full bg-red-400/10 blur-[140px]" />

          {/* Small green accent */}
        </div>

        <div className="grid grid-cols-1  min-h-[100vh]  relative lg:grid-cols-2 gap-20 px-0 lg:px-30 p-10 ">
          <div className="flex-col mt-30  justify-center items-center ">
            <h1 className=" text-left  mt-0 text-5xl md:text-[70px] lg:text-6  mb-5   tracking-tight leading-[1.05] text-black">
              Don't hesitate to <br />
              <span className="text-[rgb(var(--primary-color))] font-medium  ">
                {" "}
                Reach out{" "}
              </span>
            </h1>

            <p className=" max-w-md text-xl my-5 mb-10 tracking-wide leading-7">
              Whether you're hiring top talent or showcasing your potential,
              we're here to help every step of the way.
            </p>

            <div className="w-[50%] h-17 relative p-2 r flex   justify-start items-center ">
              <a href="form" className="btn-primary mr-5 text-lg py-2.5">
                Get in touch
              </a>
            </div>
          </div>

          <div className="h-full relative overflow-hidden flex my-auto rounded-lg  object-cover  justify-center items-center">
            <img src="/images/contact.png" alt="" />
          </div>
        </div>
      </section>

      <LogoStrip />

      <div
        className="mt-30  py-20"
        style={{
          background: `
      linear-gradient(
        to bottom,

        rgb(255 255 255) 0%,

        rgb(88 86 201) 6%,

        rgb(3 9 20) 15%,

        rgb(3 9 20) 85%,

        rgb(3 9 20) 94%,

        rgb(3 9 20) 100%
      )
    `,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-30" id="consultation">
                <div className="rounded-sm border border-white/20  p-8 sm:p-10 shadow-sm">
        
                  {/* Header */}
                  <h3 className="text-4xl font-medium tracking-tight text-white">
                    Ask us Anything
                  </h3>
                  <p className="mt-3 text-white/80 text-lg">
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
                      <label className="text-md font-medium text-white">
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
                          "placeholder:text-white/60 resize-none",
                        ].join(" ")}
                      />
                      {errors.details ? (
                        <p className="text-md text-red-500">{errors.details}</p>
                      ) : (
                        <p className="text-md text-white/60">
                          Minimum 10 characters
                        </p>
                      )}
                    </div>
        
                    {/* Submit row — full width */}
                    <div className="lg:col-span-2 flex flex-col gap-3 items-start">
                      <button className="btn-outline-secondary" disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit Request"}
                      </button>
        
                      {showSuccess && (
                        <p className="text-md font-medium text-green-600">
                          Your message has been sent successfully. We'll contact you
                          shortly.
                        </p>
                      )}
        
                      <p className="text-md text-white/60 mt-2 sm:mt-3">
                        We respect your privacy. Your details are used only for
                        contacting you.
                      </p>
                    </div>
                  </form>
        
                </div>
              </div>


      </div>

      <FAQdark />
    </div>
  );
}
