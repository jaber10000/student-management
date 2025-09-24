import { useState } from "react";
import "../Teachers/css/Grades.css"; 

function Grades() {
  const [grades, setGrades] = useState([
    {
      id: 1,
      studentId: "20250101",
      name: "John Doe",
      subject: "Mathematics",
      type: "Theory",
      attendance: 7,
      assignment: 5,
      presentation: 8,
      quiz: 15,
      midterm: 25,
      final: 40,
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    subject: "",
    type: "Theory",
    attendance: 0,
    assignment: 0,
    presentation: 0,
    quiz: 0,
    midterm: 0,
    final: 0,
    labReport: 0,
    labPerformance: 0,
    labFinal: 0,
    viva: 0,
  });

  // Grade calculation
  const calculateGrade = (marks) => {
    if (marks >= 80) return { grade: "A+", point: 4.0, remarks: "Outstanding" };
    if (marks >= 75) return { grade: "A", point: 3.75, remarks: "Excellent" };
    if (marks >= 70) return { grade: "A-", point: 3.5, remarks: "Very Good" };
    if (marks >= 65) return { grade: "B+", point: 3.25, remarks: "Good" };
    if (marks >= 60) return { grade: "B", point: 3.0, remarks: "Satisfactory" };
    if (marks >= 55) return { grade: "B-", point: 2.75, remarks: "Above Average" };
    if (marks >= 50) return { grade: "C+", point: 2.5, remarks: "Average" };
    if (marks >= 45) return { grade: "C", point: 2.25, remarks: "Below Average" };
    if (marks >= 40) return { grade: "D", point: 2.0, remarks: "Pass" };
    return { grade: "F", point: 0, remarks: "Fail" };
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setGrades(
        grades.map((g) => (g.id === editId ? { ...g, ...formData } : g))
      );
      setEditId(null);
    } else {
      setGrades([...grades, { ...formData, id: grades.length + 1 }]);
    }
    setFormData({
      studentId: "",
      name: "",
      subject: "",
      type: "Theory",
      attendance: 0,
      assignment: 0,
      presentation: 0,
      quiz: 0,
      midterm: 0,
      final: 0,
      labReport: 0,
      labPerformance: 0,
      labFinal: 0,
      viva: 0,
    });
  };

  const handleEdit = (g) => {
    setEditId(g.id);
    setFormData({ ...g });
  };

  const handleDelete = (id) => setGrades(grades.filter((g) => g.id !== id));

  const computeTotal = (g) => {
    if (g.type === "Theory")
      return (
        Number(g.attendance) +
        Number(g.assignment) +
        Number(g.presentation) +
        Number(g.quiz) +
        Number(g.midterm) +
        Number(g.final)
      );
    else
      return (
        Number(g.attendance) +
        Number(g.labReport) +
        Number(g.labPerformance) +
        Number(g.labFinal) +
        Number(g.viva)
      );
  };

  return (
    <div className="teacher-grades-box">
      <h2>📊 Upload / View Grades</h2>

      {/* Grades Table */}
      <table className="grades-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Type</th>
            <th>Total Marks</th>
            <th>Grade</th>
            <th>Grade Point</th>
            <th>Remarks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g, i) => {
            const total = computeTotal(g);
            const { grade, point, remarks } = calculateGrade(total);
            return (
              <tr key={g.id}>
                <td>{i + 1}</td>
                <td>{g.studentId}</td>
                <td>{g.name}</td>
                <td>{g.subject}</td>
                <td>{g.type}</td>
                <td>{total}</td>
                <td>{grade}</td>
                <td>{point.toFixed(2)}</td>
                <td>{remarks}</td>
                <td>
                  <button className="btn edit-btn" onClick={() => handleEdit(g)}>Edit</button>
                  <button className="btn delete-btn" onClick={() => handleDelete(g.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Add/Edit Form */}
      <form className="grades-form" onSubmit={handleSubmit}>
        <input name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Student ID" required />
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" required />
        <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Theory">Theory</option>
          <option value="Lab">Lab</option>
        </select>

        {formData.type === "Theory" && (
          <>
            <input name="attendance" type="number" value={formData.attendance} onChange={handleChange} placeholder="Attendance (max 7)" required />
            <input name="assignment" type="number" value={formData.assignment} onChange={handleChange} placeholder="Assignment (max 5)" required />
            <input name="presentation" type="number" value={formData.presentation} onChange={handleChange} placeholder="Presentation (max 8)" required />
            <input name="quiz" type="number" value={formData.quiz} onChange={handleChange} placeholder="Quiz (max 15)" required />
            <input name="midterm" type="number" value={formData.midterm} onChange={handleChange} placeholder="Midterm (max 25)" required />
            <input name="final" type="number" value={formData.final} onChange={handleChange} placeholder="Final (max 40)" required />
          </>
        )}

        {formData.type === "Lab" && (
          <>
            <input name="attendance" type="number" value={formData.attendance} onChange={handleChange} placeholder="Attendance (max 10)" required />
            <input name="labReport" type="number" value={formData.labReport} onChange={handleChange} placeholder="Lab Report / Assignment (max 25)" required />
            <input name="labPerformance" type="number" value={formData.labPerformance} onChange={handleChange} placeholder="Lab Performance (max 25)" required />
            <input name="labFinal" type="number" value={formData.labFinal} onChange={handleChange} placeholder="Lab Final / Project (max 25)" required />
            <input name="viva" type="number" value={formData.viva} onChange={handleChange} placeholder="Viva (max 15)" required />
          </>
        )}

        <button className="btn primary">{editId ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default Grades;
