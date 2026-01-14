import React from "react";

function ButtonCustom({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-1";

  const variants = {
    primary:
      "bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500 disabled:opacity-60",
    outline:
      "border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-sky-500",
    ghost: "text-slate-600 hover:bg-slate-100 focus:ring-sky-500",
  };

  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonCustom;
