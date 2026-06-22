"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
        />
      </svg>
    ),
    title: "Intelligent Dashboard",
    description:
      "Track every candidate's journey with real-time behavioural scores.",
    gradient: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,7,1))",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Anti-Cheat System",
    description:
      "Multi-layer fraud detection monitors to ensure every interview is authentic.",
    gradient: "linear-gradient(to bottom, rgba(0,0,7,1), rgba(1,1,11,1))",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
        />
      </svg>
    ),
    title: "Automated Scoring",
    description: "Every response is scored across 12 behavioural dimensions.",
    gradient: "linear-gradient(to bottom, rgba(1,1,11,1), rgba(2,2,22,1))",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    title: "Smart Shortlisting",
    description: "AI ranks candidates by role-fit and culture alignment.",
    gradient: "linear-gradient(to bottom, rgba(2,2,22,1), rgba(3,3,33,1))",
  },
];

export default function DecodedSection() {
  const pinWrapRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const cards = cardsRef.current.filter(Boolean);

    // hide all cards before animation
    gsap.set(cards, { opacity: 0, y: 40 });

    // one timeline, scrub:true ties every frame to scroll position
    const tl = gsap.timeline();

    // each card gets a 1-unit slot in the timeline
    cards.forEach((card) => {
      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
      });
    });

    tl.to({}, { duration: 1.5 });

    ScrollTrigger.create({
      trigger: pinWrapRef.current,
      pin: true,
      // pin starts when top of the pinned element is 20% from top of screen
      start: "top 10%",
      // total scroll distance = number of cards × 300px per card
      end: `+=${cards.length * 600}`,
      // scrub:1 = animations are 1:1 with scroll, with 1s smoothing lag
      scrub: 1,
      animation: tl,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <section className="relative px-6" style={{ background: "#030914" }}>
      {/* Heading scrolls away before pin starts */}
      <div className="max-w-5xl mx-auto pt-[120px] pb-16 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-medium leading-tight">
          Every signal,{" "}
          <span className="text-[rgb(var(--primary-color))] font-departure">
            decoded
          </span>
        </h2>
        <p className="mt-5 text-white/60 font-light leading-relaxed text-lg max-w-lg mx-auto">
          From the moment a candidate starts speaking, our AI captures what
          resumes never could.
        </p>
      </div>

      {/* ── pinWrapRef: GSAP pins this whole block ── */}
      <div ref={pinWrapRef} className="w-full pb-[120px]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Left big card */}
          <div
            className="lg:col-span-3 group relative rounded-sm p-8 md:px-10 flex flex-col justify-between overflow-hidden transition-all duration-500"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary-color))]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="absolute left-0 top-0 -z-[2] scale-[1.2] group-hover:scale-[2.3] transition-all duration-300">
                <img src="/images/gradients/blue2.png" alt="" />
              </div>

              <h3 className="text-white text-2xl md:text-3xl font-medium leading-tight -mt-2 mb-8">
                AI Expression & Psychology Engine
              </h3>

              <img
                className="w-full rounded-lg mb-3 object-cover"
                src="/gif/test.gif"
                alt=""
              />
            </div>

            <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Micro-expression tracking (7 emotions)",
                "Voice sentiment analysis",
                "Cognitive load monitoring",
                "Real-time confidence scoring",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <svg
                    className="w-4 h-4 text-[rgb(var(--primary-color))] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-md font-light text-white/60">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <span className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[rgb(var(--primary-color))] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-[rgb(var(--primary-color))] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Right stack */}
          <div className="lg:col-span-2 flex flex-col gap-2 justify-between">
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative rounded-sm p-6 transition-all duration-300 hover:bg-white/[0.03]"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: `
      ${feature.gradient},
      rgba(255,255,255,0.02)
    `,
                }}
              >
                <div className="flex items-start gap-4 my-1">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-white/[0.04] text-[rgb(var(--primary-color))] flex-shrink-0 group-hover:bg-[rgb(var(--primary-color))]/10 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-[18px] font mb-1.5">
                      {feature.title}
                    </h4>
                    <p className="text-white/60 font-light text-md leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgb(var(--primary-color))]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
