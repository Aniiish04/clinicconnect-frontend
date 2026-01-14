import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import InputCustom from "../../components/ui/InputCustom.jsx";
import ButtonCustom from "../../components/ui/ButtonCustom.jsx";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setSubmitting(true);
      const user = await login(form.email, form.password);

      if (user.role === "ADMIN") {
        navigate("/admin/dashboard", { replace: true });
      } else if (user.role === "DOCTOR") {
        navigate("/doctor/dashboard", { replace: true });
      } else {
        navigate("/my-appointments", { replace: true });
      }
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">
        Login to ClinicConnect
      </h1>
      <p className="text-xs text-slate-600 mb-4">
        Use demo accounts for testing:
        <br />
        <span className="font-mono">
          admin@clinic.com / admin123 (ADMIN)
        </span>
        <br />
        <span className="font-mono">
          doctor@clinic.com / doc123 (DOCTOR)
        </span>
        <br />
        <span className="font-mono">
          patient@clinic.com / patient123 (PATIENT)
        </span>
      </p>
      {error && (
        <p className="mb-3 rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <InputCustom
          label="Email"
          name="email"
          type="email"
          value={form.email}
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
        <ButtonCustom type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Logging in..." : "Login"}
        </ButtonCustom>
      </form>
      <p className="mt-3 text-xs text-slate-600">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-sky-600 hover:text-sky-700">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
