"use client";

const tracks = [
  "Communication clarity",
  "Answer relevance to the role",
  "Problem-solving structure",
  "Consistency across responses",
  "Attitude & professionalism",
  "Technical accuracy",
];

const ignores = [
  "Accent or speech patterns",
  "Appearance or body language",
  "Gender, age, or ethnicity",
  "Educational institution name",
  "Gaps in employment history",
  "Geographic location or background",
];

const stats = [
  { num: "98%", label: "Candidate opt-in rate" },
  { num: "0",   label: "Demographic signals used" },
  { num: "100%", label: "Auditable decisions" },
];

export default function AITransparencySection() {
  return (
    <div className=" pb-20 pt-40  mt-20 " style={{
          background: `
      linear-gradient(
        to bottom,

        rgb(255 255 255) 0%,

        rgb(56 199 142) 6%,

        rgb(3 9 20) 15%,

        rgb(3 9 20) 85%,

        rgb(3 9 20) 94%,

        rgb(3 9 20) 100%
      )
    `,
        }}>

      {/* Full-bleed dark card — contrast against the white sections */}
      <div className=" max-w-6xl mx-auto  rounded-sm p-10 lg:p-16 relative overflow-hidden">

        <div className="relative z-10">
          <h2 className="text-3xl font-medium text-white leading-snug max-w-xl tracking-tight">
            Signals that matter.{" "}
            <span className="text-[rgb(var(--primary-color))]">
              Nothing that doesn't.
            </span>
          </h2>

          <p className="mt-5 text-white/50 leading-relaxed max-w-lg text-sm">
            Our AI evaluates what's relevant to the role — and only that.
            No appearance. No accent. No demographics. Just the signals
            that actually predict great work.
          </p>
        </div>

        {/* Divider */}
        <div className="relative z-10 my-12 border-t border-white/10" />

        {/* Signal tables */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Tracks */}
          <div className="border border-white/10 rounded-sm overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10 bg-green-400/5 text-green-400 text-xs font-medium tracking-widest uppercase flex items-center gap-2">
              <span>✦</span> What we track
            </div>
            {tracks.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.05] last:border-0 text-sm text-white/70 hover:bg-white/[0.02] transition-colors">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* Ignores */}
          <div className="border border-white/10 rounded-sm overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10 bg-red-400/5 text-red-400 text-xs font-medium tracking-widest uppercase flex items-center gap-2">
              <span>✕</span> What we ignore
            </div>
            {ignores.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.05] last:border-0 text-sm text-white/70 hover:bg-white/[0.02] transition-colors">
                <div className="h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom stats strip */}
        <div className="relative z-10 mt-8 border border-white/10 rounded-sm bg-white/[0.03] p-6 flex flex-wrap items-center justify-between gap-6">

          <div className="flex items-center gap-8 flex-wrap">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-white tracking-tight">{s.num}</span>
                <span className="text-xs text-white/35 uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/35 leading-relaxed max-w-xs text-right">
            Every AI decision is logged, explainable, and reviewable
            by the candidate on request.{" "}
            <a href="#" className="text-[rgb(var(--primary-color))] underline underline-offset-2">
              Read our AI methodology →
            </a>
          </p>

        </div>

      </div>
    </div>
  );
}