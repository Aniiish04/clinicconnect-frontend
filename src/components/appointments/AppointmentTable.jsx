import React from "react";
import StatusBadge from "../ui/StatusBadge.jsx";
import ButtonCustom from "../ui/ButtonCustom.jsx";

function AppointmentTable({
  appointments,
  onStatusChange,
  showPatient = false,
}) {
  if (!appointments || appointments.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        No appointments found. Try changing filters.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50">
          <tr>
            {showPatient && (
              <th className="px-4 py-2 text-left font-medium text-slate-600">
                Patient
              </th>
            )}
            <th className="px-4 py-2 text-left font-medium text-slate-600">
              Service
            </th>
            <th className="px-4 py-2 text-left font-medium text-slate-600">
              Date
            </th>
            <th className="px-4 py-2 text-left font-medium text-slate-600">
              Time
            </th>
            <th className="px-4 py-2 text-left font-medium text-slate-600">
              Status
            </th>
            {onStatusChange && (
              <th className="px-4 py-2 text-right font-medium text-slate-600">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {appointments.map((appt) => (
            <tr key={appt.id} className="hover:bg-slate-50">
              {showPatient && (
                <td className="px-4 py-2 text-slate-700">
                  <div className="flex flex-col">
                    <span className="font-medium">{appt.patientName}</span>
                    <span className="text-xs text-slate-500">
                      {appt.email}
                    </span>
                  </div>
                </td>
              )}
              <td className="px-4 py-2 text-slate-700">{appt.serviceName}</td>
              <td className="px-4 py-2 text-slate-600">{appt.date}</td>
              <td className="px-4 py-2 text-slate-600">{appt.time}</td>
              <td className="px-4 py-2">
                <StatusBadge status={appt.status} />
              </td>
              {onStatusChange && (
                <td className="px-4 py-2 text-right">
                  <div className="flex justify-end gap-2">
                    <ButtonCustom
                      variant="outline"
                      className="text-xs px-2 py-1"
                      onClick={() => onStatusChange(appt.id, "CONFIRMED")}
                    >
                      Confirm
                    </ButtonCustom>
                    <ButtonCustom
                      variant="outline"
                      className="text-xs px-2 py-1"
                      onClick={() => onStatusChange(appt.id, "CANCELLED")}
                    >
                      Cancel
                    </ButtonCustom>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentTable;
