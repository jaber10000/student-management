/////////////////////////////////////////////////////


// This Page Content Are the real content of the TeacherDashboard. and in the teacher dashboard there have only side bar view and redaring


////////////////////////////////////////////////////

import React, { useState } from "react";
import "./css/TeacherInfo.css";

const TeacherInfo = () => {
  const [teacher, setTeacher] = useState({
    name: "Dr. Ayesha Rahman",
    position: "Senior Lecturer — Computer Science",
    credits: 12,
    classes: 4,
    tenure: "3 years"
  });

  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(teacher);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  const handleEditToggle = () => {
    if (editing) {
      setTeacher(draft); // save changes
    }
    setEditing(!editing);
  };

  const handleChange = (field, value) => {
    setDraft({ ...draft, [field]: value });
  };

  const sendMessage = () => {
    alert(`Message sent to ${teacher.name}: "${messageText}"`);
    setMessageText("");
    setShowMessage(false);
  };

  return (
    <div className="tdash-box">
      <header className="tdash-header">
        <div className="tdash-info">
          {editing ? (
            <>
              <input
                type="text"
                value={draft.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <input
                type="text"
                value={draft.position}
                onChange={(e) => handleChange("position", e.target.value)}
              />
            </>
          ) : (
            <>
              <h2>👩‍🏫 {teacher.name}</h2>
              <p className="tdash-position">{teacher.position}</p>
            </>
          )}
          <div className="tdash-meta">
            <span>
              <strong>Credits:</strong> {teacher.credits}
            </span>
            <span>
              <strong>Classes:</strong> {teacher.classes}
            </span>
            <span>
              <strong>Tenure:</strong> {teacher.tenure}
            </span>
          </div>
        </div>

        <div className="tdash-actions">
          <button className="tdash-btn tdash-primary" onClick={() => setShowMessage(true)}>
            Message
          </button>
          <button className="tdash-btn" onClick={handleEditToggle}>
            {editing ? "Save" : "Edit Profile"}
          </button>
        </div>
      </header>

      <section className="tdash-body">
        <div className="tdash-left">
          <div className="tdash-card">
            <h3>🎯 Targeted Subjects</h3>
            <ul>
              <li>
                <strong>CS301</strong> — Advanced Algorithms
              </li>
              <li>
                <strong>ML210</strong> — Machine Learning II
              </li>
              <li>
                <strong>WD305</strong> — Frontend Frameworks
              </li>
            </ul>
          </div>

          <div className="tdash-card">
            <h3>📅 Recent / Upcoming</h3>
            <ul>
              <li>Advanced Algorithms — Lecture (Sep 22, 2025)</li>
              <li>Machine Learning II — Lab (Sep 24, 2025)</li>
              <li>Frontend Frameworks — Tutorial (Sep 26, 2025)</li>
            </ul>
          </div>

          <div className="tdash-card">
            <h3>🗣️ Student Feedback Summary</h3>
            <div className="tdash-feedback-stats">
              <div>
                <strong>Avg. Rating:</strong> 4.6 / 5
              </div>
              <div>
                <strong>Responses:</strong> 124
              </div>
            </div>
            <div className="tdash-stars">★★★★☆</div>
          </div>
        </div>

        <div className="tdash-right">
          <div className="tdash-card tdash-stats">
            <div className="tdash-stat">
              <div className="tdash-stat-number">120</div>
              <div className="tdash-stat-label">Total Students</div>
            </div>
            <div className="tdash-stat">
              <div className="tdash-stat-number">8</div>
              <div className="tdash-stat-label">Active Assignments</div>
            </div>
            <div className="tdash-stat">
              <div className="tdash-stat-number">95%</div>
              <div className="tdash-stat-label">Attendance Avg.</div>
            </div>
          </div>

          <div className="tdash-card">
            <h3>📈 Performance (by feedback)</h3>
            <svg viewBox="0 0 300 120" className="tdash-chart" preserveAspectRatio="none">
              <polyline
                points="0,90 40,70 80,50 120,60 160,40 200,45 240,30 280,25 300,20"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g stroke="#e6eefc" strokeWidth="1">
                <line x1="0" y1="20" x2="300" y2="20" />
                <line x1="0" y1="50" x2="300" y2="50" />
                <line x1="0" y1="80" x2="300" y2="80" />
              </g>
            </svg>
            <div className="tdash-chart-legend">
              <span className="tdash-legend-dot" />{" "}
              <small>Performance trend (higher is better)</small>
            </div>
          </div>

          <div className="tdash-card">
            <h3>🏷️ Current Position & Targets</h3>
            <table className="tdash-info-table">
              <tbody>
                <tr>
                  <th>Position</th>
                  <td>{teacher.position.split("—")[0]}</td>
                </tr>
                <tr>
                  <th>Department</th>
                  <td>Computer Science</td>
                </tr>
                <tr>
                  <th>Target (this semester)</th>
                  <td>Improve ML lab pass rate by 10%</td>
                </tr>
                <tr>
                  <th>Days in Post</th>
                  <td>~1100 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Message Modal */}
      {showMessage && (
        <div className="tdash-modal">
          <div className="tdash-modal-content">
            <h3>Send Message to {teacher.name}</h3>
            <textarea
              rows="4"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type your message..."
            />
            <div className="tdash-modal-actions">
              <button className="tdash-btn tdash-primary" onClick={sendMessage}>
                Send
              </button>
              <button className="tdash-btn" onClick={() => setShowMessage(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherInfo;
