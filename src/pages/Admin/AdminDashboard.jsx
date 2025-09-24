import { useState } from "react";
import { useNavigate } from "react-router-dom"; // react-router-dom v6
import DashboardOnly from "./DashboardOnly";
import StudentManagement from "./Accounts/StudentManagement";
import TeachersManagement from "./Accounts/TeachersManagement";
import AdminStaffManagement from "./Accounts/AdminStaffManagement";
import CourseManagement from "./CourseManagement";
import "../Admin/css/AdminDashboard.css";
import App1 from "./Attendance/App1.jsx"
import ExamApp from "./Exams/ExamApp.jsx";
import FinanceApp from "./Finance/FinanceApp.jsx";
import ReportsApp from "./Reports_Analytics/ReportsApp.jsx";
import LibraryApp from "./Library_Resources/LibraryApp.jsx";
import Menu from "../../assets/menu.png"





function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showAccounts, setShowAccounts] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // toggle sidebar

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOnly />;
      case "students":
        return <StudentManagement />;
      case "teachers":
        return <TeachersManagement />;
      case "admins":
        return <AdminStaffManagement />;
      case "courses":
        return <CourseManagement/>;
      case "attendance":
        return <App1/>;
      case "exams":
        return <ExamApp/>;
      case "finance":
        return <FinanceApp/>;

      // case "messages":
      //   return <div className="content-box">📩 Messages / Notifications</div>;

      case "reports":
        return <ReportsApp/>;
      case "library":
        return <LibraryApp/>;

      // case "settings":
      //   return <div className="content-box">⚙️ Settings</div>;
      // case "help":
      //   return <div className="content-box">❓ Help / Support</div>;
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar toggle button */}
      
      <button
  className="sidebar-toggle-btn"
  onClick={() => setSidebarOpen(!sidebarOpen)}
>
  {sidebarOpen ? <img src={Menu} alt="Menu" /> : <img src={Menu} alt="Menu" />}
</button>


      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="sidebar2">
          <h2>👨‍💼 Admin</h2>
          <ul>
            <li
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard / Home
            </li>

            {/* Accounts main item */}
            <li
              onClick={() => setShowAccounts(!showAccounts)}
              className={showAccounts ? "active" : ""}
            >
              Accounts ▾
            </li>

            {/* Sub-menu */}
            {showAccounts && (
              <ul className="sub-menu">
                <li
                  className={activeTab === "students" ? "active" : ""}
                  onClick={() => setActiveTab("students")}
                >
                  Students List
                </li>
                <li
                  className={activeTab === "teachers" ? "active" : ""}
                  onClick={() => setActiveTab("teachers")}
                >
                  Teachers / Lecturers
                </li>
                <li
                  className={activeTab === "admins" ? "active" : ""}
                  onClick={() => setActiveTab("admins")}
                >
                  Admins / Staff
                </li>
              </ul>
            )}

            <li
              className={activeTab === "courses" ? "active" : ""}
              onClick={() => setActiveTab("courses")}
            >
              Courses
            </li>
            <li
              className={activeTab === "attendance" ? "active" : ""}
              onClick={() => setActiveTab("attendance")}
            >
              Attendance
            </li>
            <li
              className={activeTab === "exams" ? "active" : ""}
              onClick={() => setActiveTab("exams")}
            >
              Exams
            </li>
            <li
              className={activeTab === "finance" ? "active" : ""}
              onClick={() => setActiveTab("finance")}
            >
              Finance / Revenue
            </li>


            {/* <li
              className={activeTab === "messages" ? "active" : ""}
              onClick={() => setActiveTab("messages")}
            >
              Messages / Notifications
            </li> */}


            <li
              className={activeTab === "reports" ? "active" : ""}
              onClick={() => setActiveTab("reports")}
            >
              Reports / Analytics
            </li>
            <li
              className={activeTab === "library" ? "active" : ""}
              onClick={() => setActiveTab("library")}
            >
              Library / Resources
            </li>


            {/* <li
              className={activeTab === "settings" ? "active" : ""}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </li>
            <li
              className={activeTab === "help" ? "active" : ""}
              onClick={() => setActiveTab("help")}
            >
              Help / Support
            </li> */}


          </ul>
        </aside>
      )}

      {/* Content Area */}
      <main className="content">{renderContent()}</main>
    </div>
  );
}

export default AdminDashboard;
