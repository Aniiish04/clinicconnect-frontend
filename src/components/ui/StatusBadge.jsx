import React from "react";

function StatusBadge({ status }) {
  const map = {
    PENDING: "bg-amber-50 text-amber-700 border-amber-200",
    CONFIRMED: "bg-emerald-50 text-emerald-700 border-emerald-200",
    CANCELLED: "bg-red-50 text-red-700 border-red-200",
    COMPLETED: "bg-sky-50 text-sky-700 border-sky-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        map[status] || "bg-slate-50 text-slate-700 border-slate-200"
      }`}
    >
      {status || "UNKNOWN"}
    </span>
  );
}

export default StatusBadge;
