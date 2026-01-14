import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-clinic.jpg";
import doctorPatientImg from "../assets/images/home-doctor-patient.jpg";
import services from "../data/services";
import dentists from "../data/dentists";
import testimonials from "../data/testimonials";
import CardCustom from "../components/ui/CardCustom.jsx";
import ButtonCustom from "../components/ui/ButtonCustom.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

function HomePage() {
  const featuredServices = services.slice(0, 3);
  const featuredDentists = dentists.slice(0, 2);
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <div className="space-y-12 pb-12">
      {/* Hero */}
      <section className="bg-sky-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2 md:px-6">
          <div className="flex flex-col justify-center gap-4">
            <p className="inline-flex w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
              Smart dental appointment platform
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Manage dental appointments with{" "}
              <span className="text-sky-600">ClinicConnect</span>
            </h1>
            <p className="text-sm text-slate-600 md:text-base">
              Patients, dentists and admins stay in sync with real-time
              appointment management, dashboards and reminders – all in one
              responsive web app.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/appointment">
                <ButtonCustom>Book Appointment</ButtonCustom>
              </Link>
              <Link to="/services">
                <ButtonCustom variant="outline">View Services</ButtonCustom>
              </Link>
            </div>
            <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
              <span>✓ Role-based dashboards</span>
              <span>✓ LocalStorage data mock</span>
              <span>✓ Backend-ready with APIs</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={heroImg}
              alt="Modern dental clinic"
              className="w-full max-w-md rounded-3xl border border-slate-200 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          title="Why ClinicConnect?"
          subtitle="Built as a real-world dental clinic appointment system with patient, doctor and admin flows."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <CardCustom className="p-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Patient-friendly booking
            </h3>
            <p className="text-xs text-slate-600">
              Patients can book, view and manage appointments with a simple,
              mobile-friendly interface.
            </p>
          </CardCustom>
          <CardCustom className="p-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Doctor dashboards
            </h3>
            <p className="text-xs text-slate-600">
              Doctors see upcoming appointments, statuses and basic patient info
              in one place.
            </p>
          </CardCustom>
          <CardCustom className="p-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Admin control
            </h3>
            <p className="text-xs text-slate-600">
              Admins manage appointment statuses, patient records and high-level
              stats.
            </p>
          </CardCustom>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <SectionHeader
            align="left"
            title="Popular treatments"
            subtitle="A quick look at some of the most common dental services offered."
          />
          <Link
            to="/services"
            className="text-xs font-medium text-sky-600 hover:text-sky-700"
          >
            View all services →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {featuredServices.map((service) => (
            <CardCustom key={service.id} className="overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="h-32 w-full object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-600">
                  {service.shortDescription}
                </p>
                <p className="text-xs text-sky-700 font-semibold">
                  From ₹{service.priceFrom}
                </p>
              </div>
            </CardCustom>
          ))}
        </div>
      </section>

      {/* Dentists + image */}
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4">
            <SectionHeader
              align="left"
              title="Experienced dental team"
              subtitle="ClinicConnect is designed for multi-dentist clinics with specialists and support staff."
            />
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Support for multiple dentists and roles.</li>
              <li>• Easy tracking of who handles which appointments.</li>
              <li>• Clear visibility of daily schedule and workload.</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredDentists.map((dentist) => (
              <CardCustom key={dentist.id} className="p-3">
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  className="mb-2 h-24 w-24 rounded-full object-cover"
                />
                <h3 className="text-sm font-semibold text-slate-900">
                  {dentist.name}
                </h3>
                <p className="text-xs text-sky-600">{dentist.role}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {dentist.specialty} • {dentist.experience}
                </p>
              </CardCustom>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <SectionHeader
            align="left"
            title="What users say"
            subtitle="Patients, doctors and admins share how this system improves their workflow."
          />
          <Link
            to="/testimonials"
            className="text-xs font-medium text-sky-600 hover:text-sky-700"
          >
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {featuredTestimonials.map((t) => (
            <CardCustom key={t.id} className="p-4 flex gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-xs text-slate-600 mb-2">
                  “{t.feedback}”
                </p>
                <p className="text-xs font-semibold text-slate-900">
                  {t.name}
                </p>
                <p className="text-[11px] text-slate-500">{t.role}</p>
              </div>
            </CardCustom>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
