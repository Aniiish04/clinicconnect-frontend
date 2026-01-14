import React, { useState } from "react";
import faqs from "../data/faqs";
import SectionHeader from "../components/ui/SectionHeader.jsx";

function FaqPage() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
      <SectionHeader
        align="left"
        title="Frequently asked questions"
        subtitle="Common questions about how this dental appointment web app works."
      />
      <div className="mt-6 space-y-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-xl border border-slate-200 bg-white p-3"
            >
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
              >
                <span className="text-sm font-medium text-slate-900">
                  {faq.question}
                </span>
                <span className="text-xl text-slate-400">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="mt-2 text-xs text-slate-600">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FaqPage;
