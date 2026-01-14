import React from "react";
import dentists from "../data/dentists";
import CardCustom from "../components/ui/CardCustom.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

function DentistsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <SectionHeader
        align="left"
        title="Meet the dentists"
        subtitle="Sample data representing multiple dentists in a clinic using ClinicConnect."
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {dentists.map((d) => (
          <CardCustom key={d.id} className="p-4">
            <img
              src={d.image}
              alt={d.name}
              className="mb-3 h-20 w-20 rounded-full object-cover"
            />
            <h3 className="text-sm font-semibold text-slate-900">{d.name}</h3>
            <p className="text-xs text-sky-600 mb-1">{d.role}</p>
            <p className="text-xs text-slate-500">
              {d.specialty} • {d.experience}
            </p>
          </CardCustom>
        ))}
      </div>
    </div>
  );
}

export default DentistsPage;
