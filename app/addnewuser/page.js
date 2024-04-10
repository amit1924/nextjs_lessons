"use client";

import React, { useState } from "react";

const AddNewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("/backend/api/postmethod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await resp.json();
      console.log(data); // Log the response data
      if (data.message === "Successfully created data") {
        alert("User added successfully");
      } else {
        alert("An error occurred while creating the user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "125px" }}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit} style={{ backgroundColor: "red" }}>
        Add New User
      </button>
    </div>
  );
};

export default AddNewUser;
