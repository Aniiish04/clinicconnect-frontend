import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import InputCustom from "../../components/ui/InputCustom.jsx";
import ButtonCustom from "../../components/ui/ButtonCustom.jsx";

function RegisterPage() {
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setSubmitting(true);
      await register(form);
      setSubmitted(true);
    } catch {
      setError("Registration failed (mock only).");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">
        Create a patient account
      </h1>
      <p className="text-xs text-slate-600 mb-4">
        This registration is mock-only on the frontend, to showcase the UI and
        flow. Real sign-up would connect to a backend.
      </p>
      {error && (
        <p className="mb-3 rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </p>
      )}
      {submitted && (
        <p className="mb-3 rounded-md bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
          Registration simulated successfully. Please login using one of the
          demo accounts or a future backend user.
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
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <InputCustom
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <InputCustom
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <ButtonCustom type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Creating..." : "Register"}
        </ButtonCustom>
      </form>
      <p className="mt-3 text-xs text-slate-600">
        Already have an account?{" "}
        <Link to="/login" className="text-sky-600 hover:text-sky-700">
          Login
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
