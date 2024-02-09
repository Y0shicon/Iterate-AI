"use client";
import React, { useEffect } from "react";

// Import the Image component from the next/image module
import Image from "next/image";

// Importing react components
import Textfield from "./Textfield";

// Import the styles
import styles from "@styles/MainContent.module.scss";

// Import state management libraries
import { useSnapshot } from "valtio";
import state from "@/utils/state.js";

export default function MainContent() {
  const snap = useSnapshot(state);

  return (
    <section className={styles.generator}>
      <h1>What&apos;s Your App Idea?</h1>
      <Textfield />
    </section>
  );
}
