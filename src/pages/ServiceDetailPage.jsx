import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../data/services";
import ButtonCustom from "../components/ui/ButtonCustom.jsx";

function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id.toString() === id);

  if (!service) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm text-slate-600 mb-3">
          Service not found or no longer available.
        </p>
        <Link to="/services" className="text-sm text-sky-600">
          ← Back to services
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <img
            src={service.image}
            alt={service.name}
            className="w-full rounded-2xl border border-slate-200 object-cover"
          />
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase text-sky-600 font-semibold">
            {service.category}
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">
            {service.name}
          </h1>
          <p className="text-sm text-slate-600">{service.description}</p>
          <p className="text-sm text-slate-700">
            Typical duration:{" "}
            <span className="font-semibold">{service.duration}</span>
          </p>
          <p className="text-sm text-sky-700 font-semibold">
            Starting from ₹{service.priceFrom}
          </p>
          <div className="flex gap-3 pt-2">
            <Link to="/appointment">
              <ButtonCustom>Book this service</ButtonCustom>
            </Link>
            <Link to="/services">
              <ButtonCustom variant="outline">Back to services</ButtonCustom>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailPage;
