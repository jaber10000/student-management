import React, { useState } from "react";
import ExamForm from "./ExamForm";
import ExamRoutine from "./ExamRoutine";
import { sampleRoutines } from "./sampleRoutines";
import "./css/ExamApp.css";

function ExamApp() {
  const [routines, setRoutines] = useState(
    sampleRoutines.sort((a, b) => new Date(a.date) - new Date(b.date))
  );

  const addExam = (exam) => {
    setRoutines((prev) =>
      [...prev, { id: prev.length + 1, ...exam }].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )
    );
  };

  return (
    <div className="EA-container">
      <h1>Exam Management System</h1>
      <ExamForm addExam={addExam} />
      <ExamRoutine routines={routines} />
    </div>
  );
}

export default ExamApp;
