import { useState } from "react";
import "../Accounts/css/StudentManagement.css"

function StudentManagement() {
  const departments = ["CSE", "EEE", "SWE", "Textile"];

  const initialStudents = {
    CSE: [
      { id: "CSE001", name: "Ayesha Rahman", dept: "CSE", result: 3.55, contact: "017xxxxxxx", credit: 120, report: "Yes" },
      { id: "CSE002", name: "Rahat Hossain", dept: "CSE", result: 3.25, contact: "018xxxxxxx", credit: 118, report: "No" },
      { id: "CSE003", name: "Tanvir Alam", dept: "CSE", result: 3.85, contact: "019xxxxxxx", credit: 122, report: "Yes" },
      { id: "CSE004", name: "Sara Khan", dept: "CSE", result: 3.60, contact: "016xxxxxxx", credit: 119, report: "No" },
      { id: "CSE005", name: "Nayeem Islam", dept: "CSE", result: 3.45, contact: "015xxxxxxx", credit: 121, report: "Yes" },
    ],
    EEE: [
      { id: "EEE001", name: "John Doe", dept: "EEE", result: 3.50, contact: "017xxxxxxx", credit: 120, report: "Yes" },
      { id: "EEE002", name: "Jane Smith", dept: "EEE", result: 3.30, contact: "018xxxxxxx", credit: 118, report: "No" },
      { id: "EEE003", name: "Ali Hasan", dept: "EEE", result: 3.70, contact: "019xxxxxxx", credit: 122, report: "Yes" },
      { id: "EEE004", name: "Rina Akter", dept: "EEE", result: 3.40, contact: "016xxxxxxx", credit: 119, report: "No" },
      { id: "EEE005", name: "Farhan Ahmed", dept: "EEE", result: 3.65, contact: "015xxxxxxx", credit: 121, report: "Yes" },
    ],
    SWE: [
      { id: "SWE001", name: "Lina Roy", dept: "SWE", result: 3.55, contact: "017xxxxxxx", credit: 120, report: "Yes" },
      { id: "SWE002", name: "Rakib Khan", dept: "SWE", result: 3.25, contact: "018xxxxxxx", credit: 118, report: "No" },
      { id: "SWE003", name: "Mita Rahman", dept: "SWE", result: 3.85, contact: "019xxxxxxx", credit: 122, report: "Yes" },
      { id: "SWE004", name: "Tanvir Hasan", dept: "SWE", result: 3.60, contact: "016xxxxxxx", credit: 119, report: "No" },
      { id: "SWE005", name: "Shawon Islam", dept: "SWE", result: 3.45, contact: "015xxxxxxx", credit: 121, report: "Yes" },
    ],
    Textile: [
      { id: "TEX001", name: "Sara Noor", dept: "Textile", result: 3.50, contact: "017xxxxxxx", credit: 120, report: "Yes" },
      { id: "TEX002", name: "Rahat Ali", dept: "Textile", result: 3.30, contact: "018xxxxxxx", credit: 118, report: "No" },
      { id: "TEX003", name: "Nila Khan", dept: "Textile", result: 3.70, contact: "019xxxxxxx", credit: 122, report: "Yes" },
      { id: "TEX004", name: "Tanvir Roy", dept: "Textile", result: 3.40, contact: "016xxxxxxx", credit: 119, report: "No" },
      { id: "TEX005", name: "Farhan Islam", dept: "Textile", result: 3.65, contact: "015xxxxxxx", credit: 121, report: "Yes" },
    ],
  };

  const [students, setStudents] = useState(initialStudents);
  const [selectedDept, setSelectedDept] = useState("CSE");
  const [modalOpen, setModalOpen] = useState(false);
  const [actionStudent, setActionStudent] = useState(null); // for edit / message

  // form state
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    result: "",
    contact: "",
    credit: "",
    report: "No",
    parentContact: "",
    parentEmail: "",
  });

  const openAddForm = () => {
    setFormData({ id: "", name: "", result: "", contact: "", credit: "", report: "No", parentContact: "", parentEmail: "" });
    setActionStudent(null);
    setModalOpen(true);
  };

  const openEditForm = (student) => {
    setFormData({ ...student });
    setActionStudent(student);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (actionStudent) {
      // Edit existing
      setStudents({
        ...students,
        [selectedDept]: students[selectedDept].map((s) =>
          s.id === actionStudent.id ? formData : s
        ),
      });
    } else {
      // Add new
      setStudents({
        ...students,
        [selectedDept]: [...students[selectedDept], formData],
      });
    }
    setModalOpen(false);
  };

  const handleDelete = (studentId) => {
    if (window.confirm("Are you sure to delete this student?")) {
      setStudents({
        ...students,
        [selectedDept]: students[selectedDept].filter((s) => s.id !== studentId),
      });
    }
  };

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageContent, setMessageContent] = useState("");




  return (
    <div className="student-container1">
      <h2>Student Management</h2>

      {/* Departments */}
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

      {/* Add Student */}
      <button className="add-btn" onClick={openAddForm}>+ Add Student</button>

      {/* Student Table */}
      <div className="student-table">
        <div className="table-header">
          <span>Student ID</span>
          <span>Name</span>
          <span>Dept</span>
          <span>Result</span>
          <span>Contact</span>
          <span>Credit</span>
          <span>Report</span>
          <span>Actions</span>
        </div>

        {students[selectedDept].map((s) => (
          <div className="table-row" key={s.id}>
            <span>{s.id}</span>
            <span>{s.name}</span>
            <span>{s.dept}</span>
            <span>{parseFloat(s.result).toFixed(2)}</span>
            <span>{s.contact}</span>
            <span>{s.credit}</span>
            <span>{s.report}</span>
            <span className="actionsSM">
              <button onClick={() => openEditForm(s)}>Edit</button>
              <button onClick={() => handleDelete(s.id)}>Delete</button>
            </span>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {modalOpen && (
        <div className="modal-backdropSM">
          <div className="modalSM">
            <h3>{actionStudent ? "Edit Student" : "Add Student"}</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Student ID" value={formData.id} onChange={(e) => setFormData({ ...formData, id: e.target.value })} required />
              <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              <input type="number" step="0.01" placeholder="Result (GPA)" value={formData.result} onChange={(e) => setFormData({ ...formData, result: e.target.value })} required />
              <input type="text" placeholder="Contact" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} required />
              <input type="number" placeholder="Complete Credit" value={formData.credit} onChange={(e) => setFormData({ ...formData, credit: e.target.value })} required />
              <select value={formData.report} onChange={(e) => setFormData({ ...formData, report: e.target.value })}>
                <option>No</option>
                <option>Yes</option>
              </select>
              <input type="text" placeholder="Parent Contact" value={formData.parentContact} onChange={(e) => setFormData({ ...formData, parentContact: e.target.value })} required />
              <input type="email" placeholder="Parent Email" value={formData.parentEmail} onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })} required />
              <div className="modal-actions">
                <button type="submit">{actionStudent ? "Update" : "Add"}</button>
                <button type="button" onClick={() => setModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default StudentManagement;
