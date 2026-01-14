import React from "react";

function InputCustom({
  label,
  name,
  type = "text",
  error,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 ${
          error ? "border-red-400" : "border-slate-300"
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default InputCustom;
