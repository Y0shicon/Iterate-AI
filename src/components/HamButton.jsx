"use client";

import styles from "@styles/Navbar.module.scss";
import hamMenuStyles from "@styles/Hamburger.module.scss";
import { useEffect } from "react";

export function HamButton() {
  useEffect(() => {
    const hamBut = document.querySelector(`.${styles.hamBut}`);
    const hamLines = document.querySelectorAll(`.${styles.hamLine}`);
    const hamMenu = document.querySelector(`.${hamMenuStyles.hamMenu}`);

    // Toggle ham menu on click of links
    document.querySelectorAll(".hamMenu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamBut.click();
      });
    });

    const toggleHam = () => {
      hamLines.forEach((line) => {
        line.classList.toggle("active");
      });
      hamMenu.classList.toggle("active");
    };

    hamBut.addEventListener("click", toggleHam);

    return () => {
      hamBut.removeEventListener("click", toggleHam);
    };
  }, []);
  return (
    <button className={styles.hamBut}>
      <div className={styles.hamLine}></div>
      <div className={styles.hamLine}></div>
      <div className={styles.hamLine}></div>
    </button>
  );
}
