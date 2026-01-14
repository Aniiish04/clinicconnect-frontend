import React, { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/userService.js";
import CardCustom from "../../components/ui/CardCustom.jsx";

function AdminDashboardPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getDashboardStats().then(setStats);
  }, []);

  if (!stats) {
    return <p className="text-sm text-slate-500">Loading dashboard...</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">
        Admin dashboard
      </h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <CardCustom className="p-4">
          <p className="text-xs text-slate-500">Total patients</p>
          <p className="text-2xl font-semibold text-slate-900">
            {stats.totalPatients}
          </p>
        </CardCustom>
        <CardCustom className="p-4">
          <p className="text-xs text-slate-500">Total appointments</p>
          <p className="text-2xl font-semibold text-slate-900">
            {stats.totalAppointments}
          </p>
        </CardCustom>
        <CardCustom className="p-4">
          <p className="text-xs text-slate-500">Pending / Confirmed</p>
          <p className="text-2xl font-semibold text-slate-900">
            {stats.pendingAppointments} / {stats.confirmedAppointments}
          </p>
        </CardCustom>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
