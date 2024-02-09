// Importing react components
import Textfield from "./Textfield";
import AppCards from "./AppCards";

// Import the styles
import styles from "@styles/MainContent.module.scss";

// Chakra Provider
import { ChakraProvider } from "@chakra-ui/react";

export default function MainContent() {
  return (
    <>
      <section className={styles.generator}>
        <h1>What&apos;s Your App Idea?</h1>
        <Textfield />
      </section>
      <section className={styles.cardsWrapper}>
        <ChakraProvider>
          <AppCards />
        </ChakraProvider>
      </section>
    </>
  );
}
