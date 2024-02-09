// Import necessary libraries
import styles from "@styles/page.module.scss";

import MainContent from "@components/MainContent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <MainContent />
    </main>
  );
}
