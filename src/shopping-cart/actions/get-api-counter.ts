import { CounterResponse } from "../interfaces/counter-response";

export const getApiCounter = async (): Promise<CounterResponse> => {
  try {
    const data = await fetch("/api/counter");
    const dataJson = await data.json();

    return dataJson;
  } catch (error) {
    console.log({ error });
    return {
      count: 0,
      method: "GET",
    };
  }
};
