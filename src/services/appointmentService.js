// LocalStorage-based mock appointment service

const STORAGE_KEY = "cc_appointments";

function loadAppointments() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveAppointments(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export async function createAppointment(data) {
  const list = loadAppointments();
  const newAppt = {
    id: Date.now(),
    status: "PENDING",
    createdAt: new Date().toISOString(),
    ...data,
  };
  list.push(newAppt);
  saveAppointments(list);
  return newAppt;
}

export async function getAppointmentsByUser(userId) {
  const list = loadAppointments();
  return list.filter((a) => a.patientId === userId);
}

export async function getAllAppointments() {
  return loadAppointments();
}

export async function updateAppointmentStatus(id, status) {
  const list = loadAppointments();
  const idx = list.findIndex((a) => a.id === id);
  if (idx === -1) return null;
  list[idx].status = status;
  saveAppointments(list);
  return list[idx];
}
