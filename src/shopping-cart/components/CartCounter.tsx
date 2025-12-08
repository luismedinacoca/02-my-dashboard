"use client";
import { useState } from "react";

//Interface for Props:
interface Props {
  value?: number;
}

const CartCounter = ({ value = 10 }: Props) => {
  const [count, setCounts] = useState(value);
  return (
    <>
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
    </>
  );
};

export default CartCounter;
