"use client";


export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-5 py-2 text-sm font-md transition active:scale-[0.98]";

  const variants = {
    primary:
      " rounded-sm bg-white px-4 py-2 text-md  hover:bg-[rgb(var(--bg-light))] hover:border-white transition font-md text-black   transition- border border-black   backdrop-blur-sm  transition",
    outline:
      "border border-[rgb(var(--text))]/20 bg-[rgb(var(--text))]/70  shadow-sm backdrop-blur-sm hover:bg-[rgb(var(--text))]/10  transition",
    ghost: "hover:bg-[rgb(var(--text))]/10  transition ",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
