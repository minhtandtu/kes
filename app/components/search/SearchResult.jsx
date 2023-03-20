import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export const SearchResult = ({ searchResult }) => {
  const [idxFull, setIdxFull] = useState();
  console.log("idxFull: ", idxFull);
  return (
    <div>
      <p className="mt-4">Kết quả:</p>
      <table className="min-w-full divide-y divide-gray-300 bg-gray-200 rounded-md text-gray-800">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-2 text-left text-sm font-normal   "
            >
              STT
            </th>
            <th
              scope="col"
              className="hidden px-2 py-3.5 text-left text-sm font-normal  lg:table-cell"
            >
              Mã AC
            </th>
            <th
              scope="col"
              className="hidden px-2 py-3.5 text-left text-sm font-normal  lg:table-cell"
            >
              Nhóm gỗ
            </th>
            <th
              scope="col"
              className="hidden px-2 py-3.5 text-left text-sm font-normal  lg:table-cell"
            >
              Ghi Chú
            </th>
            <th
              scope="col"
              className="px-2 py-3.5 text-center text-sm font-normal "
            >
              Ảnh
            </th>
          </tr>
        </thead>
        <tbody>
          {searchResult.map((item, index) => {
            return (
              <tr key={index} className="divide-y divide-gray-300">
                <td
                  scope="col"
                  className="py-3.5 pl-2 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell "
                >
                  {item.STT}
                </td>
                <td
                  scope="col"
                  className="px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  {item.MAAC}
                </td>
                <td
                  scope="col"
                  className="hidden px-2 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  {item.NHOMGO}
                </td>
                <td
                  scope="col"
                  className="hidden px-2 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  {item.GHICHU}
                </td>
                <td
                  scope="col"
                  className="px-2 py-3.5 float-right text-sm font-semibold text-gray-900 "
                >
                  {item.ANH && (
                    <div
                      className={`${
                        idxFull == index ? " fixed inset-0 z-50" : "max-w-3xl"
                      }`}
                    >
                      <div className="w-full relative cursor-pointer flex justify-center items-center h-full bg-gray-700/60">
                        <Image
                          src={item.ANH}
                          alt={item.ANH}
                          width={5000}
                          height={2500}
                          className={` ${
                            idxFull == index ? "w-[88%] " : " w-full "
                          } border border-gray-300  rounded cursor-pointer  object-cover`}
                        />
                        {idxFull == index && (
                          <div
                            className="absolute top-12 left-28 p-3 bg-white/30 z-50"
                            onClick={() => setIdxFull(-1)}
                          >
                            <ArrowsPointingInIcon className="w-10 text-gray-700" />
                          </div>
                        )}
                        {idxFull != index && (
                          <div
                            className="absolute top-5 left-5 p-3 bg-white/30"
                            onClick={() => setIdxFull(index)}
                          >
                            <ArrowsPointingOutIcon className="w-5 text-gray-700" />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
