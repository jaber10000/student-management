// LibraryApp.jsx
import React, { useState } from "react";
import ResourcesPage from "./ResourcePage";
import UsageStats from "./UsageStats"; // we will create this next
import CheckoutOverview from "./CheckoutsPage"; // we will create this next
import "./css/LibraryApp.css";

const LibraryApp = () => {
  const [activePage, setActivePage] = useState("resources");

  return (
    <div className="LA-container">
      {/* Sidebar */}
      <div className="LA-sidebar">
        <h2>Library</h2>
        <nav>
          <button
            className={activePage === "resources" ? "active" : ""}
            onClick={() => setActivePage("resources")}
          >
            Resources
          </button>
          <button
            className={activePage === "usage" ? "active" : ""}
            onClick={() => setActivePage("usage")}
          >
            Usage Statistics
          </button>
          <button
            className={activePage === "checkout" ? "active" : ""}
            onClick={() => setActivePage("checkout")}
          >
            Checkouts
          </button>
          
        </nav>
      </div>

      {/* Main Content */}
      <div className="LA-content">
        {activePage === "resources" && <ResourcesPage />}
        {activePage === "usage" && <UsageStats />}
        {activePage === "checkout" && <CheckoutOverview />}
      </div>
    </div>
  );
};

export default LibraryApp;
