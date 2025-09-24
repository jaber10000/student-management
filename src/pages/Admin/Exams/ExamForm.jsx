import React, { useState } from "react";
import "./css/ExamForm.css";

function ExamForm({ addExam }) {
  const [subject, setSubject] = useState("");
  const [department, setDepartment] = useState("");
  const [batch, setBatch] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [room, setRoom] = useState("");
  const [invigilator, setInvigilator] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || !department || !batch || !date || !time || !room) {
      alert("Please fill all required fields");
      return;
    }
    addExam({ subject, dept: department, batch, date, time, room, invigilator });
    setSubject("");
    setDepartment("");
    setBatch("");
    setDate("");
    setTime("");
    setRoom("");
    setInvigilator("");
  };

  return (
    <div className="EF-container">
  <h2>Add Exam</h2>
  <form className="EF-form" onSubmit={handleSubmit}>
    <input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
    <input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
    <input placeholder="Batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
    <input placeholder="Room" value={room} onChange={(e) => setRoom(e.target.value)} />
    <input placeholder="Invigilator" value={invigilator} onChange={(e) => setInvigilator(e.target.value)} />
    <button type="submit">Add Exam</button>
  </form>
</div>
  );
}

export default ExamForm;
