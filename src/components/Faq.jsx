"use client";

import { useState, useRef } from "react";

const faqs = [
  {
    q: "Is this an aptitude test?",
    a: "No. Zero math. Zero trick questions. We test soft skills and attitude — how you handle real workplace situations.",
  },
  {
    q: "Does the AI judge my face/looks?",
    a: "No. It tracks confidence signals — eye contact, poise, clarity. Your appearance, age, gender? Completely ignored.",
  },
  {
    q: "How accurate is it for a new company?",
    a: "We're honest: we're new. Try us with one candidate. Judge the results yourself. Our early pilots show 89% correlation with hiring manager satisfaction.",
  },
  {
    q: "Is it free for candidates?",
    a: "Yes. Always. Candidates never pay. Employers pay — that's how we keep the lights on.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full text-left flex justify-between items-center gap-4 py-6 group"
      >
        <h3 className="text-2xl font-medium text-gray-800 group-hover:text-[rgb(var(--primary-color))] transition-colors">
          {item.q}
        </h3>
        <svg
          className="w-6 h-6 flex-shrink-0 text-gray-400 group-hover:text-[rgb(var(--primary-color))] transition-all duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* grid trick: animates from 0fr → 1fr with no JS height measuring */}
      <div
        className="grid transition-all duration-350 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden" ref={contentRef}>
          <p className="text-gray-600 pb-6 leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl text-center mb-10">
          Got{" "}
          <span className='font-["Departure"] font-black text-[rgb(var(--primary-color))]'>
            Questions?
          </span>
        </h1>

        <div className="mt-16">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}