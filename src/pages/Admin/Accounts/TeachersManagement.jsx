import { useState } from "react";
import "../Accounts/css/TeachersManagement.css";

function TeachersManagement() {
  const departments = ["CSE", "EEE", "SWE", "Textile"];

  const initialTeachers = {
    CSE: [
      { id: "T001", name: "Dr. Ayesha Rahman", dept: "CSE", designation: "Senior Lecturer", tenure: 3, salary: 60000, contact: "017xxxxxxx", studentReport: "Yes" },
      { id: "T002", name: "Dr. Rahat Hossain", dept: "CSE", designation: "Lecturer", tenure: 1, salary: 45000, contact: "018xxxxxxx", studentReport: "No" },
    ],
    EEE: [],
    SWE: [],
    Textile: [],
  };

  const [teachers, setTeachers] = useState(initialTeachers);
  const [selectedDept, setSelectedDept] = useState("CSE");
  const [modalOpen, setModalOpen] = useState(false);
  const [actionTeacher, setActionTeacher] = useState(null);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    designation: "",
    tenure: "",
    salary: "",
    contact: "",
    studentReport: "No",
    dept: selectedDept,
  });

  const openAddForm = () => {
    setFormData({ id: "", name: "", designation: "", tenure: "", salary: "", contact: "", studentReport: "No", dept: selectedDept });
    setActionTeacher(null);
    setModalOpen(true);
  };

  const openEditForm = (teacher) => {
    setFormData({ ...teacher });
    setActionTeacher(teacher);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (actionTeacher) {
      setTeachers({
        ...teachers,
        [selectedDept]: teachers[selectedDept].map((t) => t.id === actionTeacher.id ? formData : t),
      });
    } else {
      setTeachers({
        ...teachers,
        [selectedDept]: [...teachers[selectedDept], formData],
      });
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this teacher?")) {
      setTeachers({
        ...teachers,
        [selectedDept]: teachers[selectedDept].filter((t) => t.id !== id),
      });
    }
  };

  const viewProfile = (teacher) => {
    alert(`Demo Profile: ${teacher.name}\nDesignation: ${teacher.designation}\nDept: ${teacher.dept}`);
  };

  return (
    <div className="teacher2-container">
      <h2>Teachers Management</h2>

      {/* Department Filter */}
      <div className="dept-buttons">
        {departments.map((dept) => (
          <button
            key={dept}
            className={selectedDept === dept ? "active" : ""}
            onClick={() => setSelectedDept(dept)}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Add Teacher */}
      <button className="add-btn" onClick={openAddForm}>+ Add Teacher</button>

      {/* Teacher Table */}
      <div className="teacher-table">
        <div className="table-header">
          <span>ID</span>
          <span>Name</span>
          <span>Dept</span>
          <span>Designation</span>
          <span>Tenure (yrs)</span>
          <span>Salary</span>
          <span>Contact</span>
          <span>Student Report</span>
          <span>Actions</span>
        </div>

        {teachers[selectedDept].map((t) => (
          <div className="table-row" key={t.id}>
            <span>{t.id}</span>
            <span>{t.name}</span>
            <span>{t.dept}</span>
            <span>{t.designation}</span>
            <span>{t.tenure}</span>
            <span>{t.salary}</span>
            <span>{t.contact}</span>
            <span>{t.studentReport}</span>
            <span className="actionsTM">
              <button onClick={() => openEditForm(t)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
              <button onClick={() => viewProfile(t)}>Profile</button>
            </span>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {modalOpen && (
        <div className="modal-backdrop1">
          <div className="modal1">
            <h3>{actionTeacher ? "Edit Teacher" : "Add Teacher"}</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="ID" value={formData.id} onChange={(e) => setFormData({ ...formData, id: e.target.value })} required />
              <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              <input type="text" placeholder="Designation" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} required />
              <input type="number" placeholder="Tenure (years)" value={formData.tenure} onChange={(e) => setFormData({ ...formData, tenure: e.target.value })} required />
              <input type="number" placeholder="Salary" value={formData.salary} onChange={(e) => setFormData({ ...formData, salary: e.target.value })} required />
              <input type="text" placeholder="Contact" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} required />
              <select value={formData.studentReport} onChange={(e) => setFormData({ ...formData, studentReport: e.target.value })}>
                <option>No</option>
                <option>Yes</option>
              </select>
              <input type="text" placeholder="Department" value={formData.dept} onChange={(e) => setFormData({ ...formData, dept: e.target.value })} required />
              <div className="modal-actions2">
                <button type="submit">{actionTeacher ? "Update" : "Add"}</button>
                <button type="buttonT" onClick={() => setModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeachersManagement;
