import React from "react";
import { Oswald } from "next/font/google"; // Corrected import statement

const oswald = Oswald({ subsets: ["latin"], weight: "700" });
const Font = () => {
  return (
    <div style={{ backgroundColor: "orange", textAlign: "center" }}>
      Fonts
      <h1 className={oswald.className}>Google Fonts</h1>
    </div>
  );
};

export default Font;
