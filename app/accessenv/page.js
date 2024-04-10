import React from "react";

// http://localhost:3000/accessenv
const AccessEnv = () => {
  console.log(process.env.MONGO_URI);
  console.log(process.env.JWT_SECRET);
  return (
    <div>
      Env Local Accessing
      {process.env.MONGO_URI ? (
        <h1>DB Successfully Connected</h1>
      ) : (
        <h1>404</h1>
      )}
    </div>
  );
};

export default AccessEnv;
