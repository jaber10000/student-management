import { useState } from "react";
import "../Students/css/StudentDashboard.css";
import ProfilePage from "./ProfilePage";
import MenuIcon from "../../assets/menu.png"; // menu icon




function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);


  const renderContent = () => {

    
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="content-box">
            <h2>📊 Dashboard Overview</h2>

            {/* Stats cards */}
            <div className="stats-container">
              <div className="stat-card">
                <h3>Courses Enrolled</h3>
                <p>5</p>
              </div>
              <div className="stat-card">
                <h3>Assignments Pending</h3>
                <p>2</p>
              </div>
              <div className="stat-card">
                <h3>Grades Average</h3>
                <p>87%</p>
              </div>
            </div>

            {/* Payment Ledger */}
            <div className="ledger-container">
              <h3>💰 Payment Ledger</h3>
              <div className="ledger-stats">
                <div>Total Paid: $1200</div>
                <div>Total Due: $300</div>
                <div>Last Deposit: $200</div>
              </div>
              <table className="ledger-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2025-09-01</td>
                    <td>Tuition Payment</td>
                    <td>$500</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>2025-08-01</td>
                    <td>Library Fee</td>
                    <td>$100</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>2025-10-01</td>
                    <td>Lab Fee</td>
                    <td>$200</td>
                    <td>Due</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "profile":
  return <ProfilePage/>;

case "courses":
  return (
    <div className="content-box courses-box">
      <h2>📚 My Courses</h2>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CS101</td>
            <td>Computer Science Fundamentals</td>
            <td>Dr. A. Rahman</td>
          </tr>
          <tr>
            <td>CS102</td>
            <td>Data Structures & Algorithms</td>
            <td>Prof. S. Karim</td>
          </tr>
          <tr>
            <td>ML201</td>
            <td>Machine Learning Basics</td>
            <td>Dr. M. Hossain</td>
          </tr>
          <tr>
            <td>WD301</td>
            <td>Web Development with React</td>
            <td>Ms. L. Akter</td>
          </tr>
          <tr>
            <td>DBMS202</td>
            <td>Database Management Systems</td>
            <td>Prof. R. Chowdhury</td>
          </tr>
        </tbody>
      </table>
    </div>
  );


      case "assignments":
        return (
          <div className="content-box">
            <h2>📝 Assignments</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Course</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project Proposal</td>
                  <td>ML Basics</td>
                  <td>Sep 25, 2025</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>Lab Report</td>
                  <td>DSA</td>
                  <td>Sep 28, 2025</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "results":
        return (
          <div className="content-box">
            <h2>📈 Results</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Marks</th>
                  <th>Grade</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Computer Science Fundamentals</td>
                  <td>90%</td>
                  <td>A</td>
                  <td>Excellent</td>
                </tr>
                <tr>
                  <td>Data Structures & Algorithms</td>
                  <td>85%</td>
                  <td>B</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td>Machine Learning Basics</td>
                  <td>88%</td>
                  <td>A</td>
                  <td>Very Good</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="student-dashboard">
      <button
        className="sidebar-toggle-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <img src={MenuIcon} alt="Menu" />
      </button>
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2>🎓 Student</h2>
        <ul>
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            My Profile
          </li>
          <li
            className={activeTab === "courses" ? "active" : ""}
            onClick={() => setActiveTab("courses")}
          >
            My Courses
          </li>
          <li
            className={activeTab === "assignments" ? "active" : ""}
            onClick={() => setActiveTab("assignments")}
          >
            Assignments
          </li>
          <li
            className={activeTab === "results" ? "active" : ""}
            onClick={() => setActiveTab("results")}
          >
            Results
          </li>
        </ul>
      </aside>

      <main className={`content ${sidebarOpen ? "" : "full-width"}`}>
  {renderContent()}
</main> 
    </div>
  );
}

export default StudentDashboard;
