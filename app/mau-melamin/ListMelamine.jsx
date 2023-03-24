import React from "react";
import SearchImage from "../components/search/SearchImage";
export const ListMelamine = ({ data }) => {
  return (
    <div>
      <div>
        <p className="mt-4">Kết quả:</p>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="mt-4 flex flex-col justify-between border-b border-gray-300 bg-gray-200 p-2 text-sm  sm:text-base md:flex-row"
            >
              <div className="flex w-full flex-row sm:flex-col ">
                <div className="w-1/2 space-y-4 pr-4 font-normal text-gray-500 sm:w-full">
                  <p className="border-b border-gray-300">
                    STT:{"  "}
                    <span className=" font-medium text-gray-800">
                      {item.STT}
                    </span>
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
                </div>
              </div>
              <SearchImage imageUrl={item.ANH} index={index}></SearchImage>
            </div>
          );
        })}
      </div>
    </div>
  );
};
