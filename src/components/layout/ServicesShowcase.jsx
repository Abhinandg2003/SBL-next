"use client";

import { useEffect, useRef, useState } from "react";

const images = [
    "/images/cons/cons1.jpg",
    "/images/cons/cons2.jpg",
    "/images/cons/cons3.jpg",
    "/images/cons/cons4.jpg",
    "/images/cons/cons1.jpg",
];

export default function ServicesShowcase() {
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
        <section className="pb-16 pt-7 bg-[rgb(var(--bg))]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}


                {/* MOBILE: Carousel */}
                <div className="lg:hidden">

                    <div>

                                    <h3 className=" text-3xl md:text-4xl font-semibold tracking-tight text-[rgb(var(--text))]">
                                        Our Services
                                    </h3>

                                    <p className="mt-5 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Premium Residential Construction (Villas, Independent Homes, Apartments)
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Commercial Construction (Office Spaces, Retail Outlets, Warehouses)
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Turnkey Project Execution
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Renovation & Remodeling Works
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Interior & Exterior Finishing
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Structural Works & RCC Construction
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md pb-16">
                                        • Project Management & Contract-Based Execution
                                    </p>
                                    
                                </div>
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



                            {/* CENTER BIG IMAGE */}
                            <div className="col-span-6 overflow-hidden">
                                <div>

                                    <h3 className="mt-20 text-3xl md:text-4xl font-semibold tracking-tight text-[rgb(var(--text))]">
                                        Our Services
                                    </h3>

                                    <p className="mt-5 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Premium Residential Construction (Villas, Independent Homes, Apartments)
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Commercial Construction (Office Spaces, Retail Outlets, Warehouses)
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Turnkey Project Execution
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Renovation & Remodeling Works
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Interior & Exterior Finishing
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Structural Works & RCC Construction
                                    </p>

                                    <p className="mt-4 text-[rgb(var(--text))]/75 leading-relaxed text-md">
                                        • Project Management & Contract-Based Execution
                                    </p>
                                    
                                </div>
                            </div>

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
