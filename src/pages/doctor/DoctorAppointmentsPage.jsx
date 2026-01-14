import React, { useEffect, useState } from "react";
import { getAllAppointments } from "../../services/appointmentService.js";
import AppointmentTable from "../../components/appointments/AppointmentTable.jsx";

function DoctorAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAllAppointments().then(setAppointments);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 mb-4">
        My appointments (demo)
      </h1>
      <AppointmentTable appointments={appointments} />
      <p className="mt-2 text-[11px] text-slate-500">
        In a real system, appointments would be filtered per doctor. Here we
        show all to demonstrate the UI.
      </p>
    </div>
  );
}

export default DoctorAppointmentsPage;
