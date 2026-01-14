import api from "./api";

export async function loginApi(email, password) {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
}

export async function registerApi(payload) {
  const res = await api.post("/auth/register", payload);
  return res.data;
}

export async function getCurrentUserApi() {
  const res = await api.get("/auth/me");
  return res.data;
}
