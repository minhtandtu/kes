"use client";
import React from "react";
import SearchImage from "../components/search/SearchImage";
import { useState, useEffect } from "react";
export const ListMelamine = ({ data, listofitems }) => {
  const [newData, SetNewData] = useState([...data]);

  function handleOnclick(item) {
    if (listofitems) listofitems(item);
  }
  function HandleRandom() {
    const danhSachMoi = [...newData.sort(() => Math.random() - 0.5)];
    SetNewData(danhSachMoi);
  }
  return (
    <div>
      <p className="mt-4">Kết quả:</p>
      <div
        onClick={HandleRandom}
        className="cursor-pointer rounded-md bg-green-200 p-2 text-center text-gray-800 shadow ring-gray-400 hover:bg-green-100 active:bg-white  active:ring-1"
      >
        <p>Sắp xếp DS ngẫu nhiên</p>
      </div>
      {newData.map((item, index) => {
        return (
          <div
            key={index}
            className="mt-4 flex flex-col justify-between border-b border-gray-300 bg-gray-200 p-2 text-sm  sm:text-base md:flex-row"
          >
            <div className="flex w-full flex-row sm:flex-col ">
              <div className="w-1/2 space-y-4 pr-4 font-normal text-gray-500 sm:w-full">
                <p className="border-b border-gray-300">
                  STT:{"  "}
                  <span className=" font-medium text-gray-800">{item.STT}</span>
                </p>
                <p className="border-b border-gray-300">
                  Mã AC:{"  "}
                  <span className=" font-medium text-gray-800">
                    {item.MAAC}
                  </span>
                </p>
                <p className="border-b border-gray-300">
                  Nhóm gỗ:{"  "}
                  <span className=" font-medium text-gray-800">
                    {item.NHOMGO}
                  </span>
                </p>
                <p className="border-b border-gray-300">
                  Tên mẫu:{"  "}
                  <span className=" font-medium text-gray-800">
                    {item.GHICHU}
                  </span>
                </p>
              </div>
              <div className="w-1/2 space-y-4 pr-4 pb-4 font-medium text-gray-500 sm:w-full sm:pt-4">
                <p className="border-b border-gray-300">Thông tin:{"  "}</p>
                <p className=" border-b border-gray-300 font-medium text-gray-800">
                  {item.THONGTIN}
                </p>
                <div
                  onClick={() => handleOnclick(item)}
                  className="cursor-pointer rounded-md bg-green-200 p-2 text-center text-gray-800 shadow ring-gray-400 transition duration-100 hover:bg-green-100  active:ring-1"
                >
                  <p>Thêm vào DS TỰ CHỌN</p>
                </div>
              </div>
            </div>
            <SearchImage imageUrl={item.ANH} index={index}></SearchImage>
          </div>
        );
      })}
    </div>
  );
};
