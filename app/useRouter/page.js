"use client";

import React from "react";
import { useRouter } from "next/navigation";

// http://localhost:3000/useRouter

const Router = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Use Router </h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={() => {
            router.push("about");
          }}
        >
          Go To About Page
        </button>
        <button onClick={() => navigate("portfolio")}>
          Go To Portfolio Page
        </button>
      </div>
    </div>
  );
};

export default Router;
