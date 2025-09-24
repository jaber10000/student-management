import { useState } from "react";
import "../Teachers/css/TeacherDashboard.css";
import Assignments from "../Teachers/Assignments.jsx";
import Grades from "./Grades.jsx";
import TeacherInfo from "./TeacherInfo.jsx";
import TeacherProfiles from "./TeacherProfile.jsx";
import MenuIcon from "../../assets/menu.png"; // menu icon


function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        
  return <TeacherInfo/>;



case "profile":
  return <TeacherProfiles/>




  case "my-courses":
  return (
    <div className="teacher-courses-box">
      <h2>📚 My Courses</h2>

      {/* Courses Table */}
      <div className="courses-section">
        <h3>Courses List</h3>
        <table className="courses-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Weekly Hours</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Data Structures & Algorithms</td>
              <td>CS201</td>
              <td>4</td>
              <td>Spring 2025</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Machine Learning Basics</td>
              <td>CS301</td>
              <td>3</td>
              <td>Spring 2025</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Web Development with React</td>
              <td>CS305</td>
              <td>3</td>
              <td>Spring 2025</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Database Management Systems</td>
              <td>CS302</td>
              <td>4</td>
              <td>Spring 2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Routine Table */}
      <div className="routine-section">
        <h3>Weekly Routine</h3>
        <table className="routine-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Course</th>
              <th>Time</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>Data Structures & Algorithms</td>
              <td>10:00 - 12:00</td>
              <td>Room 301</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Machine Learning Basics</td>
              <td>13:00 - 15:00</td>
              <td>Room 302</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Web Development with React</td>
              <td>09:00 - 11:00</td>
              <td>Room 305</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Database Management Systems</td>
              <td>11:00 - 13:00</td>
              <td>Room 303</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>Data Structures & Algorithms</td>
              <td>14:00 - 16:00</td>
              <td>Room 301</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

case "assignments":
  return <Assignments />;

  
case "grades":
  return <Grades />;

default:
  return null;
  }
};

  return (
    <div className="teacher-dashboard">
      <button
              className="sidebar-toggle-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <img src={MenuIcon} alt="Menu" />
            </button>
            <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2>👩‍🏫 Teacher</h2>
        <ul>
          <li className={activeTab === "dashboard" ? "active" : ""} onClick={() => setActiveTab("dashboard")}>Dashboard</li>
          <li className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>My Profile</li>
          <li className={activeTab === "my-courses" ? "active" : ""} onClick={() => setActiveTab("my-courses")}>My Courses</li>
          <li className={activeTab === "assignments" ? "active" : ""} onClick={() => setActiveTab("assignments")}>Assignments</li>
          <li className={activeTab === "grades" ? "active" : ""} onClick={() => setActiveTab("grades")}>Grades</li>
        </ul>
      </aside>

      <main className="content">{renderContent()}</main>
    </div>
  );
}

export default TeacherDashboard;
