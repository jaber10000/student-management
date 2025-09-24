import React from "react";
import "./css/AttendanceTable.css"; // ✅ plain CSS import

function AttendanceTable({ attendanceData, updateAttendance }) {
  const handleEdit = (record) => {
    const newStatus = prompt("Enter new status (Present/Absent/Late):", record.status);
    if (newStatus === "Present" || newStatus === "Absent" || newStatus === "Late") {
      const newRemarks = prompt("Enter remarks:", record.remarks || "");
      updateAttendance(record.id, { status: newStatus, remarks: newRemarks });
    } else {
      alert("Invalid status!");
    }
  };

  const handleDelete = (recordId) => {
    if (window.confirm("Are you sure to delete this record?")) {
      updateAttendance(recordId, null);
    }
  };

  return (
    <div className="at-table-container">
      <h2>Temporary Attendance Records</h2>
      <table className="at-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Section</th>
            <th>Date</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.length === 0 ? (
            <tr>
              <td colSpan="8">No records yet</td>
            </tr>
          ) : (
            attendanceData.map(
              (a) =>
                a && (
                  <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>{a.name}</td>
                    <td>{a.department}</td>
                    <td>{a.section}</td>
                    <td>{a.date}</td>
                    <td
                      className={
                        a.status === "Present"
                          ? "at-status-present"
                          : a.status === "Absent"
                          ? "at-status-absent"
                          : "at-status-late"
                      }
                    >
                      {a.status}
                    </td>
                    <td>{a.remarks}</td>
                    <td>
                      <button className="at-btn at-edit" onClick={() => handleEdit(a)}>
                        Edit
                      </button>
                      <button className="at-btn at-delete" onClick={() => handleDelete(a.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTable;
