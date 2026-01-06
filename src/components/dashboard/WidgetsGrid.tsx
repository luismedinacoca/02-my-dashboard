"use client";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={`${counter}`}
        subtitle=" Products in shopping cart"
        label="Counter"
        icon={<IoCartOutline size={70} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
{
  /*
<div className="relative">
  <IoCartOutline size={50} className="text-blue-500" />
  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
    {counter.toString() || "0"}
  </span>
</div>  
  
*/
}
