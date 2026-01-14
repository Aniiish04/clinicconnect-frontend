import React from "react";
import testimonials from "../data/testimonials";
import CardCustom from "../components/ui/CardCustom.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <SectionHeader
        align="left"
        title="Testimonials"
        subtitle="Feedback from sample patients, dentists and clinic admin using this platform."
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {testimonials.map((t) => (
          <CardCustom key={t.id} className="p-4 flex gap-3">
            <img
              src={t.image}
              alt={t.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-xs text-slate-600 mb-2">
                “{t.feedback}”
              </p>
              <p className="text-xs font-semibold text-slate-900">{t.name}</p>
              <p className="text-[11px] text-slate-500">{t.role}</p>
            </div>
          </CardCustom>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsPage;
