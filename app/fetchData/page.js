"use client";

import React from "react";
import { useState, useEffect } from "react";

const FetchData = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function FetchProduct() {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (res.ok === true) {
        console.log("Succesfully fetch product");
      }

      let data = await res.json();
      setProduct(data);
      console.log(data);
    }
    FetchProduct();
  }, []);

  return (
    <div>
      {product?.map((p) => (
        <li key={p.id} style={{ margin: "10px", border: "4px black solid " }}>
          {p.title}
        </li>
      ))}
    </div>
  );
};

export default FetchData;
