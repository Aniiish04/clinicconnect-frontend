import React, { useState } from "react";
import mapImg from "../assets/images/map-placeholder.jpg";
import InputCustom from "../components/ui/InputCustom.jsx";
import TextareaCustom from "../components/ui/TextareaCustom.jsx";
import ButtonCustom from "../components/ui/ButtonCustom.jsx";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-slate-900">Contact</h1>
          <p className="text-sm text-slate-600">
            This is a demo project for a dental appointment system. Use this
            section to show how a clinic could list its contact details.
          </p>
          <div className="space-y-1 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">
              Sample Clinic Address
            </p>
            <p>123, Dental Street, Pune, Maharashtra, India</p>
            <p>Phone: +91-9876543210</p>
            <p>Email: info@clinicconnect-demo.com</p>
          </div>
          <img
            src={mapImg}
            alt="Clinic location"
            className="mt-3 w-full rounded-2xl border border-slate-200 object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            Send a message
          </h2>
          {submitted && (
            <p className="mb-3 rounded-md bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
              Message submitted (demo only – no backend). This just proves the
              contact form UI.
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-3">
            <InputCustom
              label="Full name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <InputCustom
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <InputCustom
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <TextareaCustom
              label="Message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
            <ButtonCustom type="submit" className="w-full">
              Submit
            </ButtonCustom>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
