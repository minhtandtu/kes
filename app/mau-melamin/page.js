"use client";
import React from "react";
import { data } from "@/data/data";
import {
  BuildingOfficeIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
const tabs = [
  { name: "Tìm mẫu", href: "#", icon: UserIcon, current: true },
  {
    name: "Danh sách mẫu",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
];
import { useState } from "react";
import { SearchMaMelamin } from "../components/search/SearchMaMelamin";
import { ListMelamin } from "../components/ListMelamin";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const page = () => {
  const [tabNo, settabNo] = useState(0);
  return (
    <div className="container mx-auto mt-4">
      <div className="border border-gray-300 p-4">
        <div className="flex space-x-8">
          {tabs.map((tab, index) => (
            <p
              key={tab.name}
              onClick={() => settabNo(index)}
              className={classNames(
                tabNo == index
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium cursor-pointer"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              <tab.icon
                className={classNames(
                  tab.current
                    ? "text-indigo-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "-ml-0.5 mr-2 h-5 w-5"
                )}
                aria-hidden="true"
              />
              <span>{tab.name}</span>
            </p>
          ))}
        </div>
        <div className={`${tabNo == 1 ? "block" : "hidden"} `}>
          <ListMelamin data={data} />
        </div>
        <div className={`${tabNo == 0 ? "block" : "hidden"} py-4`}>
          <SearchMaMelamin data={data}></SearchMaMelamin>
        </div>
      </div>
    </div>
  );
};

export default page;
