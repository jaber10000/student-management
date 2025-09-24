import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import StudentDashboard from "./pages/Students/StudentDashboard.jsx";
import TeacherDashboard from "./pages/Teachers/TeacherDashboard.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";



function App() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
