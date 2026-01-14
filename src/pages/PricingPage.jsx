import React from "react";
import pricing from "../data/pricing";
import CardCustom from "../components/ui/CardCustom.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import ButtonCustom from "../components/ui/ButtonCustom.jsx";
import { Link } from "react-router-dom";

function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
    <SectionHeader
      align="left"
      title="Pricing overview"
      subtitle="Indicative treatment prices. Real clinics can adapt this section to their exact prices."
    />
    <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {pricing.map((plan) => (
        <CardCustom
          key={plan.id}
          className={`p-4 flex flex-col ${
            plan.popular ? "border-sky-300 shadow-md" : ""
          }`}
        >
          {plan.popular && (
            <span className="mb-2 inline-flex w-fit rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-sky-700">
              Most popular
            </span>
          )}
          <h3 className="text-sm font-semibold text-slate-900">
            {plan.name}
          </h3>
          <p className="mt-1 text-xs text-slate-600">{plan.description}</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">
            ₹{plan.price}
          </p>
          <p className="text-[11px] text-slate-500">per session</p>
          <div className="mt-4">
            <Link to="/appointment">
              <ButtonCustom className="w-full" variant="outline">
                Book now
              </ButtonCustom>
            </Link>
          </div>
        </CardCustom>
      ))}
    </div>
  </div>
  );
}

export default PricingPage;
