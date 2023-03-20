"use client";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/phoicanh.png";
const Phoicanh = () => {
  return (
    <div className="">
      <div className="container mx-auto py-20 px-16 bd">
        <Image alt="Phoicanh" src={image}></Image>
      </div>
    </div>
  );
};

export default Phoicanh;
