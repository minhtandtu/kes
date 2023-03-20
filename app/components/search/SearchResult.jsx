import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export const SearchResult = ({ searchResult }) => {
  const [idxFull, setIdxFull] = useState();
  return (
    <div>
      <p className="mt-4">Kết quả:</p>
      <table className="min-w-full divide-y divide-gray-300 rounded-md bg-gray-200 text-gray-800">
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
                  className="hidden py-3.5 pl-2 text-left text-sm font-semibold text-gray-900 lg:table-cell "
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
                  className="float-right px-2 py-3.5 text-sm font-semibold text-gray-900 "
                >
                  {item.ANH && (
                    <div
                      className={`${
                        idxFull == index
                          ? " fixed inset-0 z-50 "
                          : " max-w-3xl "
                      }`}
                    >
                      <div className=" relative flex h-full w-full cursor-pointer items-center justify-center bg-gray-700/60">
                        <Image
                          src={item.ANH}
                          alt={item.ANH}
                          width={5000}
                          height={2500}
                          className={` ${
                            idxFull == index
                              ? "  fixed h-full w-full rotate-90 md:w-[90%] md:rotate-0"
                              : "  "
                          } rounded object-cover `}
                        />
                        {idxFull == index && (
                          <div
                            className="absolute top-12 left-28 z-50 bg-white/30 p-3"
                            onClick={() => setIdxFull(-1)}
                          >
                            <ArrowsPointingInIcon className="w-10 text-gray-700" />
                          </div>
                        )}
                        {idxFull != index && (
                          <div
                            className="absolute top-5 left-5 bg-white/30 p-3"
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
