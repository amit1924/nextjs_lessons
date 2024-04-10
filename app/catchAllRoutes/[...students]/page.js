"use client";

import React from "react";

// http://localhost:3000/catchAllRoutes/city/rollno/name/class
// folder\[...subfolder]
const Student = ({ params }) => {
  return (
    <div>
      <h1>Student:{params.students}</h1>
      <br />
      <h2>All routes:</h2>
      <br />
      <h3>
        {params.students.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </h3>
    </div>
  );
};

export default Student;
