import React from "react";
import "./css/Reports.css"; // ✅ plain CSS import

function Reports({ attendanceData }) {
  // Aggregate weekly/monthly report
  const report = {};
  attendanceData.forEach((a) => {
    const key = `${a.department}-${a.section}`;
    if (!report[key]) report[key] = { total: 0, present: 0, absent: 0, late: 0 };
    report[key].total += 1;
    report[key][a.status.toLowerCase()] += 1;
  });

  return (
    <div className="at-reports-container">
      <h2>Weekly / Monthly Reports</h2>
      <table className="at-reports-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Section</th>
            <th>Total Students</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Late</th>
            <th>% Attendance</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(report).map((key) => {
            const [dept, sec] = key.split("-");
            const r = report[key];
            const percent = r.total ? Math.round((r.present / r.total) * 100) : 0;
            return (
              <tr key={key}>
                <td>{dept}</td>
                <td>{sec}</td>
                <td>{r.total}</td>
                <td className="at-present">{r.present}</td>
                <td className="at-absent">{r.absent}</td>
                <td className="at-late">{r.late}</td>
                <td>{percent}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
