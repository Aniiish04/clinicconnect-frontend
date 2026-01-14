import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Sidebar() {
  const { user, hasRole } = useAuth();
  const navigate = useNavigate();

  const linkBase =
    "block rounded-lg px-3 py-2 text-xs font-medium text-slate-600 hover:bg-sky-50 hover:text-sky-700";
  const linkActive = "bg-sky-600 text-white hover:bg-sky-700";

  const patientLinks = [
    { label: "Book Appointment", to: "/appointment" },
    { label: "My Appointments", to: "/my-appointments" },
  ];

  const doctorLinks = [
    { label: "Dashboard", to: "/doctor/dashboard" },
    { label: "Appointments", to: "/doctor/appointments" },
  ];

  const adminLinks = [
    { label: "Dashboard", to: "/admin/dashboard" },
    { label: "Appointments", to: "/admin/appointments" },
    { label: "Patients", to: "/admin/patients" },
  ];

  const navGroups = hasRole(["ADMIN"])
    ? [{ title: "ADMIN", links: adminLinks }]
    : hasRole(["DOCTOR"])
    ? [{ title: "DOCTOR", links: doctorLinks }]
    : [{ title: "PATIENT", links: patientLinks }];

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-slate-200 bg-white px-4 py-6">
      <div className="mb-6 text-xs text-slate-500">
        <div className="font-semibold text-slate-800">SIGNED IN AS</div>
        <div className="mt-1 text-sm font-semibold text-slate-900">
          {user?.name || "User"}
        </div>
        <div className="text-[11px] uppercase tracking-wide text-sky-700">
          {user?.role || ""}
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-3 inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-100"
        >
          ← Back to Home
        </button>
      </div>

      {navGroups.map((group) => (
        <div key={group.title} className="mb-5">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            {group.title}
          </div>
          <div className="space-y-1">
            {group.links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  linkBase + " " + (isActive ? linkActive : "")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
