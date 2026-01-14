// src/components/layout/Navbar.jsx

import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Dentists", path: "/dentists" },
  { name: "Pricing", path: "/pricing" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { user, isAuthenticated, logout, hasRole } = useAuth();
  const navigate = useNavigate();

  const activeClass =
    "text-sky-600 border-b-2 border-sky-500 pb-1 font-medium";
  const baseClass =
    "text-slate-700 hover:text-sky-600 pb-1 border-b-2 border-transparent transition";

  const dashboardLink = hasRole(["ADMIN"])
    ? "/admin/dashboard"
    : hasRole(["DOCTOR"])
    ? "/doctor/dashboard"
    : "/my-appointments";

  const initials = user?.name
    ? user.name
        .split(" ")
        .filter(Boolean)
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "U";

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white font-bold">
            CC
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-sky-700">
              ClinicConnect
            </span>
            <span className="text-xs text-slate-500">
              Dental Appointment System
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                "text-sm " + (isActive ? activeClass : baseClass)
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right side: auth or profile */}
        <div className="hidden items-center gap-3 md:flex">
          {!isAuthenticated && (
            <>
              <button
                onClick={() => navigate("/login")}
                className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="rounded-full bg-sky-600 px-3 py-1 text-xs font-medium text-white hover:bg-sky-700"
              >
                Sign Up
              </button>
            </>
          )}

          {isAuthenticated && (
            <div className="relative">
              {/* Avatar button */}
              <button
                type="button"
                onClick={() => setProfileOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs hover:bg-slate-100"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
                  {initials}
                </div>
                <div className="hidden text-left sm:block">
                  <div className="text-xs font-semibold text-slate-800">
                    {user?.name || "User"}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {user?.role || "ROLE"}
                  </div>
                </div>
              </button>

              {/* Dropdown menu */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white py-2 text-sm shadow-xl">
                  {/* Header */}
                  <div className="flex items-center gap-3 px-4 pb-3 border-b border-slate-100">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
                      {initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-900">
                        {user?.name || "User"}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {user?.email || ""}
                      </span>
                      <span className="text-[11px] text-sky-700 font-medium">
                        {user?.role || ""}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="py-1">
                    <button
                      onClick={() => {
                        navigate(dashboardLink);
                        setProfileOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-xs hover:bg-slate-50"
                    >
                      Dashboard
                    </button>

                    {hasRole(["PATIENT"]) && (
                      <>
                        <button
                          onClick={() => {
                            navigate("/appointment");
                            setProfileOpen(false);
                          }}
                          className="block w-full px-4 py-2 text-left text-xs hover:bg-slate-50"
                        >
                          Book appointment
                        </button>
                        <button
                          onClick={() => {
                            navigate("/my-appointments");
                            setProfileOpen(false);
                          }}
                          className="block w-full px-4 py-2 text-left text-xs hover:bg-slate-50"
                        >
                          My appointments
                        </button>
                      </>
                    )}

                    {hasRole(["DOCTOR"]) && (
                      <button
                        onClick={() => {
                          navigate("/doctor/appointments");
                          setProfileOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left text-xs hover:bg-slate-50"
                      >
                        Doctor appointments
                      </button>
                    )}

                    {hasRole(["ADMIN"]) && (
                      <>
                        <button
                          onClick={() => {
                            navigate("/admin/appointments");
                            setProfileOpen(false);
                          }}
                          className="block w-full px-4 py-2 text-left text-xs hover:bg-slate-50"
                        >
                          Admin appointments
                        </button>
                        <button
                          onClick={() => {
                            navigate("/admin/patients");
                            setProfileOpen(false);
                          }}
                          className="block w-full px-4 py-2 text-left text-xs hover:bg-slate-50"
                        >
                          Patients list
                        </button>
                      </>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-1 border-t border-slate-100 pt-1">
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-xs text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile placeholder right side (you can add hamburger later if needed) */}
        <div className="flex items-center gap-2 md:hidden">
          {/* keep it empty or add a simple Login button for mobile */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
