import React from "react";

function SectionHeader({ title, subtitle, align = "center" }) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <div className={`flex flex-col gap-1 ${alignment}`}>
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      {subtitle && (
        <p className="text-sm text-slate-500 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeader;
