import { Metadata } from "next/types";

export const metadata : Metadata = {
  title: "NotFound",
};

export default function NotFound() {
  return (
    <div>
      <h1>Not Found!</h1>
    </div>
  );
}
