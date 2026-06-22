"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
];

export default function ImageShowcase() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // auto update active dot on scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const cardWidth = el.firstChild?.getBoundingClientRect().width || 1;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActive(index);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (index) => {
    const el = trackRef.current;
    if (!el) return;

    const cardWidth = el.firstChild?.getBoundingClientRect().width || 0;
    el.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="pb-16 bg-[rgb(var(--bg))]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}


        {/* MOBILE: Carousel */}
        <div className="lg:hidden">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {images.map((src, i) => (
              <div
                key={src}
                className="min-w-[85%] sm:min-w-[70%] snap-center  overflow-hidden "
              >
                <img
                  src={src}
                  alt={`Project ${i + 1}`}
                  className="h-[320px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Dots */}

        </div>

        {/* DESKTOP: Collage (5 images, center big, sides stacked) */}
<div className="hidden lg:block">
  <div className="overflow-hidden">
    <div className="grid grid-cols-12 gap-2">
      
      {/* LEFT COLUMN (2 stacked) */}
<div className="col-span-3 grid grid-rows-2 gap-2 h-[520px]">
  <div className="overflow-hidden">
    <img
      src={images[1]}
      alt="Project"
      className="h-full w-full object-cover hover:scale-105 transition "
      loading="lazy"
    />
  </div>

  <div className="overflow-hidden">
    <img
      src={images[2]}
      alt="Project"
      className="h-full w-full object-cover hover:scale-105 transition"
      loading="lazy"
    />
  </div>
</div>

{/* CENTER BIG IMAGE */}
<div className="col-span-6 overflow-hidden">
  <img
    src={images[0]}
    alt="Featured Project"
    className="h-[520px] w-full object-cover hover:scale-105 transition"
    loading="lazy"
  />
</div>

{/* RIGHT COLUMN (2 stacked) */}
<div className="col-span-3 grid grid-rows-2 gap-2 h-[520px]">
  <div className="overflow-hidden">
    <img
      src={images[3]}
      alt="Project"
      className="h-full w-full object-cover hover:scale-105 transition"
      loading="lazy"
    />
  </div>

  <div className="overflow-hidden">
    <img
      src={images[4]}
      alt="Project"
      className="h-full w-full object-cover hover:scale-105 transition"
      loading="lazy"
    />
  </div>
</div>


    </div>
  </div>
</div>

      </div>
    </section>
  );
}
