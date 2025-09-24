import React, { useState } from "react";
import Chart from "chart.js/auto";
import "./css/FinanceDashboard.css";

function ChartWrapper({ type, data, options }) {
  const canvasRef = React.useRef(null);
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (chartRef.current) chartRef.current.destroy();
    const ctx = canvasRef.current.getContext("2d");
    chartRef.current = new Chart(ctx, { type, data, options: options || {} });
    return () => { if (chartRef.current) chartRef.current.destroy(); };
  }, [type, data, options]);

  return <canvas ref={canvasRef}></canvas>;
}

function FinanceDashboard({ staffCount, staffPayroll, expenses, income, scholarships }) {
  const [staff, setStaff] = useState(staffCount);
  const [payroll, setPayroll] = useState(staffPayroll);
  const [exp, setExp] = useState(expenses);
  const [inc, setInc] = useState(income);

  const [editField, setEditField] = useState(""); 
  const [tempValue, setTempValue] = useState("");

  const handleEditClick = (field, currentValue) => {
    setEditField(field);
    setTempValue(currentValue);
  };

  const handleSave = () => {
    const val = parseInt(tempValue) || 0;
    if (editField === "staff") setStaff(val);
    if (editField === "payroll") setPayroll(val);
    if (editField === "exp") setExp(val);
    if (editField === "inc") setInc(val);
    setEditField("");
    setTempValue("");
  };

  const profit = inc - exp - payroll;
  const years = ["2022", "2023", "2024"];
  const incomeData = [400000, 450000, inc];
  const expenseData = [120000, 140000, exp];
  const payrollData = [200000, 210000, payroll];
  const profitData = incomeData.map((i, idx) => i - expenseData[idx]);

  const initialTuition = 389000; // original tuition
const initialScholarship = 11000; // base scholarship amount

const approvedScholarships = scholarships.filter(s => s.status === "Approved");

const scholarshipTotal = approvedScholarships.reduce((sum, s) => sum + s.amount, initialScholarship);

// Tuition reduces as scholarships are approved
const tuition = initialTuition - approvedScholarships.reduce((sum, s) => sum + s.amount, 0);


  const deptPayroll = { CSE: 80000, EEE: 70000, CHE: 50000, BIO: 60000 };

  return (
    <div className="FD-container">
      <h1 className="FD-title">Finance & Revenue Dashboard</h1>

      {/* ===== Row 1: Summary Cards ===== */}
      <div className="FD-row FD-cards-row">
        {[
          { label: "Staff", value: staff, field: "staff", color: "FD-staff" },
          { label: "Staff Payroll", value: payroll, field: "payroll", color: "FD-payroll" },
          { label: "Income", value: inc, field: "inc", color: "FD-income" },
          { label: "Expenses", value: exp, field: "exp", color: "FD-expenses" },
          { label: "Profit / Loss", value: profit, field: null, isProfit: true, color: profit >= 0 ? "FD-profit" : "FD-loss" },
        ].map((card, idx) => (
          <div key={idx} className={`FD-card ${card.color}`}>
            <h3>{card.label}</h3>
            <p>${card.value.toLocaleString()}</p>
            {!card.isProfit && (
              <>
                <span className="FD-edit-icon" onClick={() => handleEditClick(card.field, card.value)}>✏️</span>
                {editField === card.field && (
                  <div className="FD-edit-form">
                    <input type="number" value={tempValue} onChange={(e) => setTempValue(e.target.value)} />
                    <button onClick={handleSave}>Save</button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* ===== Row 2: Charts ===== */}
      <div className="FD-row FD-charts-row">
        <div className="FD-chart-container">
          <h3>Income Trend</h3>
          <ChartWrapper type="line" data={{ labels: years, datasets: [{ label: "Income", data: incomeData, borderColor: "#44bd32", backgroundColor: "#44bd32aa", fill: true }] }} />
        </div>
        <div className="FD-chart-container">
          <h3>Expense Trend</h3>
          <ChartWrapper type="bar" data={{ labels: years, datasets: [{ label: "Expense", data: expenseData, backgroundColor: "#e84118" }] }} />
        </div>
        <div className="FD-chart-container">
          <h3>Profit Trend</h3>
          <ChartWrapper type="line" data={{ labels: years, datasets: [{ label: "Profit", data: profitData, borderColor: "#fbc531", backgroundColor: "#fbc531aa", fill: true }] }} />
        </div>
      </div>

      {/* ===== Row 3: Other Charts ===== */}
      <div className="FD-row FD-charts-row">
        <div className="FD-chart-container pie-chart" style={{ maxWidth: "350" }}>
          <h3>Tuition vs Scholarship</h3>
          <ChartWrapper type="pie" data={{
            labels: ["Tuition", "Scholarship"],
            datasets: [{ data: [tuition, scholarshipTotal], backgroundColor: ["#3498db", "#9b59b6"] }]
          }} />
        </div>
        <div className="FD-chart-container">
          <h3>Department Payroll</h3>
          <ChartWrapper type="bar" data={{
            labels: Object.keys(deptPayroll),
            datasets: [{ label: "Payroll", data: Object.values(deptPayroll), backgroundColor: "#e67e22" }]
          }} />
        </div>
        <div className="FD-chart-container">
          <h3>Staff vs Teachers Trend</h3>
          <ChartWrapper type="line" data={{
            labels: years,
            datasets: [
              { label: "Staff", data: [45, 48, staff], borderColor: "#2ecc71", fill: false },
              { label: "Teachers", data: [20, 22, 25], borderColor: "#3498db", fill: false }
            ]
          }} />
        </div>
      </div>
    </div>
  );
}

export default FinanceDashboard;
