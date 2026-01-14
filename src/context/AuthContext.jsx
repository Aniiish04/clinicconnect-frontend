import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

// Mock users for now – replace with backend later
const MOCK_USERS = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@clinic.com",
    password: "admin123",
    role: "ADMIN",
  },
  {
    id: 2,
    name: "Doctor User",
    email: "doctor@clinic.com",
    password: "doc123",
    role: "DOCTOR",
  },
  {
    id: 3,
    name: "Patient User",
    email: "patient@clinic.com",
    password: "patient123",
    role: "PATIENT",
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {id, name, email, role}
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("cc_user");
    const storedToken = localStorage.getItem("cc_token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // later you’ll call your Spring Boot /auth/login here
    const found = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) {
      throw new Error("Invalid email or password");
    }

    const fakeToken = "fake-jwt-token-" + found.role;
    const authUser = {
      id: found.id,
      name: found.name,
      email: found.email,
      role: found.role,
    };

    setUser(authUser);
    setToken(fakeToken);
    localStorage.setItem("cc_user", JSON.stringify(authUser));
    localStorage.setItem("cc_token", fakeToken);

    return authUser;
  };

  const register = async (data) => {
    // For now just simulate success
    // Later connect to /auth/register backend
    console.log("Mock register:", data);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("cc_user");
    localStorage.removeItem("cc_token");
  };

  const isAuthenticated = !!user;
  const hasRole = (roles = []) => {
    if (!user) return false;
    if (!roles || roles.length === 0) return true;
    return roles.includes(user.role);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated,
        hasRole,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
