import React from "react";
import { redirect } from "next/navigation";

// http://localhost:3000/redirect/4 =render about page

const Id = ({ params }) => {
  if (params.id == 4) {
    redirect("/about");
  }
  return <div>ID:{params.id}</div>;
};

export default Id;
