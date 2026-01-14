import React from "react";
import { useNavigate } from "react-router-dom";
import AppointmentTable from "../../components/appointments/AppointmentTable.jsx";

export default function MyAppointmentsPage() {
  const navigate = useNavigate();

  // Read appointments from localStorage (or fallback to empty array)
  const stored = localStorage.getItem("appointments");
  let appointments = [];
  try {
    appointments = stored ? JSON.parse(stored) : [];
  } catch {
    appointments = [];
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            My appointments
          </h1>
          <p className="text-sm text-slate-500">
            Review your upcoming and past appointments in one place.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => navigate("/")}
            className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
          >
            ← Back to Home
          </button>
          <button
            onClick={() => navigate("/appointment")}
            className="rounded-full bg-sky-600 px-3 py-1 text-xs font-medium text-white hover:bg-sky-700"
          >
            Book new appointment
          </button>
        </div>
      </div>

      <AppointmentTable appointments={appointments} />
    </div>
  );
}
