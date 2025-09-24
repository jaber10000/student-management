import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaChalkboardTeacher, FaUserCog, FaBook, FaStar, FaGlobe, FaLaptop, FaUsers } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const icons = [
    <FaStar />, <FaBook />, <FaGlobe />, <FaLaptop />, <FaUsers />,
    <FaUserGraduate />, <FaChalkboardTeacher />, <FaUserCog />,
    <FaStar />, <FaBook />, <FaGlobe />, <FaLaptop />, <FaUsers />,
    <FaUserGraduate />, <FaChalkboardTeacher />, <FaUserCog />,
    <FaStar />, <FaBook />, <FaGlobe />, <FaLaptop />
  ];

  return (
    <div className="home-container">
      {/* Floating Icons */}
      <div className="flying-icons">
        {icons.map((icon, index) => (
          <span key={index} className={`icon icon-${index}`}>{icon}</span>
        ))}
      </div>

      {/* Title with typing effect */}
      <div className="title-wrapper">
  <h1 className="home-title">
    <span className="magic-text">Student Management System</span>
  </h1>
</div>

      {/* Menu */}
      <nav className="home-menu">
        <ul>
          <li onClick={() => navigate("/student-dashboard")}>
            <FaUserGraduate /> <span>Student Login</span>
          </li>
          <li onClick={() => navigate("/teacher-dashboard")}>
            <FaChalkboardTeacher /> <span>Teacher Login</span>
          </li>
          <li onClick={() => navigate("/admin-dashboard")}>
            <FaUserCog /> <span>Admin Login</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
