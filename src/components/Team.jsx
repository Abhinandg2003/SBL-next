// ─────────────────────────────────────────────────────────────────────────────
// TeamSection.jsx
//
// NEEDED IMPORTS in the file you paste this into:
//   import { useRef, useEffect, useState } from "react";
//
// No extra packages required — pure React + Tailwind.
// ─────────────────────────────────────────────────────────────────────────────
"use client";


import { useRef, useEffect, useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
// Replace photo paths, names, links etc. with your real data.
// `photo` should be a URL/import. `colorPhoto` is the colour version;
// `photo` is shown in greyscale by default (via CSS filter) and
// colorPhoto (or the same image without the filter) on hover.
// If you only have one photo per person, set both to the same path —
// the greyscale ↔ colour effect is handled by CSS filter, not a swap.

const team = [
  {
    name: "Arjun",
    lastname: "Krishnan",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Co-founder & CEO",
    based: "Bangalore, India",
    joined: "March 2022",
    focus: "Product vision",
    socials: {
      instagram: "https://instagram.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Priya",
    lastname: "Menon",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Co-founder & CTO",
    based: "Chennai, India",
    joined: "March 2022",
    focus: "AI & affective computing",
    socials: {
      instagram: "https://instagram.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Rahul",
    lastname: "Subramaniam",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    role: "Head of Product",
    based: "Mumbai, India",
    joined: "July 2022",
    focus: "Hiring pipeline",
    socials: {
      instagram: "https://instagram.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Nadia",
    lastname: "George",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    role: "Head of Design",
    based: "Kochi, India",
    joined: "October 2022",
    focus: "Design systems",
    socials: {
      instagram: "https://instagram.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Devika",
    lastname: "Nair",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
    role: "ML Engineer",
    based: "Hyderabad, India",
    joined: "January 2023",
    focus: "Expression",
    socials: {
      instagram: "https://instagram.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Siddharth",
    lastname: "Rao",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    role: "Backend Engineer",
    based: "Pune, India",
    joined: "March 2023",
    focus: "Infrastructure",
    socials: {
      instagram: "https://instagram.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

// ─── CARD ────────────────────────────────────────────────────────────────────
function TeamCard({ member }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group  flex-shrink-0 w-[370px] border border-black/20 rounded-[2px] overflow-hidden transition-colors duration-300 cursor-default select-none"
      
    >

        <img className="absolute h-full w-full opacity-0 group-hover:opacity-30 -z-1 transition-all duration-300" src="/images/gradients/purpledark.png" alt="" />

        <div className="absolute h-full w-full  bg-black opacity-0 group-hover:opacity-100 -z-2 transition-all duration-300"></div>

        <p className="text-[11px] font-medium tracking-wider  absolute right-5 top-5  text-black group-hover:text-white transition-all duration-300">•N° 03 — 04</p>

        
      {/* ── Photo ── */}
      <div className="p-5 pb-0">
        <img
          src={member.photo}
          alt={member.name}
          draggable={false}
          className="w-[72px] h-[90px] rounded-[2px] object-cover transition-all duration-500"
          style={{
            filter: hovered ? "none" : "grayscale(100%)",
          }}
        />
      </div>

      {/* ── Name ── */}
      <div className="px-5 pt-4">
        <p
          className="text-5xl  tracking-tight transition-colors duration-300"
          style={{ color: hovered ? "#fff" : "#000" }}
        >
          {member.name} <br />
          {member.lastname}

        </p>  
      </div>

      {/* ── Divider ── */}
      <div
        className="mx-5 mt-4 transition-colors duration-300"
        style={{
          height: "1px",
          backgroundColor: hovered ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.2)",
        }}
      />

      {/* ── Meta rows ── */}
      <div className="px-5 pt-4 flex flex-col gap-[6px]">
  {[
    ["Role", member.role],
    ["Based", member.based],
    ["Joined", member.joined],
    ["Focus", member.focus],
  ].map(([label, value]) => (
    <div key={label} className="flex gap-3 text-[15px] leading-6">
      <span
        className="font-medium min-w-[55px] uppercase"
        style={{
          color: hovered
            ? "rgba(255,255,255,0.5)"
            : "rgba(0,0,0,0.4)",
        }}
      >
        {label}
      </span>

      <span
        style={{
          color: hovered
            ? "rgba(255,255,255,1)"
            : "rgba(0,0,0,01)",
        }}
      >
        {value}
      </span>
    </div>
  ))}
</div>

      {/* ── Bottom spacing + divider ── */}
      <div className="px-5 mt-10 mb-4">
        <div
          className="transition-colors duration-300"
          style={{
            height: "1px",
            backgroundColor: hovered ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* ── Socials ── */}
      <div className="px-5 pb-5 flex items-center gap-5">
        {Object.entries(member.socials).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[15px] font-medium tracking-wide capitalize transition-all duration-200"
            style={{
              color: hovered ? "rgba(255,255,255,01)" : "rgba(0,0,0,0.8)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── SECTION ─────────────────────────────────────────────────────────────────
export default function TeamSection() {
  const trackRef = useRef(null);

  // auto-scroll state
  const posRef = useRef(0);          // current x offset (px)
  const rafRef = useRef(null);       // requestAnimationFrame id
  const SPEED = 0.3;                 // px per frame — adjust for faster/slower

  // drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const pausedRef = useRef(false);   // pause auto-scroll while dragging

  // We duplicate the team array so the carousel feels infinite
  const items = [...team, ...team, ...team];

  // ── auto-scroll loop ──
  // Store the loop function in a ref so it can safely call itself
  // without hitting the temporal dead-zone that useCallback causes.
  const tickRef = useRef(null);
  tickRef.current = () => {
    if (!trackRef.current) return;
    if (!pausedRef.current) {
      posRef.current -= SPEED;

      const track = trackRef.current;
      const setWidth = track.scrollWidth / 3; // 3 copies
      if (Math.abs(posRef.current) >= setWidth) {
        posRef.current += setWidth;
      }

      track.style.transform = `translateX(${posRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(() => tickRef.current?.());
  };

  useEffect(() => {
    rafRef.current = requestAnimationFrame(() => tickRef.current?.());
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── pointer drag ──
  const onPointerDown = (e) => {
    isDragging.current = true;
    pausedRef.current = true;
    dragStartX.current = e.clientX;
    dragStartPos.current = posRef.current;
    trackRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    posRef.current = dragStartPos.current + delta;

    // clamp within the duplicate bounds
    const track = trackRef.current;
    if (!track) return;
    const setWidth = track.scrollWidth / 3;
    if (posRef.current > 0) posRef.current -= setWidth;
    if (posRef.current < -setWidth * 2) posRef.current += setWidth;

    track.style.transform = `translateX(${posRef.current}px)`;
  };

  const onPointerUp = () => {
    isDragging.current = false;
    // small delay before re-enabling auto-scroll so it feels natural
    setTimeout(() => { pausedRef.current = false; }, 400);
  };

  return (
    <section className="py-[100px] bg-white overflow-hidden">
      {/* ── Heading ── */}
      <div className="max-w-6xl flex flex-col  items-center mx-auto px-6 mb-14">
        
        <h2 className="text-black text-3xl text-center md:text-6xl font-medium leading-tight">
          Who's{" "}
          <span
            className='font-["Departure"] font-black text-[rgb(var(--primary-color))]'

          >
            behind it
          </span>
        </h2>
        <p className="mt-4 text-black/850 text-xl text-center leading-relaxed max-w-xl">
          A small team that built from frustration — too many hiring mistakes,
          too little signal from traditional interviews.
        </p>
      </div>

      {/* ── Track ── */}
      {/* outer div clips overflow; inner track holds all cards and is translated */}
      <div
        className="w-full overflow-hidden"
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
      >
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{ width: "max-content", paddingLeft: "24px", paddingRight: "24px" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {items.map((member, i) => (
            <TeamCard key={`${member.name}-${i}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}