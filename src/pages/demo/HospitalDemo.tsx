import React, { useState } from "react";

interface Patient {
  id: number;
  name: string;
  age: number;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

interface Appointment {
  id: number;
  patient: string;
  doctor: string;
  date: string;
}

const HospitalManagementDemo: React.FC = () => {
  const [page, setPage] = useState(1);

  // Login
  const [username, setUsername] = useState("");

  // Patient Registration
  const [patients, setPatients] = useState<Patient[]>([]);
  const [pName, setPName] = useState("");
  const [pAge, setPAge] = useState("");

  // Doctor List
  const doctors: Doctor[] = [
    { id: 1, name: "Dr. Arjun", specialty: "Cardiology" },
    { id: 2, name: "Dr. Priya", specialty: "Dermatology" },
    { id: 3, name: "Dr. Karthik", specialty: "Orthopedics" },
  ];

  // Appointment
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Billing
  const [services, setServices] = useState<{ name: string; fee: number }[]>([]);
  const [service, setService] = useState("");
  const [fee, setFee] = useState("");

  const nextPage = () => setPage(p => p + 1);
  const prevPage = () => setPage(p => p - 1);

  const addPatient = () => {
    if (!pName || !pAge) return alert("Enter all details");
    setPatients([...patients, { id: Date.now(), name: pName, age: Number(pAge) }]);
    setPName("");
    setPAge("");
  };

  const addAppointment = () => {
    if (!selectedPatient || !selectedDoctor || !selectedDate)
      return alert("Fill appointment details");

    setAppointments([
      ...appointments,
      {
        id: Date.now(),
        patient: selectedPatient,
        doctor: selectedDoctor,
        date: selectedDate,
      },
    ]);
  };

  const addService = () => {
    if (!service || !fee) return;
    setServices([...services, { name: service, fee: Number(fee) }]);
    setService("");
    setFee("");
  };

  const totalBill = services.reduce((sum, s) => sum + s.fee, 0);
  const gst = totalBill * 0.18;
  const grandTotal = totalBill + gst;

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
        minHeight: "100vh",
        background: "#f1f3f6",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Hospital Management System
      </h1>
      <p style={{ textAlign: "center", color: "#666" }}>Step {page} of 5</p>

      {/* PAGE 1 - LOGIN */}
      {page === 1 && (
        <div
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Login</h2>
          <input
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <input
            placeholder="Password"
            type="password"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={() => (!username ? alert("Enter username") : nextPage())}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              background: "#4e73df",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Login
          </button>
        </div>
      )}

      {/* PAGE 2 - PATIENT REGISTRATION */}
      {page === 2 && (
        <div style={{ maxWidth: "600px", margin: "20px auto" }}>
          <h2>Patient Registration</h2>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.05)",
            }}
          >
            <input
              placeholder="Patient Name"
              value={pName}
              onChange={e => setPName(e.target.value)}
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />
            <input
              placeholder="Age"
              value={pAge}
              onChange={e => setPAge(e.target.value)}
              style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            />
            <button
              onClick={addPatient}
              style={{
                padding: "10px 20px",
                background: "#4e73df",
                color: "white",
                borderRadius: "6px",
              }}
            >
              Add Patient
            </button>
          </div>

          <h4 style={{ marginTop: "20px" }}>Registered Patients</h4>
          <ul className="list-group">
            {patients.map(p => (
              <li
                key={p.id}
                style={{
                  background: "#fff",
                  padding: "10px",
                  marginTop: "10px",
                  borderRadius: "6px",
                }}
              >
                {p.name} (Age: {p.age})
              </li>
            ))}
          </ul>

          <button onClick={prevPage} style={{ marginTop: "20px" }}>
            Back
          </button>
          <button
            onClick={nextPage}
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            Next
          </button>
        </div>
      )}

      {/* PAGE 3 - APPOINTMENTS */}
      {page === 3 && (
        <div style={{ maxWidth: "600px", margin: "20px auto" }}>
          <h2>Book Appointment</h2>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.05)",
            }}
          >
            {/* Select Patient */}
            <select
              onChange={e => setSelectedPatient(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            >
              <option>Select Patient</option>
              {patients.map(p => (
                <option key={p.id}>{p.name}</option>
              ))}
            </select>

            {/* Select Doctor */}
            <select
              onChange={e => setSelectedDoctor(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            >
              <option>Select Doctor</option>
              {doctors.map(d => (
                <option key={d.id}>
                  {d.name} ({d.specialty})
                </option>
              ))}
            </select>

            {/* Date */}
            <input
              type="date"
              onChange={e => setSelectedDate(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ccc",
              }}
            />

            <button
              onClick={addAppointment}
              style={{
                padding: "10px 20px",
                background: "#4e73df",
                color: "white",
                borderRadius: "6px",
              }}
            >
              Book Appointment
            </button>
          </div>

          <h4 style={{ marginTop: "20px" }}>Today's Appointments</h4>
          {appointments.map(a => (
            <div
              key={a.id}
              style={{
                background: "#fff",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "6px",
              }}
            >
              {a.patient} with {a.doctor} on {a.date}
            </div>
          ))}

          <button onClick={prevPage} style={{ marginTop: "20px" }}>
            Back
          </button>
          <button
            onClick={nextPage}
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            Next
          </button>
        </div>
      )}

      {/* PAGE 4 - BILLING */}
      {page === 4 && (
        <div style={{ maxWidth: "500px", margin: "20px auto" }}>
          <h2>Billing</h2>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
            }}
          >
            <input
              placeholder="Service"
              value={service}
              onChange={e => setService(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <input
              placeholder="Fee"
              type="number"
              value={fee}
              onChange={e => setFee(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <button
              onClick={addService}
              style={{
                padding: "10px 20px",
                background: "#4e73df",
                color: "white",
                borderRadius: "6px",
              }}
            >
              Add
            </button>
          </div>

          <h4 style={{ marginTop: "20px" }}>Added Items</h4>
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "6px",
              }}
            >
              {s.name} - ₹{s.fee}
            </div>
          ))}

          <button onClick={prevPage} style={{ marginTop: "20px" }}>
            Back
          </button>
          <button
            onClick={nextPage}
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            Next
          </button>
        </div>
      )}

      {/* PAGE 5 - SUMMARY */}
      {page === 5 && (
        <div
          style={{
            maxWidth: "500px",
            margin: "20px auto",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Final Bill</h2>
          <p><strong>Admin:</strong> {username}</p>
          <p><strong>Total Services:</strong> {services.length}</p>

          <hr />

          {services.map((s, i) => (
            <p key={i}>
              {s.name}: ₹{s.fee}
            </p>
          ))}

          <hr />
          <p>Subtotal: ₹{totalBill.toFixed(2)}</p>
          <p>GST (18%): ₹{gst.toFixed(2)}</p>

          <h3>Total: ₹{grandTotal.toFixed(2)}</h3>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={() => window.print()}
              style={{
                padding: "10px 20px",
                background: "#4e73df",
                color: "#fff",
                borderRadius: "6px",
                marginRight: "10px",
              }}
            >
              Print Bill
            </button>
            <button
              onClick={() => setPage(1)}
              style={{ padding: "10px 20px", borderRadius: "6px" }}
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalManagementDemo;
