import React, { useEffect, useState } from "react";
import { getAllAppointments } from "../../services/appointmentService.js";
import CardCustom from "../../components/ui/CardCustom.jsx";

function DoctorDashboardPage() {
  const [stats, setStats] = useState({ today: 0, total: 0 });

  useEffect(() => {
    getAllAppointments().then((appts) => {
      const todayStr = new Date().toISOString().slice(0, 10);
      const todayCount = appts.filter((a) => a.date === todayStr).length;
      setStats({ today: todayCount, total: appts.length });
    });
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">
        Doctor dashboard
      </h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <CardCustom className="p-4">
          <p className="text-xs text-slate-500">Appointments today</p>
          <p className="text-2xl font-semibold text-slate-900">
            {stats.today}
          </p>
        </CardCustom>
        <CardCustom className="p-4">
          <p className="text-xs text-slate-500">Total appointments</p>
          <p className="text-2xl font-semibold text-slate-900">
            {stats.total}
          </p>
        </CardCustom>
      </div>
      <p className="text-xs text-slate-500">
        For a real clinic, appointments would be assigned to specific doctors.
        In this demo, all appointments are visible for simplicity.
      </p>
    </div>
  );
}

export default DoctorDashboardPage;
