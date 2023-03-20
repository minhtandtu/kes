"use client";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/partner.png";
const Partners = () => {
  return (
    <div className="">
      <div className="container mx-auto py-20 px-16 bd">
        <Image alt="Partners" src={image}></Image>
      </div>
    </div>
  );
};

export default Partners;
