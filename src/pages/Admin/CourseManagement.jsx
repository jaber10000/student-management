import { useState } from "react";
import "./css/CourseManagement.css";

function CourseManagement() {
  const departments = ["CSE", "EEE", "SWE", "Textile", "Library"];
  const teachers = ["Dr. Rahman", "Prof. Karim", "Ms. Akter", "Mr. Chowdhury"];

  // Fixed time slots
  const timeSlots = [
    "08:30-10:00",
    "10:00-11:30",
    "11:30-01:00",
    "01:00-02:30",
    "02:30-04:00",
    "04:00-05:30"
  ];

  // Weekdays (Friday excluded)
  const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

  const initialCourses = [
    { id: "C001", name: "Data Structures", dept: "CSE", teacher: "Prof. Karim", day: "Sunday", schedule: "08:30-10:00",section: "66_B", students: 45 },

    { id: "C002", name: "Digital Logic", dept: "EEE", teacher: "Dr. Rahman", day: "Tuesday", schedule: "10:00-11:30",section: "68_A", students: 38 },
  ];

  const [courses, setCourses] = useState(initialCourses);

  const [newCourse, setNewCourse] = useState({
  name: "",
  dept: "",
  teacher: "",
  day: "",
  schedule: "",
  section: "",
  students: ""
});

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  // Add course
  const handleAddCourse = () => {
  if (!newCourse.name || !newCourse.dept || !newCourse.teacher || !newCourse.day || !newCourse.schedule || !newCourse.section) {
    alert("Please fill all fields");
    return;
  }
  const id = "C" + (courses.length + 1).toString().padStart(3, "0");
  setCourses([...courses, { ...newCourse, id }]);
  setNewCourse({ name: "", dept: "", teacher: "", day: "", schedule: "", section: "", students: 0 });
};

   

  // Delete course
  const handleDelete = (id) => {
    if (window.confirm("Delete this course?")) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  // Edit course
  const openEditModal = (course) => {
    setEditCourse(course);
    setModalOpen(true);
  };

  const saveEdit = () => {
    setCourses(courses.map(c => c.id === editCourse.id ? editCourse : c));
    setModalOpen(false);
  };

  return (
    <div className="course-container">
      <h2>📘 Course Management</h2>

      {/* Add Course */}
      <div className="add-course-form">
        <input
          type="text"
          placeholder="Course Name"
          value={newCourse.name}
          onChange={e => setNewCourse({ ...newCourse, name: e.target.value })}
        />
        <select value={newCourse.dept} onChange={e => setNewCourse({ ...newCourse, dept: e.target.value })}>
          <option value="">Select Department</option>
          {departments.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <select value={newCourse.teacher} onChange={e => setNewCourse({ ...newCourse, teacher: e.target.value })}>
          <option value="">Assign Teacher</option>
          {teachers.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <input
            type="text"
            placeholder="Section (e.g., 60_A)"
            value={newCourse.section}
            onChange={e => setNewCourse({ ...newCourse, section: e.target.value })}
            />
            <input
            type="number"
            placeholder="Enrollment"
            value={newCourse.students}
            onChange={e => setNewCourse({ ...newCourse, students: Number(e.target.value) })}
        />
        <select value={newCourse.day} onChange={e => setNewCourse({ ...newCourse, day: e.target.value })}>
          <option value="">Select Day</option>
          {days.map(day => <option key={day} value={day}>{day}</option>)}
        </select>
        <select value={newCourse.schedule} onChange={e => setNewCourse({ ...newCourse, schedule: e.target.value })}>
          <option value="">Select Time Slot</option>
          {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
        </select>
        <button onClick={handleAddCourse}>➕ Add Course</button>
      </div>

      {/* Course Table */}
      <div className="course-table">
        <div className="table-header">
            <span>ID</span>
            <span>Course</span>
            <span>Department</span>
            <span>Section</span>
            <span>Teacher</span>
            <span>Day</span>
            <span>Time Slot</span>
            <span>Enrolled</span>
            <span>Actions</span>
            </div>

            {courses.map(course => (
            <div className="table-row" key={course.id}>
                <span>{course.id}</span>
                <span>{course.name}</span>
                <span>{course.dept}</span>
                <span>{course.section}</span>
                <span>{course.teacher}</span>
                <span>{course.day}</span>
                <span>{course.schedule}</span>
                <span>{course.section}</span>
                <span>{course.students}</span>
                <span className="actions">
                <button onClick={() => openEditModal(course)}>✏️ Edit</button>
                <button onClick={() => handleDelete(course.id)}>🗑 Delete</button>
                </span>
            </div>
            ))}

      </div>

      {/* Edit Modal */}
      {modalOpen && editCourse && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Course</h3>
            <input
              type="text"
              value={editCourse.name}
              onChange={e => setEditCourse({ ...editCourse, name: e.target.value })}
            />
            <select
              value={editCourse.dept}
              onChange={e => setEditCourse({ ...editCourse, dept: e.target.value })}
            >
              {departments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select
              value={editCourse.teacher}
              onChange={e => setEditCourse({ ...editCourse, teacher: e.target.value })}
            >
              {teachers.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select
              value={editCourse.day}
              onChange={e => setEditCourse({ ...editCourse, day: e.target.value })}
            >
              {days.map(day => <option key={day} value={day}>{day}</option>)}
            </select>
            <select
              value={editCourse.schedule}
              onChange={e => setEditCourse({ ...editCourse, schedule: e.target.value })}
            >
              {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
            </select>
            <div className="modal-actions1">
              <button onClick={() => setModalOpen(false)}>Cancel</button>
              <button onClick={saveEdit} className="save-btn">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseManagement;
