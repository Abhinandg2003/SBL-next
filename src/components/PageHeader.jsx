export default function PageHeader({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b bg-[rgb(var(--bg))]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-amber-500/20 to-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-sky-500/15 to-emerald-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
