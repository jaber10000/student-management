import React, { useState } from "react";
import ReportDashboard from "./ReportsDashboard";
import TeacherPerformance from "./TeacherPerformance";
import "./css/ReportsApp.css";

const ReportsApp = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="RA-app-container">
      {/* Sidebar */}
      <aside className="RA-sidebar">
        <div className="RA-sidebar-header">
          <h2>Reports & Analytics</h2>
        </div>
        <nav className="RA-sidebar-nav">
          <ul>
            <li
              className={activePage === "dashboard" ? "active" : ""}
              onClick={() => setActivePage("dashboard")}
            >
              Dashboard
            </li>
            <li
              className={activePage === "teachers" ? "active" : ""}
              onClick={() => setActivePage("teachers")}
            >
              Teacher Performance
            </li>


            {/* <li
              className={activePage === "students" ? "active" : ""}
              onClick={() => setActivePage("students")}
            >
              Student Analytics
            </li> */}



          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className="RA-main-content">
        {activePage === "dashboard" && <ReportDashboard />}
        {activePage === "teachers" && <TeacherPerformance />}

        
        {/* {activePage === "students" && (
          <div className="RA-placeholder">
            🎓 Student Analytics Page Coming Soon...
          </div>
        )} */}
      </main>
    </div>
  );
};

export default ReportsApp;
