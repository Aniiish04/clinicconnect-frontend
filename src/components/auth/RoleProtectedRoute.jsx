import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

function RoleProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, hasRole, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-slate-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!hasRole(allowedRoles)) {
    return (
      <Navigate
        to="/not-authorized"
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
}

export default RoleProtectedRoute;
