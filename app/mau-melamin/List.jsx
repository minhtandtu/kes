import React from "react";
import { data } from "@/data/data";
import { ListMelamine } from "./ListMelamine";
const List = ({ keyword }) => {
  const result = data.filter((item) => item.NHOMGO.includes(keyword));
  return (
    <div>
      <ListMelamine data={result}></ListMelamine>
    </div>
  );
};

export default List;
