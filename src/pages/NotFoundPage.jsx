import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">404</h1>
      <p className="text-sm text-slate-600 mb-4">
        The page you&apos;re looking for could not be found.
      </p>
      <Link
        to="/"
        className="rounded-full bg-sky-600 px-4 py-2 text-sm text-white hover:bg-sky-700"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFoundPage;
