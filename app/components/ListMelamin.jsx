import React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const ListMelamin = ({ data }) => {
  const [idxFull, setIdxFull] = useState();
  console.log("idxFull: ", idxFull);
  return (
    <div>
      <div className="">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900"></h1>
            <p className="mt-2 text-sm text-gray-700">
              <strong className="font-semibold text-gray-900">Tổng cộng</strong>{" "}
              79 Mẫu
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Học mẫu
            </button>
          </div>
        </div>
        <div className="pt-4">
          <table className="min-w-full divide-y divide-gray-300 bg-gray-200 rounded-md">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="hidden py-3.5 pl-2 text-left text-sm font-normal text-gray-900 lg:table-cell "
                >
                  STT
                </th>
                <th
                  scope="col"
                  className=" px-2 py-3.5 text-left text-sm font-normal text-gray-900 "
                >
                  Mã AC
                </th>
                <th
                  scope="col"
                  className="hidden px-2 py-3.5 text-left text-sm font-normal text-gray-900 lg:table-cell"
                >
                  Nhóm gỗ
                </th>
                <th
                  scope="col"
                  className="hidden px-2 py-3.5 text-left text-sm font-normal text-gray-900 lg:table-cell"
                >
                  Ghi Chú
                </th>
                <th
                  scope="col"
                  className="px-2 py-3.5 text-center text-sm font-normal text-gray-900"
                >
                  Ảnh
                </th>
                <th scope="col" className="relative py-3.5 pl-2 ">
                  <span className="sr-only">Select</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-gray-700 text-sm font-semibold">
                  <td
                    className={classNames(
                      index === 0 ? "" : "border-t border-transparent",
                      "relative py-4 pl-4 pr-3  sm:pl-6 hidden lg:table-cell"
                    )}
                  >
                    <div className=" ">{item.STT}</div>

                    {index !== 0 ? (
                      <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" />
                    ) : null}
                  </td>
                  <td
                    className={classNames(
                      index === 0 ? "" : "border-t border-gray-200",
                      "px-3 py-3.5  table-cell"
                    )}
                  >
                    {item.MAAC}
                  </td>
                  <td
                    className={classNames(
                      index === 0 ? "" : "border-t border-gray-200",
                      "hidden px-3 py-3.5  lg:table-cell"
                    )}
                  >
                    {item.NHOMGO}
                  </td>
                  <td
                    className={classNames(
                      index === 0 ? "" : "border-t border-gray-200",
                      "hidden px-3 py-3.5  lg:table-cell"
                    )}
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
                          idxFull == index ? " fixed inset-0 z-50" : "max-w-4xl"
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
                  <td
                    className={classNames(
                      index === 0 ? "" : "border-t border-transparent",
                      "relative py-3.5 pl-3 pr-4 text-right  font-medium sm:pr-6 hidden lg:table-cell"
                    )}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    >
                      Select<span className="sr-only">,</span>
                    </button>
                    {index !== 0 ? (
                      <div className="absolute right-6 left-0 -top-px h-px bg-gray-200" />
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
