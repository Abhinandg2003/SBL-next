"use client";

import { useState } from "react";

export default function LogoReveal() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full select-none"
    >
      {/* Filled version */}
      <img
        src="/images/learningfill.svg"
        alt=""
        draggable={false}
        className="w-full block transition-opacity duration-200"
        style={{
  opacity: hovered ? 1 : 0,

  WebkitMaskImage: `radial-gradient(
    circle 280px at ${pos.x}% ${pos.y}%,
    rgba(255,255,255,0.1) 0%,
    transparent 100%
  )`,

  maskImage: `radial-gradient(
    circle 280px at ${pos.x}% ${pos.y}%,
    rgba(255,255,255,0.1) 0%,
    transparent 100%
  )`,
}}
      />

      {/* Stroke version */}
      <img
        src="/images/learningfill.svg"
        alt=""
        draggable={false}
        className="absolute inset-0 w-full pointer-events-none opacity-3"
      />
    </div>
  );
}