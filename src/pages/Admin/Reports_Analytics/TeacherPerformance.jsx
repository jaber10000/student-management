import React from "react";
import { Bar, Radar } from "react-chartjs-2";
import { teachers } from "./teacherData";
import "./css/TeacherPerformance.css";

function TeacherPerformance() {
  // KPI Data
  const totalTeachers = teachers.length;
  const avgFeedback =
    (teachers.reduce((sum, t) => sum + t.feedback, 0) / totalTeachers).toFixed(2);
  const bestTeacher = teachers.reduce((max, t) =>
    t.feedback > max.feedback ? t : max
  );
  const worstTeacher = teachers.reduce((min, t) =>
    t.feedback < min.feedback ? t : min
  );

  // Chart Data
  const feedbackData = {
    labels: teachers.map((t) => t.name),
    datasets: [
      {
        label: "Feedback Rating",
        data: teachers.map((t) => t.feedback),
        backgroundColor: "#3498db",
      },
    ],
  };

  const gpaImpactData = {
    labels: teachers.map((t) => t.name),
    datasets: [
      {
        label: "Avg GPA Impact",
        data: teachers.map((t) => t.avgGPAImpact),
        backgroundColor: "#2ecc71",
      },
    ],
  };

  const attendanceData = {
    labels: teachers.map((t) => t.name),
    datasets: [
      {
        label: "Attendance %",
        data: teachers.map((t) => t.attendance),
        backgroundColor: "#b522d2ff",
      },
    ],
  };

  return (
    <div className="TP-container">
      <h1 className="TP-title">👩‍🏫 Teacher Performance Dashboard</h1>

      {/* KPI Cards */}
      <div className="TP-kpi-row">
        <div className="TP-card">Total Teachers: {totalTeachers}</div>
        <div className="TP-card">Avg Feedback: {avgFeedback} ⭐</div>
        <div className="TP-card">Best Teacher: {bestTeacher.name} ({bestTeacher.dept})</div>
        <div className="TP-card">Needs Improvement: {worstTeacher.name} ({worstTeacher.dept})</div>
      </div>

      {/* Charts */}
      <div className="TP-charts-row">
        <div className="TP-chart">
          <h3>Feedback Ratings</h3>
          <Bar data={feedbackData} />
        </div>
        <div className="TP-chart">
          <h3>GPA Contribution</h3>
          <Bar data={gpaImpactData} />
        </div>
      </div>

      <div className="TP-charts-row">
        <div className="TP-chart-wide">
          <h3>Class Attendance %</h3>
          <Bar data={attendanceData} />
        </div>
      </div>

      {/* Table */}
      <h2 className="TP-subtitle">Teacher Details</h2>
      <table className="TP-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Dept</th>
            <th>Designation</th>
            <th>Phone</th>
            <th>Desk</th>
            <th>Feedback</th>
            <th>GPA Impact</th>
            <th>Attendance %</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.name}</td>
              <td>{t.dept}</td>
              <td>{t.designation}</td>
              <td>{t.phone}</td>
              <td>{t.desk}</td>
              <td>{t.feedback}</td>
              <td>{t.avgGPAImpact}</td>
              <td>{t.attendance}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherPerformance;
