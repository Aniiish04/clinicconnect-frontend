import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-semibold text-slate-700">ClinicConnect</p>
          <p>Smart dental appointment system for modern clinics.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/privacy" className="hover:text-sky-600">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-sky-600">
            Terms
          </Link>
          <a href="mailto:info@clinicconnect.com" className="hover:text-sky-600">
            info@clinicconnect.com
          </a>
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} ClinicConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
