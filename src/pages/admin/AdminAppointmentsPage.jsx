import React, { useEffect, useState } from "react";
import { getAllAppointments, updateAppointmentStatus } from "../../services/appointmentService.js";
import AppointmentTable from "../../components/appointments/AppointmentTable.jsx";

function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);

  const load = () => {
    getAllAppointments().then(setAppointments);
  };

  useEffect(() => {
    load();
  }, []);

  const handleStatusChange = async (id, status) => {
    await updateAppointmentStatus(id, status);
    load();
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 mb-4">
        All appointments
      </h1>
      <AppointmentTable
        appointments={appointments}
        onStatusChange={handleStatusChange}
        showPatient={true}
      />
    </div>
  );
}

export default AdminAppointmentsPage;
