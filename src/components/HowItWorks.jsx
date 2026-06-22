"use client";

const steps = [
  {
    icon: "📋",
    num: "Step 01",
    title: "Candidate applies",
    desc: "Candidate creates a profile, uploads their resume, and applies to a role. The platform scores their profile instantly — skills match, completeness, and role fit — before they even start an interview.",
    who: "candidate",
    whoLabel: "Candidate",
  },
  {
    icon: "🤖",
    num: "Step 02",
    title: "AI-conducted interview",
    desc: "An AI interviewer runs a structured, role-specific interview — adaptive questions, real-time follow-ups, and a coding or task challenge where relevant. Async or live. No scheduling back-and-forth.",
    who: "candidate",
    whoLabel: "Candidate",
  },
  {
    icon: "📊",
    num: "Step 03",
    title: "AI scoring & notes",
    desc: "The AI generates a full scorecard — communication, technical accuracy, problem-solving, attitude — with timestamped interview notes. Every decision is explainable and auditable. No black box.",
    who: "ai",
    whoLabel: "AI System",
  },
  {
    icon: "🗂️",
    num: "Step 04",
    title: "Employer reviews dashboard",
    desc: "Employers see a ranked shortlist with full scorecards, interview transcripts, and AI confidence scores — all in one dashboard. Compare candidates side-by-side. Move them through pipeline stages in one click.",
    who: "employer",
    whoLabel: "Employer",
  },
  {
    icon: "💬",
    num: "Step 05",
    title: "Candidate receives feedback",
    desc: "Win or lose, every candidate gets a structured feedback report — what scored well, what to improve, and a personalized upskilling roadmap. The first hiring platform where rejection still adds value.",
    who: "candidate",
    whoLabel: "Candidate",
  },
  {
    icon: "🤝",
    num: "Step 06",
    title: "Offer extended",
    desc: "Employer sends an offer directly through the platform. Candidate accepts, declines, or negotiates — all tracked. Both sides get a verified record of the hiring process.",
    who: "both",
    whoLabel: "Both",
    isFinal: true,
  },
];

const whoStyles = {
  candidate: "text-[rgb(var(--primary-color))] bg-[rgb(var(--primary-color))]/10 border border-[rgb(var(--primary-color))]/20",
  employer:  "text-[#a0b4ff] bg-[#a0b4ff]/10 border border-[#a0b4ff]/20",
  ai:        "text-yellow-300 bg-yellow-300/10 border border-yellow-300/20",
  both:      "text-yellow-300 bg-yellow-300/10 border border-yellow-300/20",
};

export default function HowItWorksSection() {
  return (
    <section
      className="relative flex overflow-hidden py-20 items-center justify-center min-h-[150vh]"
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgb(255 255 255) 0%,
            rgb(56 199 142) 6%,
            rgb(3 9 20) 15%,
            rgb(3 9 20) 85%,
            rgb(56 199 142) 94%,
            rgb(255 255 255) 100%
          )
        `,
      }}
    >
      {/* STAR AREA */}
      <div className="absolute opacity-35 left-0 right-0 top-[15%] h-[70%] overflow-hidden pointer-events-none">
        {[...Array(120)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              // eslint-disable-next-line react-hooks/purity
              width: `${Math.random() * 3 + 1}px`,
              // eslint-disable-next-line react-hooks/purity
              height: `${Math.random() * 3 + 1}px`,
              // eslint-disable-next-line react-hooks/purity
              top: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              left: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
        <span className="sparkle-star top-[10%] left-[12%]" />
        <span className="sparkle-star top-[22%] right-[18%]" />
        <span className="sparkle-star top-[45%] left-[28%]" />
        <span className="sparkle-star top-[70%] right-[22%]" />
        <span className="sparkle-star top-[58%] left-[70%]" />
        <span className="sparkle-star top-[30%] left-[50%]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto px-4 w-full">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-6 bg-[rgb(var(--primary-color))]/40" />
          <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-[rgb(var(--primary-color))]">
            How it works
          </span>
          <div className="h-px w-6 bg-[rgb(var(--primary-color))]/40" />
        </div>

        {/* Headline */}
        <h2 className="text-center text-3xl font-medium text-white leading-snug tracking-tight mb-3">
          The full hiring journey,{" "}
          <span className="text-[rgb(var(--primary-color))]">start to offer.</span>
        </h2>

        <p className="text-center text-sm text-white/40 leading-relaxed max-w-sm mb-16">
          One seamless pipeline. Every step tracked, scored, and transparent — for both sides.
        </p>

        {/* PIPELINE */}
        <div className="w-full flex flex-col">
          {steps.map((step, i) => (
            <div key={i} className="grid gap-x-5" style={{ gridTemplateColumns: "48px 1fr" }}>

              {/* Left: node + connector */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-sm border border-white/10 bg-white/[0.04] flex items-center justify-center text-lg flex-shrink-0 hover:border-[rgb(var(--primary-color))]/40 hover:bg-[rgb(var(--primary-color))]/5 transition-all">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[20px] bg-white/[0.08] my-1" />
                )}
              </div>

              {/* Right: content */}
              <div className={`pt-2.5 ${i < steps.length - 1 ? "pb-8" : "pb-0"}`}>
                <p className="text-[10px] font-medium tracking-[0.08em] uppercase text-white/25 mb-1.5">
                  {step.num}
                </p>
                <h3 className="text-base font-medium text-white mb-1.5 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed max-w-lg">
                  {step.desc}
                </p>
                {step.isFinal && (
                  <div className="mt-3 inline-flex items-center gap-2 border border-[rgb(var(--primary-color))]/30 bg-[rgb(var(--primary-color))]/5 rounded-sm px-4 py-2.5 text-[13px] text-[rgb(var(--primary-color))] font-medium">
                    ✦ Hire complete — both sides close the loop
                  </div>
                )}
                <div className={`mt-2.5 inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.05em] uppercase px-2.5 py-1 rounded-full ${whoStyles[step.who]}`}>
                  <span className="w-1 h-1 rounded-full bg-current" />
                  {step.whoLabel}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}