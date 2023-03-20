"use client";
import Image from "next/image";
import React from "react";
import image from "../../../public/images/products.png";
const Products = () => {
  return (
    <div className="">
      <div className="container mx-auto py-20 px-16 bd">
        <Image alt="Products" src={image}></Image>
      </div>
    </div>
  );
};

export default Products;
