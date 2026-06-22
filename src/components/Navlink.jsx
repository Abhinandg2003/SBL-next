// src/components/Navlink.jsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  className = "",
  onClick,
}) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} ${
        isActive
          ? "text-[rgb(var(--primary-color))]"
          : "text-black hover:text-[rgb(var(--primary-color))]"
      }`}
    >
      {children}
    </Link>
  );
}