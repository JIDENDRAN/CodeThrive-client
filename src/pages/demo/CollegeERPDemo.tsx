import React, { useState } from "react";

interface Student {
  id: number;
  name: string;
  class: string;
  attendance: number; // %
  marks: number; // average marks
}

const sampleStudents: Student[] = [
  { id: 1, name: "Alice Johnson", class: "10A", attendance: 95, marks: 88 },
  { id: 2, name: "Bob Smith", class: "10B", attendance: 88, marks: 75 },
  { id: 3, name: "Charlie Brown", class: "11A", attendance: 92, marks: 91 },
  { id: 4, name: "Diana Prince", class: "11B", attendance: 85, marks: 82 },
  { id: 5, name: "Ethan Hunt", class: "12A", attendance: 97, marks: 94 },
];

const CollegeERPDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"students" | "attendance" | "marks">("students");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = sampleStudents.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h1 className="fw-bold text-center mb-4">College ERP Management System Demo</h1>
      <p className="text-center text-muted mb-5">
        Interactive ERP simulation: manage students, attendance, and marks.
      </p>

      {/* Tabs */}
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        {["students", "attendance", "marks"].map((tab) => (
          <button
            key={tab}
            className={`btn ${activeTab === tab ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveTab(tab as any)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Search */}
      {activeTab === "students" && (
        <div className="mb-3 text-center">
          <input
            type="text"
            className="form-control"
            style={{ maxWidth: "400px", margin: "0 auto" }}
            placeholder="Search by name or class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {/* Students Table */}
      {activeTab === "students" && (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Attendance (%)</th>
                <th>Average Marks</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.attendance}</td>
                  <td>{student.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Attendance Dashboard */}
      {activeTab === "attendance" && (
        <div className="row g-3 justify-content-center">
          {sampleStudents.map((s) => (
            <div key={s.id} className="col-md-3 col-6 text-center">
              <div
                className="p-3 rounded shadow-sm mb-2"
                style={{
                  background: "#f0f8ff",
                  height: `${s.attendance * 2}px`,
                  transition: "height 0.5s",
                }}
              ></div>
              <p className="mb-0">{s.name}</p>
              <small>Attendance: {s.attendance}%</small>
            </div>
          ))}
        </div>
      )}

      {/* Marks Dashboard */}
      {activeTab === "marks" && (
        <div className="row g-3 justify-content-center">
          {sampleStudents.map((s) => (
            <div key={s.id} className="col-md-3 col-6 text-center">
              <div
                className="p-3 rounded shadow-sm mb-2"
                style={{
                  background: "#fff3cd",
                  height: `${s.marks * 2}px`,
                  transition: "height 0.5s",
                }}
              ></div>
              <p className="mb-0">{s.name}</p>
              <small>Marks: {s.marks}</small>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-5">
        <button className="btn btn-success px-5 py-2">Explore ERP Modules</button>
      </div>

      {/* Inline Styles */}
      <style>{`
        .btn { transition: all 0.3s; }
        .btn:hover { transform: translateY(-2px); }
        table { background: #fff; border-radius: 8px; overflow: hidden; }
        thead { font-weight: 600; }
      `}</style>
    </div>
  );
};

export default CollegeERPDemo;
