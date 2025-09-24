import { useState } from "react";
import "../Accounts/css/AdminStaffManagement.css";

function AdminStaffManagement() {
  const roles = ["Admin", "HR", "Registrar", "Sub-Registrar", "Dept. Head"];
  const departments = ["CSE", "EEE", "SWE", "Textile", "Library", "HR Office"];

  const initialStaff = [
    { id: "S001", name: "John Doe", email: "jdoe@univ.edu", contact: "017xxxxxxx", role: "Admin", permissions: "Full", status: "Active", lastLogin: "2025-09-20 10:45", createdOn: "2023-01-15", department: "Admin Office", courses: "N/A", committees: "Policy Committee" },
    { id: "S002", name: "Mary Jane", email: "mjane@univ.edu", contact: "018xxxxxxx", role: "Registrar", permissions: "Limited", status: "Active", lastLogin: "2025-09-18 09:30", createdOn: "2022-08-12", department: "Registrar Office", courses: "CS101, CS102", committees: "Examination Committee" },
    { id: "S003", name: "Temporary HR", email: "temp.hr@univ.edu", contact: "019xxxxxxx", role: "HR", permissions: "Limited", status: "Active", lastLogin: "2025-09-19 14:10", createdOn: "2025-09-22", department: "HR Office", courses: "N/A", committees: "N/A" },
  ];

  const [staffList, setStaffList] = useState(initialStaff);
  const [filterRole, setFilterRole] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [newStaff, setNewStaff] = useState({ name: "", email: "", role: "", department: "" });

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("view"); // "view" or "edit"
  const [currentStaff, setCurrentStaff] = useState(null);

  const filteredStaff = staffList.filter(s => {
    return (
      (filterRole ? s.role === filterRole : true) &&
      (filterDept ? s.department === filterDept : true) &&
      (searchQuery
        ? s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.email.toLowerCase().includes(searchQuery.toLowerCase())
        : true)
    );
  });

  // Add new staff
const handleAddStaff = () => {
  if (!newStaff.name || !newStaff.email || !newStaff.role || !newStaff.department) {
    alert("Please fill all required fields");
    return;
  }

  const id = "S" + (staffList.length + 1).toString().padStart(3, "0");

  setStaffList([
    ...staffList,
    {
      id,
      name: newStaff.name,
      email: newStaff.email,
      contact: newStaff.contact || "", // empty string if not provided
      role: newStaff.role,
      permissions: "Limited",
      status: "Active",
      lastLogin: new Date().toLocaleString(), // current date-time
      createdOn: new Date().toISOString().split("T")[0],
      department: newStaff.department,
      courses: newStaff.courses || "", // empty string if not provided
      committees: newStaff.committees || "" // empty string if not provided
    }
  ]);

  // Reset the form
  setNewStaff({ name: "", email: "", role: "", department: "", contact: "", courses: "", committees: "" });
};

  // Action buttons
  const handleView = (staff) => {
    setModalMode("view");
    setCurrentStaff(staff);
    setModalOpen(true);
  };

  const handleEdit = (staff) => {
    setModalMode("edit");
    setCurrentStaff(staff);
    setModalOpen(true);
  };

  const handleSuspend = (staff) => {
    if (window.confirm(`Suspend ${staff.name}?`)) {
      setStaffList(staffList.map(s => s.id === staff.id ? { ...s, status: "Suspended" } : s));
    }
  };

  const handleEmail = (staff) => alert(`Email sent to ${staff.email}`);

  const handleModalChange = (field, value) => {
    setCurrentStaff({ ...currentStaff, [field]: value });
  };

  const saveModalChanges = () => {
    setStaffList(staffList.map(s => s.id === currentStaff.id ? currentStaff : s));
    setModalOpen(false);
  };

  return (
    <div className="admin-container2">
      <h2>Staff / Admin Management</h2>

      {/* Filters */}
      <div className="filters">
        <select value={filterRole} onChange={e => setFilterRole(e.target.value)}>
          <option value="">All Roles</option>
          {roles.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select value={filterDept} onChange={e => setFilterDept(e.target.value)}>
          <option value="">All Departments</option>
          {departments.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <input
          type="text"
          placeholder="Search by Name or Email"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add Temporary Staff */}
<div className="add-staff-form2">
  <input
    type="text"
    placeholder="Name"
    value={newStaff.name}
    onChange={e => setNewStaff({ ...newStaff, name: e.target.value })}
  />
  <input
    type="email"
    placeholder="Email"
    value={newStaff.email}
    onChange={e => setNewStaff({ ...newStaff, email: e.target.value })}
  />
  <input
    type="text"
    placeholder="Phone Number"
    value={newStaff.contact || ""}
    onChange={e => setNewStaff({ ...newStaff, contact: e.target.value })}
  />
  <select
    value={newStaff.role}
    onChange={e => setNewStaff({ ...newStaff, role: e.target.value })}
  >
    <option value="">Select Role</option>
    {roles.map(r => <option key={r} value={r}>{r}</option>)}
  </select>
  <select
    value={newStaff.department}
    onChange={e => setNewStaff({ ...newStaff, department: e.target.value })}
  >
    <option value="">Select Department</option>
    {departments.map(d => <option key={d} value={d}>{d}</option>)}
  </select>
  <input
    type="text"
    placeholder="Courses / Committees"
    value={newStaff.courses || ""}
    onChange={e => setNewStaff({ ...newStaff, courses: e.target.value })}
  />
  <button onClick={handleAddStaff}>Add</button>
</div>


      {/* Staff Table */}
      <div className="staff-table2">
        <div className="table-header2">
          <span>Name</span>
          <span>Email / ID</span>
          <span>Contact</span>
          <span>Role</span>
          <span>Permissions</span>
          <span>Status</span>
          <span>Last Login</span>
          <span>Department</span>
          <span>Courses / Committees</span>
          <span>Actions</span>
        </div>

        {filteredStaff.map(staff => (
          <div className="table-row2" key={staff.id}>
            <span>{staff.name}</span>
            <span>{staff.email}</span>
            <span>{staff.contact}</span>
            <span>{staff.role}</span>
            <span>{staff.permissions}</span>
            <span>{staff.status}</span>
            <span>{staff.lastLogin}</span>
            <span>{staff.department}</span>
            <span>{staff.courses} | {staff.committees}</span>
            <span className="actionsAM">
              <button onClick={() => handleView(staff)}>View</button>
              <button onClick={() => handleEdit(staff)}>Edit</button>
              <button onClick={() => handleSuspend(staff)}>Suspend</button>
              <button onClick={() => handleEmail(staff)}>Email</button>
            </span>
          </div>
        ))}
      </div>


{modalOpen && currentStaff && (
  <div className="modal-backdropAM">
    <div className="modal-boxAM">
      <h3>{modalMode === "view" ? "View Staff" : "Edit Staff"}</h3>
      <div className="modal-bodyAM">
        <input
          type="text"
          value={currentStaff.name}
          disabled={modalMode === "view"}
          onChange={e => handleModalChange("name", e.target.value)}
        />
        <input
          type="email"
          value={currentStaff.email}
          disabled={modalMode === "view"}
          onChange={e => handleModalChange("email", e.target.value)}
        />
        <select
          value={currentStaff.role}
          disabled={modalMode === "view"}
          onChange={e => handleModalChange("role", e.target.value)}
        >
          {roles.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select
          value={currentStaff.department}
          disabled={modalMode === "view"}
          onChange={e => handleModalChange("department", e.target.value)}
        >
          {departments.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <select
          value={currentStaff.status}
          disabled={modalMode === "view"}
          onChange={e => handleModalChange("status", e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Suspended">Suspended</option>
        </select>

        <div className="modal-actionsAM">
          <button className="cancel-btn" onClick={() => setModalOpen(false)}>Cancel</button>
          {modalMode === "edit" && (
            <button className="save-btn" onClick={saveModalChanges}>Save</button>
          )}
        </div>
      </div>
    </div>
  </div>
)} 
</div>
  );
}

export default AdminStaffManagement;