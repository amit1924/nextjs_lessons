"use client";

import Heading from "@/components/Heading";
import React from "react";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <Heading />
      {children}
    </div>
  );
};

export default Layout;
