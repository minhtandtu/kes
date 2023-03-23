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
              <div className="flex w-full ">
                <div className="space-y-4 whitespace-nowrap  font-normal text-gray-500">
                  <p className="border-b border-gray-300">STT: </p>
                  <p className="border-b border-gray-300">Mã AC: </p>
                  <p className="border-b border-gray-300">Nhóm gỗ: </p>
                  <p className="border-b border-gray-300">Tên mẫu: </p>
                </div>
                <div className="space-y-4 pr-4  font-medium text-gray-800">
                  <p className="border-b border-gray-300">&nbsp; {item.STT}</p>
                  <p className="border-b border-gray-300">&nbsp; {item.MAAC}</p>
                  <p className="border-b border-gray-300">
                    &nbsp; {item.NHOMGO}
                  </p>
                  <p className="border-b border-gray-300">
                    &nbsp; {item.GHICHU}
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
