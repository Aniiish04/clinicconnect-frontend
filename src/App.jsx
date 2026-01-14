import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";


import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";
import DentistsPage from "./pages/DentistsPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotAuthorizedPage from "./pages/NotAuthorizedPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";

import AppointmentPage from "./pages/patient/AppointmentPage.jsx";
import MyAppointmentsPage from "./pages/patient/MyAppointmentsPage.jsx";

import AdminDashboardPage from "./pages/admin/AdminDashboardPage.jsx";
import AdminAppointmentsPage from "./pages/admin/AdminAppointmentsPage.jsx";
import AdminPatientsPage from "./pages/admin/AdminPatientsPage.jsx";

import DoctorDashboardPage from "./pages/doctor/DoctorDashboardPage.jsx";
import DoctorAppointmentsPage from "./pages/doctor/DoctorAppointmentsPage.jsx";

import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import RoleProtectedRoute from "./components/auth/RoleProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      {/* Public routes with main layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/dentists" element={<DentistsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/not-authorized" element={<NotAuthorizedPage />} />
      </Route>

      {/* Patient dashboard routes */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path="/appointment"
          element={
            <RoleProtectedRoute allowedRoles={["PATIENT"]}>
              <AppointmentPage />
            </RoleProtectedRoute>
          }
        />
        <Route
          path="/my-appointments"
          element={
            <RoleProtectedRoute allowedRoles={["PATIENT"]}>
              <MyAppointmentsPage />
            </RoleProtectedRoute>
          }
        />
      </Route>

      {/* Admin dashboard routes */}
      <Route
        element={
          <RoleProtectedRoute allowedRoles={["ADMIN"]}>
            <DashboardLayout />
          </RoleProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/appointments" element={<AdminAppointmentsPage />} />
        <Route path="/admin/patients" element={<AdminPatientsPage />} />
      </Route>

      {/* Doctor dashboard routes */}
      <Route
        element={
          <RoleProtectedRoute allowedRoles={["DOCTOR"]}>
            <DashboardLayout />
          </RoleProtectedRoute>
        }
      >
        <Route path="/doctor/dashboard" element={<DoctorDashboardPage />} />
        <Route
          path="/doctor/appointments"
          element={<DoctorAppointmentsPage />}
        />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
