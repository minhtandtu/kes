"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { SearchResult } from "./SearchResult";
export const SearchMaMelamin = ({ data }) => {
  const firstInputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([
    {
      STT: "",
      MAAC: "",
      NHOMGO: "",
      KHUONAC: "",
      GHICHU: "",
      ANH: "",
    },
  ]);
  function handleChange(event) {
    setInputValue(event.target.value); // update the input value in state
  }
  function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submission behavior
    setInputValue(""); // clear the input field
  }
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
    const filteredData = data.filter((item) => {
      return Object.values(item).some((value) => {
        return value.toString().includes(inputValue);
      });
    });

    const filteredFields = filteredData.map((item) => {
      const fields = {};

      Object.keys(item).forEach((key) => {
        fields[key] = item[key];
      });
      return fields;
    });

    if (filteredFields && inputValue) {
      setSearchResult(filteredFields);
    } else {
      console.log("Không tìm thấy");
    }
  }, [inputValue]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="search"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Nhập mã AC cần tìm:
        </label>
        <div className="relative mt-2 flex items-center">
          <input
            ref={firstInputRef}
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="block w-full max-w-lg rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </form>

      <SearchResult searchResult={searchResult}></SearchResult>
    </div>
  );
};