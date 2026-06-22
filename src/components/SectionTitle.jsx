"use client";

export default function SectionTitle({ badge, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {badge && (
        <div className="inline-flex items-center gap-2 rounded-full border bg-[rgb(var(--bg))]/70 px-4 py-2 text-xs text-[rgb(var(--text))]/75 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {badge}
        </div>
      )}

      <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-[rgb(var(--text))]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-[rgb(var(--text))]/75 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
