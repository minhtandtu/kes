"use client";
import React from "react";
import { data } from "@/data/data";
import {
  BuildingOfficeIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

import { useState, useEffect } from "react";
import { SearchMaMelamin } from "../components/search/SearchMaMelamin";
import { ListMelamine } from "./ListMelamine";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import { CustomList } from "./CustomList";
const tabs = [
  {
    name: "TÌM MẪU",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
    current: true,
  },
  {
    name: "TẤT CẢ",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "DS TỰ CHỌN",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "ĐƠN SẮC",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "OAK",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "WALNUT",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "ASH",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "CHERRY",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "MAPLE",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "TEAK",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "OTHER",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "FABRIC",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "CONCRETE",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const page = () => {
  const [tabNo, settabNo] = useState(0);
  const [listitem, setListitem] = useState([]);
  function HandleDeleteItem(STT) {
    console.log("Delete item: ", STT);
    const newValue = listitem.filter((item) => item.STT !== STT);
    localStorage.setItem("itemsAdded", JSON.stringify(newValue));
    setListitem(newValue);
  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("itemsAdded")) || [];
    setListitem(localData);
  }, []);
  function Handlelist(item) {
    console.log("item: ", item);
    const giatri = listitem.find((itm) => {
      return itm.STT == item.STT;
    });
    if (!giatri) {
      listitem.push(item);
      localStorage.setItem("itemsAdded", JSON.stringify(listitem));
    }
  }
  function HandleKeyword(keyword) {
    const result = data.filter((item) => item.NHOMGO.includes(keyword));
    return result;
  }

  return (
    <div className="container mx-auto mt-4 max-w-7xl">
      <div className="border border-gray-300 p-4">
        <div className="sticky top-0 z-10 flex space-x-6 overflow-x-auto bg-white px-4 py-1 scrollbar-hide">
          {tabs.map((tab, index) => (
            <p
              key={tab.name}
              onClick={() => settabNo(index)}
              className={classNames(
                tabNo == index
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "group inline-flex cursor-pointer items-center border-b-2 py-4 px-1 text-sm font-medium"
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
              <span className="whitespace-nowrap">{tab.name}</span>
            </p>
          ))}
        </div>
        <div className="animate-pulse flex justify-center border-b border-gray-300 font-semibold">
          <ArrowLeftIcon className="w-5  animate-bounceLeft text-gray-700"></ArrowLeftIcon>
          sweap
          <ArrowRightIcon className="w-5 animate-bounceRight text-gray-700 "></ArrowRightIcon>
        </div>
        <div className={`${tabNo == 0 ? "block" : "hidden"} py-4`}>
          <SearchMaMelamin data={data}></SearchMaMelamin>
        </div>
        <div className={`${tabNo == 1 ? "block" : "hidden"} `}>
          <ListMelamine data={data} listofitems={Handlelist} />
        </div>
        <div className={`${tabNo == 2 ? "block" : "hidden"} `}>
          <CustomList
            data={listitem}
            deleteItem={HandleDeleteItem}
          ></CustomList>
        </div>
        <div className={`${tabNo == 3 ? "block" : "hidden"} py-4`}>
          <ListMelamine
            data={HandleKeyword("SOLID")}
            listofitems={Handlelist}
          />
        </div>
        <div className={`${tabNo == 4 ? "block" : "hidden"} py-4`}>
          <ListMelamine data={HandleKeyword("OAK")} listofitems={Handlelist} />
        </div>
        <div className={`${tabNo == 5 ? "block" : "hidden"} py-4`}>
          <ListMelamine
            data={HandleKeyword("WALNUT")}
            listofitems={Handlelist}
          />
        </div>{" "}
        <div className={`${tabNo == 6 ? "block" : "hidden"} py-4`}>
          <ListMelamine data={HandleKeyword("ASH")} listofitems={Handlelist} />
        </div>{" "}
        <div className={`${tabNo == 7 ? "block" : "hidden"} py-4`}>
          <ListMelamine
            data={HandleKeyword("CHERRY")}
            listofitems={Handlelist}
          />
        </div>{" "}
        <div className={`${tabNo == 8 ? "block" : "hidden"} py-4`}>
          <ListMelamine
            data={HandleKeyword("MAPLE")}
            listofitems={Handlelist}
          />
        </div>{" "}
        <div className={`${tabNo == 9 ? "block" : "hidden"} py-4`}>
          <ListMelamine data={HandleKeyword("TEAK")} listofitems={Handlelist} />
        </div>{" "}
        <div className={`${tabNo == 10 ? "block" : "hidden"} py-4`}>
          <ListMelamine
            data={HandleKeyword("OTHER")}
            listofitems={Handlelist}
          />
        </div>{" "}
        <div className={`${tabNo == 11 ? "block" : "hidden"} py-4`}>
          <ListMelamine
            data={HandleKeyword("FABRIC")}
            listofitems={Handlelist}
          />
        </div>{" "}
        <div className={`${tabNo == 12 ? "block" : "hidden"} py-4`}>
          <ListMelamine
            data={HandleKeyword("CONCRETE")}
            listofitems={Handlelist}
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default page;
