import React, { useState } from "react";
import "./css/AttendanceForm.css"; // ✅ plain CSS

function AttendanceForm({ students, addAttendance }) {
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [statusMap, setStatusMap] = useState({});
  const [remarksMap, setRemarksMap] = useState({});

  const filteredStudents = students.filter(
    (s) =>
      (selectedDept ? s.department === selectedDept : true) &&
      (selectedSection ? s.section === selectedSection : true)
  );

  const handleStatusChange = (studentId, status) => {
    setStatusMap((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleRemarksChange = (studentId, remark) => {
    setRemarksMap((prev) => ({ ...prev, [studentId]: remark }));
  };

  const handleSave = () => {
    filteredStudents.forEach((s) => {
      const record = {
        id: s.id,
        name: s.name,
        department: s.department,
        section: s.section,
        date: selectedDate,
        status: statusMap[s.id] || "Present",
        remarks: remarksMap[s.id] || "",
      };
      addAttendance(record);
    });
    setStatusMap({});
    setRemarksMap({});
    alert("Attendance saved temporarily!");
  };

  return (
    <div className="at-form-container">
      <h2>Mark Attendance</h2>

      <div className="at-form-controls">
        <select
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          <option value="">Select Department</option>
          {[...new Set(students.map((s) => s.department))].map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="">Select Section</option>
          {[...new Set(students.map((s) => s.section))].map((sec) => (
            <option key={sec} value={sec}>
              {sec}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <button className="at-btn-save" onClick={handleSave}>
          Save Temporarily
        </button>
      </div>

      {filteredStudents.length > 0 && (
        <table className="at-form-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>
                  <select
                    value={statusMap[s.id] || "Present"}
                    onChange={(e) => handleStatusChange(s.id, e.target.value)}
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Late">Late</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    value={remarksMap[s.id] || ""}
                    onChange={(e) =>
                      handleRemarksChange(s.id, e.target.value)
                    }
                    placeholder="Remarks"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AttendanceForm;
