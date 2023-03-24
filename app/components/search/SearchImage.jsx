"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
const SearchImage = ({ imageUrl, index }) => {
  const [isFull, setIsFull] = useState(false);
  return (
    <div
      className={`${isFull ? " fixed inset-0 p-4 " : " "}  bg-gray-700/70 p-0 `}
    >
      <Image
        src={imageUrl}
        alt="image"
        width={5000}
        height={2500}
        className={`${
          isFull ? "z-50 h-full w-full " : " "
        } cursor-pointer object-cover   `}
        onClick={() => setIsFull(!isFull)}
      ></Image>
    </div>
  );
};

export default SearchImage;
