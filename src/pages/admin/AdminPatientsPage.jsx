import React, { useEffect, useState } from "react";
import { getAllPatients } from "../../services/userService.js";
import CardCustom from "../../components/ui/CardCustom.jsx";

function AdminPatientsPage() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getAllPatients().then(setPatients);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 mb-4">
        Patients
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {patients.map((p) => (
          <CardCustom key={p.id} className="p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              {p.name}
            </h3>
            <p className="text-xs text-slate-600">{p.email}</p>
            <p className="text-xs text-slate-600">{p.phone}</p>
            <p className="mt-1 text-[11px] text-slate-500">
              Registered on {p.createdAt}
            </p>
          </CardCustom>
        ))}
      </div>
    </div>
  );
}

export default AdminPatientsPage;
