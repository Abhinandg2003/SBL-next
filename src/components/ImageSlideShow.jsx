"use client";

import { useEffect, useState } from "react";

const slideshowImages = [
  "/images/Slide1 comp.jpg",
  "/images/Slide2 comp.jpg",
  "/images/Slide3 comp.jpg",
];

export default function ImageSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-xl">
      <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-[rgb(var(--text))]/20 bg-[rgb(var(--color-primary))]/10 shadow-sm">
        {slideshowImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Unity Heights ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* bottom fade overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg))]/80 via-transparent to-transparent" />

        {/* dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slideshowImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 w-2 rounded-full transition ${
                active === i
                  ? "bg-[rgb(var(--color-secondary))]"
                  : "bg-[rgb(var(--text))]/30 hover:bg-[rgb(var(--text))]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
