import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./css/ExamRoutine.css";

function ExamRoutine({ routines }) {
  const [deptFilter, setDeptFilter] = useState("");
  const [batchFilter, setBatchFilter] = useState("");
  const [teacherFilter, setTeacherFilter] = useState("");

  // Filtering logic
  const filteredRoutines = routines.filter(
    r =>
      (deptFilter ? r.dept === deptFilter : true) &&
      (batchFilter ? r.batch === batchFilter : true) &&
      (teacherFilter ? r.invigilator.toLowerCase().includes(teacherFilter.toLowerCase()) : true)
  );

  const downloadRoutine = async () => {
    const element = document.querySelector(".ER-container");
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("exam_routine.pdf");
  };

  return (
    <div className="ER-container">
      <h2>Exam Routine</h2>

      {/* Filters */}
      <div className="ER-filters">
        <select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)}>
          <option value="">All Departments</option>
          {[...new Set(routines.map(r => r.dept))].map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select value={batchFilter} onChange={(e) => setBatchFilter(e.target.value)}>
          <option value="">All Batches</option>
          {[...new Set(routines.map(r => r.batch))].map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by Teacher"
          value={teacherFilter}
          onChange={(e) => setTeacherFilter(e.target.value)}
        />

        <button className="ER-btn-download" onClick={downloadRoutine}>
          Download PDF
        </button>
      </div>

      {/* Routine Table */}
      <table className="ER-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Department</th>
            <th>Batch</th>
            <th>Subject</th>
            <th>Room</th>
            <th>Time</th>
            <th>Invigilator</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoutines.length === 0 ? (
            <tr>
              <td colSpan="7">No routines found</td>
            </tr>
          ) : (
            filteredRoutines.map((r, i) => (
              <tr key={i}>
                <td>{r.date}</td>
                <td>{r.dept}</td>
                <td>{r.batch}</td>
                <td>{r.subject}</td>
                <td>{r.room}</td>
                <td>{r.time}</td>
                <td>{r.invigilator}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExamRoutine;
