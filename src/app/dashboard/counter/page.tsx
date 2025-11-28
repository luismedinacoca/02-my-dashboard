"use client";
import { Metadata } from "next/types";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Simple Counter Page",
};

export default function CounterPage() {
  const [count, setCounts] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in shopping cart</span>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count - 1)}
          disabled={count === 0}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounts(count + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}
