import React, { useState, useRef } from "react";
import FinanceDashboard from "./FinanceDashboard";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./css/FinanceApp.css";

function FinanceApp() {
  const [staffCount, setStaffCount] = useState(50);
  const [staffPayroll, setStaffPayroll] = useState(250000);
  const [expenses, setExpenses] = useState(150000);
  const [income, setIncome] = useState(500000);

  const [scholarships, setScholarships] = useState([
    { id: 1, name: "John Doe", dept: "CSE", batch: "2021", amount: 5000, status: "Pending" },
    { id: 2, name: "Jane Smith", dept: "EEE", batch: "2020", amount: 3000, status: "Pending" },
    { id: 3, name: "Ali Khan", dept: "CSE", batch: "2022", amount: 4000, status: "Pending" },
  ]);

  const tableRef = useRef();

  const downloadPDF = async () => {
    if (!tableRef.current) return;
    const canvas = await html2canvas(tableRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("scholarships.pdf");
  };

  // Approve scholarship & deduct amount from income
  const handleApprove = (id) => {
    setScholarships(prev =>
      prev.map(s => s.id === id ? { ...s, status: "Approved" } : s)
    );

    const approved = scholarships.find(s => s.id === id);
    if (approved && approved.status === "Pending") {
      setIncome(prev => prev - approved.amount);
    }
  };

  const handleReject = (id) => {
    setScholarships(prev =>
      prev.map(s => s.id === id ? { ...s, status: "Rejected" } : s)
    );
  };

  return (
    <div className="FR-container">
      {/* Finance Dashboard */}
      <FinanceDashboard
        staffCount={staffCount}
        staffPayroll={staffPayroll}
        expenses={expenses}
        income={income}
        scholarships={scholarships}
      />

      {/* Scholarship Table */}
      <div className="FR-table-container" ref={tableRef}>
        <h2>Scholarships / Financial Aid</h2>
        <table className="FR-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Batch</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.dept}</td>
                <td>{s.batch}</td>
                <td>{s.amount}</td>
                <td>{s.status}</td>
                <td>
                  {s.status === "Pending" && (
                    <>
                      <button className="FR-btn-approve" onClick={() => handleApprove(s.id)}>Approve</button>
                      <button className="FR-btn-reject" onClick={() => handleReject(s.id)}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="FR-btn-download" onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
  );
}

export default FinanceApp;
