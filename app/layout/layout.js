import React from "react";
import Link from "next/link";

//http://localhost:3000/layout/loginLayout
//http://localhost:3000/layout/loginLayout/loginuser
//http://localhost:3000/layout/loginLayout/loginadmin

const Layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li style={{ display: "flex", gap: "25px", backgroundColor: "green" }}>
          <Link href="/layout/loginLayout">Login Layout</Link>
          <Link href="/layout/loginLayout/loginadmin">Login Admin</Link>
          <Link href="/layout/loginLayout/loginuser">Login User</Link>
        </li>
        {children}
      </ul>
    </div>
  );
};

export default Layout;
