"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const cursorRef = useRef(null);
  const ellipseRef = useRef(null);

  const hovering = useRef(false);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const current = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const lastCurrent = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const rotation = useRef(0);
  const stretch = useRef(0);
  const velocityRef = useRef(0);
  const hoverScale = useRef(1);

  useEffect(() => {
    document.body.style.cursor = "none";

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(${e.clientX}px, ${e.clientY}px, 0)
          translate(-50%, -50%)
        `;
      }
    };

    window.addEventListener("mousemove", move);

    const enter = () => {
      hovering.current = true;
    };

    const leave = () => {
      hovering.current = false;
    };

    const interactive = document.querySelectorAll(
      "a, button, [data-cursor]"
    );

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    let raf;

    const animate = () => {
      // Smooth cursor follow
      const followSpeed = 0.1;

      current.current.x +=
        (mouse.current.x - current.current.x) *
        followSpeed;

      current.current.y +=
        (mouse.current.y - current.current.y) *
        followSpeed;

      // Direction from cursor movement
      const dx =
        current.current.x - lastCurrent.current.x;

      const dy =
        current.current.y - lastCurrent.current.y;

      const velocity = Math.sqrt(
        dx * dx + dy * dy
      );

      // Smooth velocity
      velocityRef.current +=
        (velocity - velocityRef.current) * 0.15;

      // Direction angle
      const targetRotation =
        Math.atan2(dy, dx) * (180 / Math.PI);

      // Proper shortest-angle interpolation
      let delta =
        targetRotation - rotation.current;

      delta = ((delta + 180) % 360) - 180;

      rotation.current += delta * 0.12;

      // Stretch amount
      const targetStretch = Math.min(
        velocityRef.current * 0.04,
        0.25
      );

      stretch.current +=
        (targetStretch - stretch.current) * 0.12;

      // Smooth hover scale
      const targetHoverScale =
        hovering.current ? 1.3 : 1;

      hoverScale.current +=
        (targetHoverScale - hoverScale.current) *
        0.12;

      // SVG ellipse size
      const rx =
        18 *
        hoverScale.current *
        (1 + stretch.current);

      const ry =
        18 *
        hoverScale.current *
        (1 - stretch.current * 0.45);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(
            ${current.current.x}px,
            ${current.current.y}px,
            0
          )
          translate(-50%, -50%)
          rotate(${rotation.current}deg)
        `;
      }

      if (ellipseRef.current) {
        ellipseRef.current.setAttribute(
          "rx",
          rx.toString()
        );

        ellipseRef.current.setAttribute(
          "ry",
          ry.toString()
        );
      }

      lastCurrent.current.x = current.current.x;
      lastCurrent.current.y = current.current.y;

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.body.style.cursor = "auto";

      cancelAnimationFrame(raf);

      window.removeEventListener(
        "mousemove",
        move
      );

      interactive.forEach((el) => {
        el.removeEventListener(
          "mouseenter",
          enter
        );

        el.removeEventListener(
          "mouseleave",
          leave
        );
      });
    };
  }, []);

  return (
    <>
      {/* Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "999px",
          background: "#fff",
          opacity: 0.85,
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />

      {/* SVG Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{
          width: "60px",
          height: "60px",
          opacity: 0.6,
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{
            overflow: "visible",
          }}
        >
          <defs>
            <filter id="cursorBlur">
              <feGaussianBlur stdDeviation="0.3" />
            </filter>
          </defs>

          <ellipse
            ref={ellipseRef}
            cx="30"
            cy="30"
            rx="18"
            ry="18"
            fill="none"
            stroke="white"
            strokeWidth="1"
            filter="url(#cursorBlur)"
          />
        </svg>
      </div>
    </>
  );
}