import React from "react";
import { Link } from "react-router-dom";

function NotAuthorizedPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">
        Not authorized
      </h1>
      <p className="text-sm text-slate-600 mb-4">
        You don&apos;t have permission to view this page. Try logging in with a
        different role or go back to the homepage.
      </p>
      <div className="flex gap-3">
        <Link
          to="/"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
        >
          Go home
        </Link>
        <Link
          to="/login"
          className="rounded-full bg-sky-600 px-4 py-2 text-sm text-white hover:bg-sky-700"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default NotAuthorizedPage;
