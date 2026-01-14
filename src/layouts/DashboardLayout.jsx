// src/layouts/DashboardLayout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.jsx";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
}
