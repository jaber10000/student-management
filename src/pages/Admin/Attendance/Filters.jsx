import React from "react";
import "./css/Filters.css"; // ✅ plain CSS import

function Filters({ filters, setFilters, students }) {
  const departments = [...new Set(students.map((s) => s.department))];
  const sections = [...new Set(students.map((s) => s.section))];

  const handleChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="at-filters-container">
      <select name="department" value={filters.department} onChange={handleChange}>
        <option value="">All Departments</option>
        {departments.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select name="section" value={filters.section} onChange={handleChange}>
        <option value="">All Sections</option>
        {sections.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <input type="date" name="date" value={filters.date} onChange={handleChange} />
    </div>
  );
}

export default Filters;
