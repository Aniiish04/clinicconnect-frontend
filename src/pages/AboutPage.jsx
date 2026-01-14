import React from "react";

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-6">
      <h1 className="text-2xl font-semibold text-slate-900 mb-3">
        About ClinicConnect
      </h1>
      <p className="text-sm text-slate-600 mb-3">
        ClinicConnect is a demo dental appointment management web app built
        with Vite, React and Tailwind CSS. It showcases how a real clinic could
        manage patients, doctors and admins in a modern web UI.
      </p>
      <p className="text-sm text-slate-600 mb-3">
        The project includes role-based authentication (Patient, Doctor, Admin),
        protected routes, appointment booking, lists, status updates and
        dashboards – all wired with a service layer that can be easily connected
        to a Spring Boot + MySQL backend.
      </p>
      <p className="text-sm text-slate-600">
        As a portfolio project, it demonstrates skills in frontend architecture,
        state management, UI/UX, and preparing a codebase for full-stack
        integration.
      </p>
    </div>
  );
}

export default AboutPage;
