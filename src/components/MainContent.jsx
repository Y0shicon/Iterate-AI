// Importing react components
import Textfield from "./Textfield";
import AppCards from "./AppCards";

// Import the styles
import styles from "@styles/MainContent.module.scss";

export default function MainContent() {
  return (
    <>
      <section className={styles.generator}>
        <h1>What&apos;s Your App Idea?</h1>
        <Textfield />
      </section>
      <section className={styles.cardsWrapper}>
        <AppCards />
      </section>
    </>
  );
}
