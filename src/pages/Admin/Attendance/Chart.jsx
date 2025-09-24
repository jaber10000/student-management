import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import styles from "./css/Charts.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

function Charts({ attendanceData }) {
  // Department-wise Present vs Absent
  const deptSummary = {};
  attendanceData.forEach(a => {
    if (!deptSummary[a.department]) deptSummary[a.department] = { present: 0, absent: 0 };
    if (a.status === "Present") deptSummary[a.department].present += 1;
    if (a.status === "Absent") deptSummary[a.department].absent += 1;
  });

  const labels = Object.keys(deptSummary);
  const presentData = labels.map(d => deptSummary[d].present);
  const absentData = labels.map(d => deptSummary[d].absent);

  // Pie chart overall
  const totalPresent = attendanceData.filter(a => a.status === "Present").length;
  const totalAbsent = attendanceData.filter(a => a.status === "Absent").length;
  const totalLate = attendanceData.filter(a => a.status === "Late").length;

  return (
    <div className={styles["at-charts-container"]}>
      {/* Department-wise Bar Chart */}
      <div className={styles["at-chart-card"]}>
        <h3>Department-wise Attendance</h3>
        <Bar
          data={{
            labels,
            datasets: [
              { label: "Present", data: presentData, backgroundColor: "#44bd32" },
              { label: "Absent", data: absentData, backgroundColor: "#e84118" },
            ],
          }}
          options={{ responsive: true, plugins: { legend: { position: "top" } } }}
        />
      </div>

      {/* Overall Pie Chart */}
      <div className={styles["at-chart-card"]}>
        <h3>Overall Attendance Distribution</h3>
        <Pie
          data={{
            labels: ["Present", "Absent", "Late"],
            datasets: [
              {
                data: [totalPresent, totalAbsent, totalLate],
                backgroundColor: ["#44bd32", "#e84118", "#fbc531"],
              },
            ],
          }}
          options={{ responsive: true }}
        />
      </div>
    </div>
  );
}

export default Charts;
