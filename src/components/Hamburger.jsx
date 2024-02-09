"use client";

// Import styles
import styles from "@styles/Hamburger.module.scss";

// Import necessary libraries
import Link from "next/link";

export default function Hamburger() {
  return (
    <div className={styles.hamMenu}>
      <Link href="/"> Home </Link>
      <Link href="/explore"> Explore </Link>
      <Link href="/ideas"> Ideas </Link>
      <Link href="/about"> About </Link>
      <button className={styles.createButton}>Create</button>
    </div>
  );
}
