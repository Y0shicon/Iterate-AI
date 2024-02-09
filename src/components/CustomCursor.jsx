"use client";

// Import styles
import styles from "@styles/CustomCursor.module.scss";

// React required imports
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursor = useRef(null);
  const dot = useRef(null);

  const onMouseMove = (e) => {
    dot.current.style.top = e.clientY + "px";
    dot.current.style.left = e.clientX + "px";
    setTimeout(() => {
      cursor.current.style.top = e.clientY + "px";
      cursor.current.style.left = e.clientX + "px";
    }, 100);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    // Add hover class on hovering over buttons or svg or a tags
    const hoverables = document.querySelectorAll("button, svg, a, input, .hoverable");
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener("mouseover", () => {
        cursor.current.classList.add("hover");
      });
      hoverable.addEventListener("mouseleave", () => {
        cursor.current.classList.remove("hover");
      });
    });
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursor} className={styles.cursor}></div>
      <div ref={dot} className={styles.dot}></div>
    </>
  );
}
