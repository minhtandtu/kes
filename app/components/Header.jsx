"use client";

import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Search from "./search/Search";

const navigation = {
  categories: [
    // {
    //   name: "Nội Thất Gỗ",
    //   featured: [
    //     {
    //       name: "Tủ Quần Áo",
    //       href: "#",
    //       imageSrc: "../../images/tugomdf.png",
    //       imageAlt:
    //         "Models sitting back to back, wearing Basic Tee in black and bone.",
    //     },
    //     {
    //       name: "Tủ Bếp",
    //       href: "#",
    //       imageSrc: "../../images/tubepmdf.png",
    //       imageAlt:
    //         "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
    //     },
    //     {
    //       name: "Kệ TV",
    //       href: "#",
    //       imageSrc: "../../images/ketivi.png",
    //       imageAlt:
    //         "Model wearing minimalist watch with black wristband and white watch face.",
    //     },
    //     {
    //       name: "Phụ Kiện",
    //       href: "#",
    //       imageSrc: "../../images/phukien.png",
    //       imageAlt:
    //         "Model opening tan leather long wallet with credit card pockets and cash pouch.",
    //     },
    //   ],
    // },
    {
      name: "Ván MDF & MFC",
      featured: [
        {
          name: "Ván MDF Phủ Melamin",
          href: "#",
          imageSrc: "../../images/MDFMelamin.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Ván MDF Chống Ẩm Phủ Melamin",
          href: "#",
          imageSrc: "../../images/MDFRM.png",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Ván Dăm Phủ Melamin",
          href: "#",
          imageSrc: "../../images/MFCMelamin.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Ván Dăm Kháng Nước Phủ Melamin",
          href: "#",
          imageSrc: "../../images/MFCMR.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
    {
      name: "Ý Tưởng Decor",
      featured: [
        {
          name: "Phòng Khách",
          href: "#",
          imageSrc: "../../images/ketivi.png",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Phòng Làm Việc",
          href: "#",
          imageSrc: "../../images/kesach.png",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Phòng Ngủ",
          href: "#",
          imageSrc: "../../images/bed-1.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Nhà Ở",
          href: "#",
          imageSrc: "../../images/phukien.png",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "Blogs", href: "#" },
    { name: "Mẫu Melamin", href: "/mau-melamin" },
    { name: "Liên Hệ", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium "
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-12 px-4 py-6"
                      >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <div className="aspect-w-1  aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block text-sm font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p
                                aria-hidden="true"
                                className="mt-1 text-sm text-gray-500"
                              >
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4"></div>
                <div className="space-y-6 border-t border-gray-200 py-6 px-4"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="container relative mx-auto ">
        <nav aria-label="Top">
          {/* Top navigation */}

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="/">
                    <Image
                      src="/images/logo2.jpg"
                      width={200}
                      height={100}
                      className="h-16 object-cover"
                      alt="alt"
                    ></Image>
                  </a>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <Popover.Group className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex ">
                          {({ open }) => (
                            <>
                              <div className="relative flex ">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? "text-indigo-600"
                                      : "text-gray-500 hover:text-gray-800",
                                    "relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out"
                                  )}
                                >
                                  {category.name}
                                  <span
                                    className={classNames(
                                      open ? "bg-indigo-600" : "",
                                      "absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out"
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500">
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className="absolute inset-0 top-1/2 bg-white shadow"
                                    aria-hidden="true"
                                  />
                                  {/* Fake border when menu is open */}
                                  <div
                                    className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                                    aria-hidden="true"
                                  >
                                    <div
                                      className={classNames(
                                        open ? "bg-gray-200" : "bg-transparent",
                                        "h-px w-full transition-colors duration-200 ease-out"
                                      )}
                                    />
                                  </div>

                                  <div className="relative">
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                      <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                        {/* Fly out content from top menu */}
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative"
                                          >
                                            <div className=" aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="aspect-square object-cover object-center"
                                              />
                                            </div>
                                            <a
                                              href={item.href}
                                              className="mt-4 block font-medium text-gray-900"
                                            >
                                              <span
                                                className="absolute inset-0 z-10"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </a>
                                            <p
                                              aria-hidden="true"
                                              className="mt-1"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}
                      {/* Menu Pages Items */}
                      {navigation.pages.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-800"
                        >
                          {page.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <a
                    href="/mau-melamin"
                    className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href="/" className="lg:hidden">
                  <span className="sr-only">Your Company</span>
                  <Image
                    src="/images/logo2.jpg"
                    width={100}
                    height={50}
                    className="h-10 object-cover"
                    alt="alt"
                  ></Image>
                </a>

                <div className="flex flex-1 items-center justify-end ">
                  <Search></Search>

                  <div className="flex items-center ">
                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-8">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          0
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
