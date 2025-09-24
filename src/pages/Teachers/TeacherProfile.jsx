import React, { useState } from "react";
import "./css/TeacherProfile.css";

const TeacherProfile = () => {
  const [personalInfo, setPersonalInfo] = useState([
    { field: "Name", value: "Dr. Sarah Johnson" },
    { field: "Hometown", value: "New York, USA" },
    { field: "Phone", value: "+1 234 567 890" },
    { field: "Email", value: "sarah.johnson@example.com" },
  ]);

  const [qualification, setQualification] = useState([
    { degree: "Ph.D. in Computer Science", institution: "MIT" },
    { degree: "M.Sc. in Artificial Intelligence", institution: "Stanford University" },
    { degree: "B.Sc. in Software Engineering", institution: "UCLA" },
  ]);

  const [research, setResearch] = useState([
    { area: "Machine Learning", details: "Focus on NLP, EdTech; 20+ papers published" },
    { area: "Natural Language Processing", details: "Applied in educational datasets" },
    { area: "Educational Technologies", details: "Design and evaluation of teaching platforms" },
  ]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editData, setEditData] = useState(null);

  const openModal = (type, data) => {
    setModalType(type);
    setEditData(JSON.parse(JSON.stringify(data))); // deep copy
    setModalOpen(true);
  };

  const saveChanges = () => {
    if (modalType === "personal") setPersonalInfo(editData);
    if (modalType === "qualification") setQualification(editData);
    if (modalType === "research") setResearch(editData);
    setModalOpen(false);
  };

  return (
    <div className="tp-box">
      <h2 className="tp-title">👩‍🏫 Teacher Profile</h2>

      {/* Personal Info */}
      <div className="tp-section">
        <h3>📌 Personal Information</h3>
        <table className="tp-table">
          <tbody>
            {personalInfo.map((item, i) => (
              <tr key={i}>
                <th>{item.field}</th>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="tp-btn tp-btn-primary" onClick={() => openModal("personal", personalInfo)}>
          ✏️ Update Info
        </button>
      </div>

      {/* Qualification */}
      <div className="tp-section">
        <h3>🎓 Qualification</h3>
        <table className="tp-table">
          <tbody>
            {qualification.map((item, i) => (
              <tr key={i}>
                <th>{item.degree}</th>
                <td>{item.institution}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="tp-btn tp-btn-primary" onClick={() => openModal("qualification", qualification)}>
          ✏️ Update Qualification
        </button>
      </div>

      {/* Research */}
      <div className="tp-section">
        <h3>🔬 Research Background</h3>
        <table className="tp-table">
          <tbody>
            {research.map((item, i) => (
              <tr key={i}>
                <th>{item.area}</th>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="tp-btn tp-btn-primary" onClick={() => openModal("research", research)}>
          ✏️ Update Research
        </button>
      </div>

      {/* === Modal === */}
      {modalOpen && (
        <div className="tp-modal">
          <div className="tp-modal-content">
            <h3>Edit {modalType.charAt(0).toUpperCase() + modalType.slice(1)}</h3>

            {Array.isArray(editData) &&
              editData.map((item, i) => (
                <div key={i} className="tp-edit-row">
                  {modalType === "personal" ? (
                    <>
                      <label>{item.field}</label>
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) => {
                          const updated = [...editData];
                          updated[i].value = e.target.value;
                          setEditData(updated);
                        }}
                      />
                    </>
                  ) : modalType === "qualification" ? (
                    <>
                      <input
                        type="text"
                        value={item.degree}
                        onChange={(e) => {
                          const updated = [...editData];
                          updated[i].degree = e.target.value;
                          setEditData(updated);
                        }}
                      />
                      <input
                        type="text"
                        value={item.institution}
                        onChange={(e) => {
                          const updated = [...editData];
                          updated[i].institution = e.target.value;
                          setEditData(updated);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        value={item.area}
                        onChange={(e) => {
                          const updated = [...editData];
                          updated[i].area = e.target.value;
                          setEditData(updated);
                        }}
                      />
                      <input
                        type="text"
                        value={item.details}
                        onChange={(e) => {
                          const updated = [...editData];
                          updated[i].details = e.target.value;
                          setEditData(updated);
                        }}
                      />
                    </>
                  )}
                </div>
              ))}

            <div className="tp-modal-actions">
              <button className="tp-btn" onClick={() => setModalOpen(false)}>Cancel</button>
              <button className="tp-btn tp-btn-primary" onClick={saveChanges}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherProfile;
