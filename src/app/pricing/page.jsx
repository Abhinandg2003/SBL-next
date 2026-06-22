"use client";

import PricingPlans from "@/components/Pricingplans";


export default function Pricing() {
  return (
    <div className="w-full">
      <div className="flex h-[35vh] mt-[20vh] justify-center items-center">
        <h1 className="text-center mt-0 text-5xl md:text-6xl lg:text-[65px]     tracking-tight leading-[1.05]">
          Choose the <span className="text-[rgb(var(--primary-color))] font-departure  font-black">perfect plan </span> <br /> for your journey
        </h1>
      </div>

      {/* <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyUsPoints.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <PricingPlans/>
    </div>
  );
}
