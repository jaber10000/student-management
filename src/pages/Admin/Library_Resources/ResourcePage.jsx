// ResourcesPage.jsx
import React, { useState } from "react";
import { resources as initialResources } from "./sampleResources";
import "./css/ResourcesPage.css";

function ResourcesPage() {
  const [resources, setResources] = useState(initialResources);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "Book",
    dept: "",
    author: "",
    available: true,
    usageCount: "",
  });

  const handleEdit = (res) => {
    setEditId(res.id);
    setFormData({ ...res });
  };

  const handleDelete = (id) => {
    setResources(resources.filter((r) => r.id !== id));
  };

  const handleSave = () => {
    if (editId) {
      setResources(resources.map((r) => (r.id === editId ? formData : r)));
    } else {
      const newRes = { ...formData, id: `R${Math.floor(Math.random() * 1000)}` };
      setResources([...resources, newRes]);
    }
    setEditId(null);
    setFormData({ title: "", type: "Book", dept: "", author: "", available: true, usageCount: 0 });
  };

  return (
    <div className="RP-container">
      <h1 className="RP-title">📚 Resource Management</h1>

      {/* Add / Edit Form */}
      <div className="RP-form">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Department"
          value={formData.dept}
          onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Usage Count"
          min=""
          value={formData.usageCount}
          onChange={(e) => setFormData({ ...formData, usageCount: parseInt(e.target.value) || "" })}
        />

        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option>Book</option>
          <option>Document</option>
          <option>Online</option>
        </select>
        <label>
          Available:
          <input
            type="checkbox"
            checked={formData.available}
            onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
          />
        </label>
        <button onClick={handleSave}>{editId ? "Update" : "Add"} Resource</button>
      </div>

      {/* Resource Table */}
      <table className="RP-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Type</th>
            <th>Department</th>
            <th>Author</th>
            <th>Available</th>
            <th>Usage Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.title}</td>
              <td>{r.type}</td>
              <td>{r.dept}</td>
              <td>{r.author}</td>
              <td>{r.available ? "✅" : "❌"}</td>
              <td>{r.usageCount}</td>
              <td>
                <button className="RP-btn-edit" onClick={() => handleEdit(r)}>Edit</button>
                <button className="RP-btn-delete" onClick={() => handleDelete(r.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResourcesPage;
