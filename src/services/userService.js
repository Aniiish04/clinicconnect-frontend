// Mock user-related services

const PATIENTS_KEY = "cc_patients";

// For now we just simulate some patients
function loadPatients() {
  const raw = localStorage.getItem(PATIENTS_KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }
  const seed = [
    {
      id: 101,
      name: "Rahul Joshi",
      email: "rahul@example.com",
      phone: "+91-9876543210",
      createdAt: "2024-01-10",
    },
    {
      id: 102,
      name: "Sneha Rao",
      email: "sneha@example.com",
      phone: "+91-9999999999",
      createdAt: "2024-02-05",
    },
  ];
  localStorage.setItem(PATIENTS_KEY, JSON.stringify(seed));
  return seed;
}

export async function getAllPatients() {
  return loadPatients();
}

export async function getDashboardStats() {
  const patients = loadPatients();
  const appointmentsRaw = localStorage.getItem("cc_appointments");
  const appointments = appointmentsRaw ? JSON.parse(appointmentsRaw) : [];

  const totalAppointments = appointments.length;
  const pending = appointments.filter((a) => a.status === "PENDING").length;
  const confirmed = appointments.filter((a) => a.status === "CONFIRMED").length;

  return {
    totalPatients: patients.length,
    totalAppointments,
    pendingAppointments: pending,
    confirmedAppointments: confirmed,
  };
}
