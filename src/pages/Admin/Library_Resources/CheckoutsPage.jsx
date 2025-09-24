import React, { useState } from "react";
import { checkouts as initialCheckouts } from "./sampleResources.js";
import "./css/CheckoutsPage.css";

const CheckoutsPage = () => {
  const [checkouts, setCheckouts] = useState(initialCheckouts);
  const today = new Date();

  const calculateFine = (checkout) => {
    const dueDate = new Date(checkout.dueDate);
    const daysOverdue = Math.floor((today - dueDate) / (1000 * 60 * 60 * 24));
    return daysOverdue > 0 ? daysOverdue * 5 : 0;
  };

  const addFine = (id) => {
  const today = new Date(); // recalc each click
  setCheckouts(prev =>
    prev.map(c => {
      if (c.id === id) {
        const dueDate = new Date(c.dueDate);
        const daysOverdue = Math.max(0, Math.floor((today - dueDate) / (1000*60*60*24)));
        return { ...c, fine: daysOverdue * 5, overdue: daysOverdue > 0, status: daysOverdue > 0 ? "Overdue" : "Active" };
      }
      return c;
    })
  );
};



  const payDue = (studentName) => {
    // Remove all checkouts for this student
    setCheckouts(prev => prev.filter(c => c.name !== studentName));
  };

  // Compute summary dynamically
  const studentFines = checkouts.reduce((acc, c) => {
    if (!acc[c.name]) acc[c.name] = { books: 0, totalFine: 0 };
    if (c.fine && c.fine > 0) {
      acc[c.name].books += 1;
      acc[c.name].totalFine += c.fine;
    }
    return acc;
  }, {});

  return (
    <div className="CP-container">
      <h1 className="CP-title">📋 Checkout / Borrowing Overview</h1>

      {/* Checkout Table */}
      <h2>Current Checkouts</h2>
      <table className="CP-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Resource</th>
            <th>Date Borrowed</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Fine ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {checkouts.map(c => (
            <tr key={c.id} className={c.overdue ? "CP-overdue" : ""}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.resource}</td>
              <td>{c.dateBorrowed}</td>
              <td>{c.dueDate}</td>
              <td>{c.status || "Active"}</td>
              <td>{c.fine || 0}</td>
              <td>
                {c.status !== "Paid" && (
                  <button className="CP-btn" onClick={() => addFine(c.id)}>
                    Add Fine
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Student Fine Summary */}
      <h2>Student Fine Summary</h2>
      <table className="CP-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Books Overdue</th>
            <th>Total Fine ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(studentFines).map(([name, info]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{info.books}</td>
              <td>{info.totalFine}</td>
              <td>
                <button className="CP-btn-green" onClick={() => payDue(name)}>
                  Pay Due
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutsPage;
