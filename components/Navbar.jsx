import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1 style={{ textAlign: "center", marginBlock: "20px" }}>
          Link container
        </h1>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/">Home</Link>
          <Link href="/about">about</Link>
          <Link href="/portfolio">portfolio</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
