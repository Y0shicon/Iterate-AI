"use client";

// Import styles
import styles from "@styles/AppCards.module.scss";

// Import state management libraries
import { useSnapshot } from "valtio";
import state from "@/utils/state.js";

// Import Cards component
import AppCard from "./AppCard";

// Chakra CircularProgress
import { CircularProgress } from "@chakra-ui/react";

export default function AppCards() {
  const { response, images } = useSnapshot(state);

  if (response.length !== 0 && images.length !== 0) {
    state.isLoading = false;
  }

  const cards = response.map((response, index) => {
    return <AppCard key={index} response={response} image={images[index]} />;
  });

  return (
    <div className={styles.wrapper}>
      {state.isLoading ? (
        <CircularProgress color="#617afa" isIndeterminate />
      ) : (
        cards
      )}
    </div>
  );
}
