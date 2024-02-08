// Import necessary libraries
import styles from "./page.module.scss";

import MainContent from "@components/MainContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainContent />
    </main>
  );
}
