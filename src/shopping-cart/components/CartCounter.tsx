"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

//Interface for Props:
interface Props {
  value?: number;
}

// Counter response from the API
export interface CounterResponse {
  method: string;
  count: number;
}

// Function to get the counter from the API
const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter");
  const dataJson = await data.json();
  console.log({ dataJson });

  return dataJson;
};

const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter()
      // .then((data) => {
      //   dispatch(initCounterState(data.count));
      // });
      .then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(substractOne())}
          disabled={count === 0}
        >
          -1
        </button>
        <button
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
