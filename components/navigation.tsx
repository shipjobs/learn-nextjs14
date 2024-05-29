"use client"; //CSR

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const usepath = usePathname();
  const [count, setCount] = useState(0);

  console.log(usepath);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link> {usepath === "/" ? "👹" : ""}
        </li>
        <li>
          <Link href="/about-us/company">company</Link>{" "}
          {usepath === "/about-us/company" ? "👹" : ""}
        </li>
        <li>
          <Link href="/about-us">about us</Link>{" "}
          {usepath === "/about-us" ? "👹" : ""}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count} '클릭'</button>
        </li>
      </ul>
    </nav>
  );
}
