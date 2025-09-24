import { useState } from "react";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell
} from "recharts";
import Calendar from "react-calendar"; // npm install react-calendar
import "react-calendar/dist/Calendar.css";
import "../Admin/css/DashboardOnly.css";

function DashboardOnly() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const [activities, setActivities] = useState([
    { id: 1, title: "Annual Math Olympiad", time: "2 days ago" },
    { id: 2, title: "Engineering Showcase", time: "1 week ago" },
  ]);

  const [notices, setNotices] = useState([
    { id: 1, title: "Internship Opportunities", source: "Career Services" },
    { id: 2, title: "New Library Resources", source: "Library" },
  ]);

  const performanceData = [
    { name: "Jan", score: 65 },
    { name: "Feb", score: 72 },
    { name: "Mar", score: 80 },
    { name: "Apr", score: 78 },
    { name: "May", score: 85 },
  ];

  const studentData = [
    { name: "Engineering", value: 400 },
    { name: "Business", value: 300 },
    { name: "Arts", value: 300 },
    { name: "Science", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const addMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { id: messages.length + 1, name: "Admin Office", msg: newMessage }]);
    setNewMessage("");
  };

  const addActivity = () =>
    setActivities([...activities, { id: activities.length + 1, title: "New Activity", time: "Just now" }]);

  const addNotice = () =>
    setNotices([...notices, { id: notices.length + 1, title: "New Notice", source: "Admin Office" }]);

  return (
    <div className="dashboard-container">
      {/* Row 1: Stats */}
      <div className="stats-row">
        <div className="stat-card blue"><h3>Students</h3><p>5,699</p></div>
        <div className="stat-card green"><h3>Lecturers</h3><p>297</p></div>
        <div className="stat-card yellow"><h3>Awards</h3><p>368</p></div>
        <div className="stat-card purple"><h3>Revenue</h3><p>$87,395</p></div>
      </div>

      {/* Row 2: Charts + Calendar */}
      <div className="charts-row">
        <div className="card">
          <h3>📈 Academic Performance</h3>
          <LineChart width={400} height={250} data={performanceData}>
            <Line type="monotone" dataKey="score" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

        <div className="card">
          <h3>👩‍🎓 Students Overview</h3>
          <PieChart width={400} height={300}>
            <Pie data={studentData} cx={200} cy={150} outerRadius={120} dataKey="value" label>
              {studentData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="card">
          <h3>📅 Calendar</h3>
          <Calendar />
        </div>
      </div>

      {/* Row 3: Messages + Schedule + Notices + Activities */}
      <div className="info-row">
        <div className="card">
          <h3>✉️ Messages</h3>
          <ul className="message-list">
            {messages.map((m) => (
              <li key={m.id}><strong>{m.name}:</strong> {m.msg}</li>
            ))}
          </ul>
          <div className="message-input">
            <input
              type="text"
              placeholder="Write a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={addMessage}>Send</button>
          </div>
        </div>

        <div className="card">
          <h3>🗓 Schedule</h3>
          <ul>
            <li>Career Workshop - 10 AM</li>
            <li>Guest Lecture - 1 PM</li>
            <li>Movie Night - 6 PM</li>
          </ul>
        </div>

        <div className="card">
          <h3>📢 Notice Board</h3>
          <ul>
            {notices.map((n) => (
              <li key={n.id}>{n.title} - <span className="source">{n.source}</span></li>
            ))}
          </ul>
          <button onClick={addNotice}>+ Add Notice</button>
        </div>

        <div className="card">
          <h3>📌 Recent Activities</h3>
          <ul>
            {activities.map((a) => (
              <li key={a.id}>{a.title} <span className="time">({a.time})</span></li>
            ))}
          </ul>
          <button onClick={addActivity}>+ Add Activity</button>
        </div>
      </div>

      {/* Row 4: Buttons
      <div className="button-row">
        <button>📋 Students List</button>
        <button>👨‍🏫 Teachers Info</button>
      </div> */}
    </div>
  );
}

export default DashboardOnly;
