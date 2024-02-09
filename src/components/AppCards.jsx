"use client";

// Import styles
import styles from "@styles/AppCards.module.scss";

// Import state management libraries
import { useSnapshot } from "valtio";
import state from "@/utils/state.js";

// Import Cards component
import AppCard from "./AppCard";

export default function AppCards() {
  const { response, images } = useSnapshot(state);
  console.log(response, images);

  const cards = response.map((response, index) => {
    return <AppCard key={index} response={response} image={images[index]} />;
  });

  return <div className={styles.wrapper}>{cards}</div>;
}
