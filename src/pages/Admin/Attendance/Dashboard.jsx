import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import "./css/Dashboard.css"; // ✅ plain CSS

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard({ attendanceData }) {
  const presentCount = attendanceData.filter(a => a.status === "Present").length;
  const absentCount = attendanceData.filter(a => a.status === "Absent").length;
  const lateCount = attendanceData.filter(a => a.status === "Late").length;

  const deptSummary = {};
  attendanceData.forEach((a) => {
    if (!deptSummary[a.department]) {
      deptSummary[a.department] = { present: 0, absent: 0, late: 0 };
    }
    deptSummary[a.department][a.status.toLowerCase()] += 1;
  });

  const deptLabels = Object.keys(deptSummary);
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weeklyPresent = weekDays.map(() => Math.floor(Math.random() * 50) + 10);
  const weeklyAbsent = weekDays.map(() => Math.floor(Math.random() * 10));

  return (
    <div className="at-dashboard-container">
      <h2>Dashboard</h2>

      <div className="at-dashboard-summary">
        <div className="at-card present">
          <h3>Total Present</h3>
          <p>{presentCount}</p>
        </div>
        <div className="at-card absent">
          <h3>Total Absent</h3>
          <p>{absentCount}</p>
        </div>
        <div className="at-card late">
          <h3>Total Late</h3>
          <p>{lateCount}</p>
        </div>
      </div>

      <div className="at-department-summary">
        <h3>Department-wise Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Late</th>
            </tr>
          </thead>
          <tbody>
            {deptLabels.map((d) => (
              <tr key={d}>
                <td>{d}</td>
                <td className="at-present">{deptSummary[d].present}</td>
                <td className="at-absent">{deptSummary[d].absent}</td>
                <td className="at-late">{deptSummary[d].late}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="at-charts">
        <h3>Weekly Attendance Trend</h3>
        <Line
          data={{
            labels: weekDays,
            datasets: [
              {
                label: "Present",
                data: weeklyPresent,
                borderColor: "#44bd32",
                backgroundColor: "#44bd32aa",
                fill: true,
                tension: 0.3,
              },
              {
                label: "Absent",
                data: weeklyAbsent,
                borderColor: "#e84118",
                backgroundColor: "#e84118aa",
                fill: true,
                tension: 0.3,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
