"use client";
import Image from "next/image";
import React from "react";
const categories = [
  {
    name: "Nội thất gỗ tự nhiên",
    url: "",
    imageurl: "/../public/images/accessories.jpg",
    des: "Nội thất gỗ tự nhiên",
  },
  {
    name: "Nội thất gỗ công nghiệp",
    url: "",
    imageurl: "/../public/images/bed-1.jpg",
    des: "Nội thất gỗ tự nhiên",
  },
  {
    name: "Nội thất trang trí",
    url: "",
    imageurl: "/../public/images/cabinet.jpg",
    des: "Nội thất gỗ tự nhiên",
  },
  {
    name: "Nhà đẹp",
    url: "",
    imageurl: "/../public/images/chair.jpg",
    des: "Nội thất gỗ tự nhiên",
  },
];
const Categories = () => {
  return (
    <div className="container mx-auto py-10  flex justify-between">
      <div className="flex justify-between w-full">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-[23%] aspect-[3/4] overflow-hidden p-2  "
            >
              <Image
                src={item.imageurl}
                width={400}
                height={700}
                className=""
              ></Image>
              <div className="group">
                <div className="absolute inset-0 bg-zinc-700 opacity-60 group-hover:opacity-0 transition-opacity delay-200 duration-700  "></div>
                <div className="absolute inset-0 flex items-center justify-center text-3xl text-white font-bold transition-all duration-300 group-hover:text-6xl  ">
                  <p className="">Cabinet</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
