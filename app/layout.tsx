import "../styles/global.css";

import { Metadata } from "next";
import Navigation from "../components/navigation";

//
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies", // 템플릿
    default: "Loding...",
  },
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
