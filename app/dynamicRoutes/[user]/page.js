"use client";

//http://localhost:3000/dynamicRoutes/Amit
//http://localhost:3000/dynamicRoutes/Arsh

import React from "react";

const User = ({ params }) => {
  return (
    <div>
      User From Dynamic Routes
      <h1>New User:{params.user}</h1>
    </div>
  );
};

export default User;
