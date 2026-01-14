import React, { useState } from "react";
import { Link } from "react-router-dom";
import servicesData from "../data/services";
import CardCustom from "../components/ui/CardCustom.jsx";
import InputCustom from "../components/ui/InputCustom.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

function ServicesPage() {
  const [query, setQuery] = useState("");

  const filtered = servicesData.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <div className="flex items-center justify-between gap-4 mb-4">
        <SectionHeader
          align="left"
          title="Dental services"
          subtitle="Browse some of the key treatments and dental services supported."
        />
        <div className="w-56">
          <InputCustom
            name="search"
            placeholder="Search services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((service) => (
          <CardCustom key={service.id} className="overflow-hidden flex flex-col">
            <img
              src={service.image}
              alt={service.name}
              className="h-32 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-sm font-semibold text-slate-900">
                {service.name}
              </h3>
              <p className="mt-1 text-xs text-slate-600 line-clamp-3">
                {service.shortDescription}
              </p>
              <p className="mt-2 text-xs text-sky-700 font-semibold">
                From ₹{service.priceFrom}
              </p>
              <Link
                to={`/services/${service.id}`}
                className="mt-3 text-xs font-medium text-sky-600 hover:text-sky-700"
              >
                Learn more →
              </Link>
            </div>
          </CardCustom>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
