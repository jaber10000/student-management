// ProfilePage.jsx
import React, { useState } from "react";
import "./css/ProfilePage.css";

const initialProfile = {
  name: "Md. Abdullah Al Jaber",
  email: "jaber@gmail.com",
  studentId: "20250123",
  dept: "Computer Science",
  year: "2nd Year",
  phone: "+880123456789",
  address: "123, University Rd, Dhaka, Bangladesh",
  parents: "Mr. & Mrs. Doe",
  nationality: "Bangladeshi",
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="content-box profile-box">
      <h2>👤 My Profile</h2>

      {!isEditing ? (
        <table className="profile-table">
          <tbody>
            <tr><th>Name</th><td>{profile.name}</td></tr>
            <tr><th>Email</th><td>{profile.email}</td></tr>
            <tr><th>Student ID</th><td>{profile.studentId}</td></tr>
            <tr><th>Department</th><td>{profile.dept}</td></tr>
            <tr><th>Year</th><td>{profile.year}</td></tr>
            <tr><th>Phone</th><td>{profile.phone}</td></tr>
            <tr><th>Address</th><td>{profile.address}</td></tr>
            <tr><th>Parents Name</th><td>{profile.parents}</td></tr>
            <tr><th>Nationality</th><td>{profile.nationality}</td></tr>
          </tbody>
        </table>
      ) : (
        <table className="profile-table edit-mode">
          <tbody>
            <tr>
              <th>Name</th>
              <td><input name="name" value={profile.name} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>Email</th>
              <td><input name="email" value={profile.email} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>Student ID</th>
              <td><input name="studentId" value={profile.studentId} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>Department</th>
              <td><input name="dept" value={profile.dept} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>Year</th>
              <td><input name="year" value={profile.year} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>Phone</th>
              <td><input name="phone" value={profile.phone} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>Address</th>
              <td><input name="address" value={profile.address} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>Parents Name</th>
              <td><input name="parents" value={profile.parents} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>Nationality</th>
              <td><input name="nationality" value={profile.nationality} onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="profile-actions">
        {!isEditing ? (
          <button className="btn-edit" onClick={() => setIsEditing(true)}>✏️ Edit Profile</button>
        ) : (
          <button className="btn-save" onClick={handleSave}>💾 Save Changes</button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
