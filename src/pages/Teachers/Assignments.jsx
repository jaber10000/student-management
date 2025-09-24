import { useState } from "react";
import "../Teachers/css/Assignments.css"

function Assignments() {
  const [assignments, setAssignments] = useState([
    { id: 1, course: "Data Structures", title: "Linked List", due: "2025-09-25", status: "Pending" },
    { id: 2, course: "Machine Learning", title: "Regression Project", due: "2025-09-28", status: "Pending" },
  ]);

  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ course: "", title: "", due: "", status: "Pending" });

  const handleEdit = (a) => { setEditId(a.id); setFormData({ ...a }); };
  const handleDelete = (id) => setAssignments(assignments.filter(a => a.id !== id));
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setAssignments(assignments.map(a => a.id === editId ? { ...formData, id: editId } : a));
      setEditId(null);
    } else {
      setAssignments([...assignments, { ...formData, id: assignments.length + 1 }]);
    }
    setFormData({ course: "", title: "", due: "", status: "Pending" });
  };

  return (
    <div className="teacher-assignments-box">
      <h2>📝 Assignment Management</h2>
      <table>
        <thead>
          <tr>
            <th>#</th><th>Course</th><th>Title</th><th>Due</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a, i) => (
            <tr key={a.id}>
              <td>{i+1}</td>
              <td>{a.course}</td>
              <td>{a.title}</td>
              <td>{a.due}</td>
              <td>{a.status}</td>
              <td>
                <button onClick={() => handleEdit(a)}>Edit</button>
                <button onClick={() => handleDelete(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <input name="course" value={formData.course} onChange={handleChange} placeholder="Course" required />
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <input name="due" value={formData.due} onChange={handleChange} type="date" required />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button>{editId ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default Assignments;
