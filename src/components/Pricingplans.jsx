// PricingPlans.jsx
// Stack: React + Vite + Tailwind CSS
// Font setup required in index.html or index.css:
//   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display&display=swap');
// In tailwind.config.js add:
//   fontFamily: { sans: ['DM Sans', 'sans-serif'], serif: ['DM Serif Display', 'serif'] }
"use client";


import { useState } from "react";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function TreeIcon({ branches = 2 }) {
  // Procedural tree: trunk + N branches, each topped with a small circle head
  const cx = 28;
  const baseY = 52;
  const trunkTopY = 40;

  const configs = {
    2: [
      { dx: -13, dy: 14 },
      { dx: 13, dy: 14 },
    ],
    4: [
      { dx: -16, dy: 14 },
      { dx: -5, dy: 9 },
      { dx: 5, dy: 9 },
      { dx: 16, dy: 14 },
    ],
    6: [
      { dx: -18, dy: 13 },
      { dx: -10, dy: 9 },
      { dx: -3, dy: 6 },
      { dx: 3, dy: 6 },
      { dx: 10, dy: 9 },
      { dx: 18, dy: 13 },
    ],
  };

  const bps = configs[branches] || configs[2];
  const R = 4.5;

  return (
    <svg
      width="56"
      height="60"
      viewBox="0 0 56 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Trunk */}
      <line
        x1={cx}
        y1={baseY}
        x2={cx}
        y2={trunkTopY}
        stroke="#1C1C1A"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {bps.map(({ dx, dy }, i) => {
        const bx = cx + dx;
        const by = trunkTopY - dy;
        return (
          <g key={i}>
            <line
              x1={cx}
              y1={trunkTopY}
              x2={bx}
              y2={by}
              stroke="#1C1C1A"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle
              cx={bx}
              cy={by - R}
              r={R}
              stroke="#1C1C1A"
              strokeWidth="1.6"
              fill="none"
            />
          </g>
        );
      })}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path
        d="M3 8L6.5 11.5L13 5"
        stroke="#1C1C1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const INDIVIDUAL_PLANS = [
  {
    id: "free",
    name: "Free",
    tree:"/images/tree low.png",
    subtitle: "Discover your interview strengths",
    branches: 2,
    monthlyPrice: "₹0",
    yearlyPrice: "₹0",
    priceSuffix: null,
    cta: "Start Practicing Free",
    ctaStyle: "outline",
    hasBillingToggle: false,
    featuresHeading: null,
    features: [
  "1 AI behavioral interview",
  "Basic confidence & communication score",
  "Personal candidate dashboard",
  "Hiring readiness insights"
],
    extraCount: 6,
  },
  {
    id: "pro",
    name: "Pro",
    tree:"/images/tree mid.png",
    subtitle: "Practice. Improve. Get hired.",
    branches: 4,
    monthlyPrice: "₹200",
    yearlyPrice: "$17",
    priceSuffix: "USD / month\nbilled monthly",
    priceSuffixYearly: "USD / month\nbilled yearly",
    cta: "Get Pro plan",
    ctaStyle: "dark",
    hasBillingToggle: true,
    featuresHeading: "Everything in Free and:",
    features: [
  "Unlimited interview simulations",
  "Behavioral & communication insights",
  "Confidence trend tracking",
  "Role-specific interview scenarios"
],
    extraCount: 5,
  },
  {
    id: "max",
    name: "Max",
    tree:"/images/tree max.png",
    subtitle: "Unlock your full professional potential",
    branches: 6,
    monthlyPrice: "From ₹1000",
    yearlyPrice: "From $83",
    priceSuffix: "USD / month\nbilled monthly",
    priceSuffixYearly: "USD / month\nbilled yearly",
    cta: "Get Max plan",
    ctaStyle: "dark",
    hasBillingToggle: false,
    featuresHeading: "Everything in Pro, plus:",
    features: [
  "Deep personality & communication analysis",
  "Executive-level interview simulations",
  "Recruiter spotlight profile",
  "Priority platform access"
],
    extraCount: 0,
  },
];

const TEAM_PLANS = [
  {
    id: "starter",
    name: "Starter",
    tree:"/images/tree low.png",
    subtitle: "AI-powered hiring for growing teams",
    branches: 2,
    monthlyPrice: "₹2500",
    yearlyPrice: "$21",
    priceSuffix: "USD / seat / month\nbilled monthly",
    priceSuffixYearly: "USD / seat / month\nbilled yearly",
    cta: "Get Starter plan",
    ctaStyle: "outline",
    hasBillingToggle: true,
    featuresHeading: "Everything you need to start hiring smarter:",
    features: [
  "AI behavioral & confidence assessments",
  "Candidate scorecards and reports",
  "Centralized hiring dashboard",
  "Shortlist candidates instantly"
],
    extraCount: 3,
  },
  {
    id: "business",
    name: "Business",
    tree:"/images/tree mid.png",
    subtitle: "Advanced insights for growing organizations",
    branches: 4,
    monthlyPrice: "₹6500",
    yearlyPrice: "₹55",
    priceSuffix: "USD / seat / month\nbilled monthly",
    priceSuffixYearly: "USD / seat / month\nbilled yearly",
    cta: "Get Business plan",
    ctaStyle: "dark",
    hasBillingToggle: true,
    featuresHeading: "Everything in Starter, plus:",
    features: [
  "Advanced hiring analytics",
  "Custom assessment workflows",
  "Team collaboration & reviewer access",
  "Multi-role recruitment management"
],
    extraCount: 4,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tree:"/images/tree max.png",
    subtitle: "Advanced talent evaluation platform",
    branches: 6,
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    priceSuffix: "pricing",
    priceSuffixYearly: "pricing",
    cta: "Contact sales",
    ctaStyle: "dark",
    hasBillingToggle: false,
    featuresHeading: "Everything in Business, plus:",
    features: [
  "Custom AI evaluation models",
  "Dedicated account management",
  "Enterprise integrations & API access",
  "Advanced compliance & security"
],
    extraCount: 0,
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function BillingToggle({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center bg-[#EDEBE6] rounded-full p-[3px] gap-[2px]">
        {["Monthly", "Yearly"].map((opt) => {
          const val = opt.toLowerCase();
          const active = value === val;
          return (
            <button
              key={val}
              onClick={() => onChange(val)}
              className={`
                px-3 py-1 rounded-full text-[12px] font-medium transition-all duration-200
                ${active
                  ? "bg-white text-[#1C1C1A] shadow-sm"
                  : "text-[#888884] hover:text-[#1C1C1A]"
                }
              `}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {value === "yearly" && (
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#D6F0E3] text-[#1A6642]">
          Save 17%
        </span>
      )}
    </div>
  );
}

function PlanCard({ plan, billing, onBillingChange }) {
  const isYearly = billing === "yearly";
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const suffix = isYearly
    ? plan.priceSuffixYearly ?? plan.priceSuffix
    : plan.priceSuffix;

  return (
    <div
      className={`
        relative flex flex-col bg-[#E5E2DB]/20 rounded-lg border border-[#E5E2DB]
        px-6 pt-6 pb-7
        transition-all duration-300 ease-out
        hover:-translate-y-[6px] hover:shadow-[0_20px_48px_rgba(0,0,0,0.10)]
        cursor-default select-none
        ${plan.id === "pro" || plan.id === "business" ? "border-[#CFCBC3]" : ""}
      `}
    >
      

      {/* Tree icon */}
      <div className="mb-4">
        <img src={plan.tree} className="w-15 h-15" alt="" />
      </div>

      {/* Name + subtitle */}
      <p className=" text-[1.35rem] font-bold text-[#1C1C1A] leading-tight mb-0.5">
        {plan.name}
      </p>
      <p className="text-[14px] text-[#000]/60 font-medium mb-5 leading-snug">
        {plan.subtitle}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-1 min-h-[44px]">
        <span className="font-bold text-4xl leading-none text-[#1C1C1A] tracking-tight">
          {price}
        </span>
        {/* {suffix && (
          <span className="text-[11.5px] text-[#AEADA7] leading-[1.45] whitespace-pre-line">
            {suffix}
          </span>
        )} */}
      </div>

      {/* CTA button */}
      <button
        className='btn-primary my-5'
      >
        {plan.cta}
      </button>

      {/* Divider */}
      <div className="h-px bg-[#000]/10 mb-5" />

      {/* Features heading */}
      {plan.featuresHeading && (
        <p className="text-[14px] font-medium text-[#1C1C1A] mb-3">
          {plan.featuresHeading}
        </p>
      )}

      {/* Feature list */}
      <ul className="flex flex-col gap-[10px] mb-3">
        {plan.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-[9px]">
            <CheckIcon />
            <span className="text-[14px] text-[#3A3A36] leading-[1.45]">
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* More features */}
      {plan.extraCount > 0 && (
        <button className="text-[14px] text-[#000]/60  transition-colors duration-150 text-left mt-1 font-normal">
          +{plan.extraCount} more features
        </button>
      )}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function PricingPlans() {
  const [tab, setTab] = useState("individual"); // "individual" | "team"
  const [billing, setBilling] = useState("monthly"); // "monthly" | "yearly"

  const plans = tab === "individual" ? INDIVIDUAL_PLANS : TEAM_PLANS;

  return (
    <div
      className="min-h-screen px-6 py-14"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      

      {/* Tab toggle */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center bg-black/10  rounded-lg p-[4px] gap-[3px]">
          {[
            { id: "individual", label: "Individual" },
            { id: "team", label: "Team and Enterprise" },
          ].map(({ id, label }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`
                  px-5 py-[8px] rounded-[5px] text-[14px] font-medium
                  transition-all duration-200
                  ${active
                    ? "bg-white text-[#000] shadow-sm"
                    : "text-[#000]/60 hover:text-[#000]/60"
                  }
                `}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            billing={billing}
            onBillingChange={setBilling}
          />
        ))}
      </div>

      {/* Footnote */}
      <p className="text-center text-[14px] text-[#000]/40 font-medium mt-8 leading-relaxed">
        *
        <span className="underline underline-offset-2 decoration-[#CECC C7]">
          Usage limits apply.
        </span>{" "}
        Prices shown don't include applicable tax.
      </p>
    </div>
  );
}