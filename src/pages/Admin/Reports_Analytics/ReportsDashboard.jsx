import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { students, deptStats } from "./sampleData";
import "./css/ReportsDashboard.css";

const ReportDashboard = () => {
  // Total students
  const totalStudents = students.length;

  // Top dept by avg GPA
  const topDept = deptStats.reduce((prev, curr) =>
    curr.avgGPA > prev.avgGPA ? curr : prev
  );

  // Avg pass rate across depts
  const avgPassRate =
    deptStats.reduce((sum, d) => sum + d.passRate, 0) / deptStats.length;

  // Avg GPA across depts
  const avgUniGPA =
    deptStats.reduce((sum, d) => sum + d.avgGPA, 0) / deptStats.length;

  // Top 5 students overall (descending by cgpa)
  const topStudents = [...students]
    .sort((a, b) => b.cgpa - a.cgpa)
    .slice(0, 5);

  return (
    <div className="RD-container">
      <h1 className="RD-title">📊 University Report Dashboard</h1>

      {/* KPI Cards */}
      <div className="RD-kpiRow">
        <div className="RD-card RD-cardBlue">
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>
        <div className="RD-card RD-cardGreen">
          <h3>Top Dept</h3>
          <p>
            {topDept.dept} (GPA {topDept.avgGPA})
          </p>
        </div>
        <div className="RD-card RD-cardOrange">
          <h3>Avg Pass %</h3>
          <p>{avgPassRate.toFixed(2)}%</p>
        </div>
        <div className="RD-card RD-cardPurple">
          <h3>Avg Univ GPA</h3>
          <p>{avgUniGPA.toFixed(2)}</p>
        </div>
      </div>

      {/* Comparison Charts */}
      <div className="RD-chartRow">
        <h2>📈 Department-wise Pass %</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={deptStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dept" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="passRate" fill="#2d24daff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="RD-chartRow">
        <h2>🎓 Department-wise Avg GPA</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={deptStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dept" />
            <YAxis domain={[0, 4]} />
            <Tooltip />
            <Bar dataKey="avgGPA" fill="#27cc66ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Students */}
      <div className="RD-topStudents">
        <h2>🏆 Top 5 Students</h2>
        <table className="RD-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Dept</th>
              <th>Email</th>
              <th>Semester</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody>
            {topStudents.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.dept}</td>
                <td>{stu.email}</td>
                <td>{stu.semester}</td>
                <td>{stu.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportDashboard;
