import { CartCounter } from "../../shopping-cart";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "𝌰 Shopping Cart",
  description: "Simple Counter Page",
};

// i.e a value generated from the server
const value = 20;

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in shopping cart</span>
      <CartCounter value={value} />
    </div>
  );
}
