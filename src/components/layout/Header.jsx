"use client";

import NavLink from "@/components/Navlink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Products", path: "/products" },
  { name: "Solutions", path: "/solutiond" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Human Data", path: "/human data" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const handleNavClick = (path) => {
  if (pathname === path) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  setOpen(false);
};

  const scrollToConsultation = () => {
    setOpen(false);

    setTimeout(() => {
      const section = document.getElementById("consultation");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <header
      className="
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300
    bg-[rgb(var(--bg))]/80 backdrop-blur-xl "
    >
      <div className="mx-[3%] py-3">
        <div className="relative flex items-center justify-between">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-3">
            <NavLink href="/" onClick={() => handleNavClick("/")}>
              <div className="logo h-10 w-40 bg-contain  mr-10 bg-no-repeat bg-left logo-black" />
            </NavLink>

            <div className="hidden md:flex items-center gap-10">
              <nav className="flex items-center gap-8 text-[16px] font-medium">
                {navItems.map((item) => (
                  <NavLink
  key={item.path}
  href={item.path}
  onClick={() => handleNavClick(item.path)}
  className="relative pb-1 transition"
>
  {item.name}
</NavLink>
                ))}
              </nav>
            </div>
          </div>

          

          {/* RIGHT NAV */}

          <div className="hidden md:flex items-center gap-4">
            <button className="btn-outline-primary px-4 py-2">
              Sign in
            </button>

            <button className="btn-primary px-4 py-2">
              Sign up
            </button>
          </div>

          {/* MOBILE BURGER */}
          <button
            onClick={() => setOpen(!open)}
            className={`
          md:hidden inline-flex items-center justify-center  px-3 py-2 text-xl font-medium transition
          ${scrolled ? "bg-[rgb(var(--bg-dark))]/0 text-black" : " text-white"}
        `}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed left-0 right-0 top-[72px] z-[999] bg-[rgb(var(--bg))]/95 backdrop-blur-2xl shadow-xl">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
  key={item.path}
  href={item.path}
  onClick={() => handleNavClick(item.path)}
  className="relative pb-1 transition"
>
  {item.name}
</NavLink>
            ))}

            <button
              className="rounded-2xl px-4 py-2 text-sm font-medium text-white bg-[rgb(var(--bg-dark))] hover:opacity-90 transition"
              onClick={scrollToConsultation}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
