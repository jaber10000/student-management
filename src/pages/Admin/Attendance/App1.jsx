import React, { useState } from "react";
import Dashboard from "./Dashboard";
import AttendanceTable from "./AttendanceTable";
import AttendanceForm from "./AttendanceForm";
import Filters from "./Filters";
import Reports from "./Reports";
import { students } from "./sampleStudents";
import "./css/App1.css";   // ✅ plain CSS

function App1() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [filters, setFilters] = useState({ department: "", section: "", date: "" });
  const [activePage, setActivePage] = useState("dashboard");

  const addAttendance = (record) => setAttendanceData((prev) => [...prev, record]);
  const updateAttendance = (id, updatedRecord) => {
    if (updatedRecord === null) {
      setAttendanceData((prev) => prev.filter((rec) => rec.id !== id));
    } else {
      setAttendanceData((prev) =>
        prev.map((rec) => (rec.id === id ? { ...rec, ...updatedRecord } : rec))
      );
    }
  };

  return (
    <div className="at-app">
      {/* Sidebar */}
      <div className="at-sidebar">
        <h2>UAMS</h2>
        <nav>
          <button
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={activePage === "attendance" ? "active" : ""}
            onClick={() => setActivePage("attendance")}
          >
            Attendance
          </button>
          <button
            className={activePage === "reports" ? "active" : ""}
            onClick={() => setActivePage("reports")}
          >
            Reports
          </button>
        </nav>
      </div>

      {/* Main Area */}
      <div className="at-main">
        <div className="at-topbar">
          University Attendance Management System
        </div>

        <div className="at-content">
          {activePage === "dashboard" && <Dashboard attendanceData={attendanceData} />}

          {activePage === "attendance" && (
            <>
              <Filters filters={filters} setFilters={setFilters} students={students} />
              <AttendanceForm students={students} addAttendance={addAttendance} />
              <AttendanceTable
                students={students}
                attendanceData={attendanceData}
                updateAttendance={updateAttendance}
              />
            </>
          )}

          {activePage === "reports" && <Reports attendanceData={attendanceData} />}
        </div>
      </div>
    </div>
  );
}

export default App1;
