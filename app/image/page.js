import React from "react";
import Image from "next/image";
import MetaImage from "@/public/meta.jpg";

// http://localhost:3000/image

const ImagePage = () => {
  return (
    <div>
      {/* <Image src={MetaImage} alt="Image" width={1000}></Image>
       */}

      {/* This below image element has to be declared in `next.config.js` 
      
      
      
      */}

      <Image
        src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"
        alt="Mountain"
        width={2000}
        height={1000}
      />
    </div>
  );
};

export default ImagePage;
