import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import services from "../../data/services";
import InputCustom from "../../components/ui/InputCustom.jsx";
import TextareaCustom from "../../components/ui/TextareaCustom.jsx";
import ButtonCustom from "../../components/ui/ButtonCustom.jsx";
import { createAppointment } from "../../services/appointmentService.js";

function AppointmentPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    patientId: user?.id || null,
    patientName: user?.name || "",
    email: user?.email || "",
    phone: "",
    serviceId: "",
    serviceName: "",
    date: "",
    time: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: value,
      ...(name === "serviceId"
        ? {
            serviceName:
              services.find((s) => s.id.toString() === value)?.name || "",
          }
        : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.phone || !form.serviceId || !form.date || !form.time) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setSubmitting(true);
      await createAppointment(form);
      navigate("/my-appointments");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold text-slate-900 mb-4">
        Book an appointment
      </h1>
      {error && (
        <p className="mb-3 rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <InputCustom
          label="Full name"
          name="patientName"
          value={form.patientName}
          onChange={handleChange}
          required
        />
        <InputCustom
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <InputCustom
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <div className="space-y-1">
          <label
            htmlFor="serviceId"
            className="block text-sm font-medium text-slate-700"
          >
            Service
          </label>
          <select
            id="serviceId"
            name="serviceId"
            value={form.serviceId}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            required
          >
            <option value="">Select service</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <InputCustom
            label="Preferred date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <InputCustom
            label="Preferred time"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
        <TextareaCustom
          label="Notes (optional)"
          name="notes"
          rows={3}
          value={form.notes}
          onChange={handleChange}
        />
        <ButtonCustom type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Booking..." : "Book appointment"}
        </ButtonCustom>
      </form>
    </div>
  );
}

export default AppointmentPage;
