import { Metadata } from "next/types";
import { SimpleWidget } from "../../../components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General Information</span>

      <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget />
      </div>
    </div>
  );
}
