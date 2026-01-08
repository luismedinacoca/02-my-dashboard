"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";
import { getApiCounter } from "../actions/get-api-counter";

const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const isReady = useAppSelector((state) => state.counter.isReady);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  if (!isReady) {
    return (
      <div className="flex items-center justify-center">
        <span className="text-2xl animate-pulse">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          aria-label="Substract 1"
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          disabled={count === 0}
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>

        <button
          aria-label="Add 1"
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
