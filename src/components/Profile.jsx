"use client";

import styles from "@styles/Navbar.module.scss";
import Image from "next/image";

// Import state management libraries
import { useSnapshot } from "valtio";
import state from "../utils/state.js";

export default function Profile() {
  // Get the current state
  const snap = useSnapshot(state);

  // Open the profile viewer
  const handleClick = () => {
    const profileViewer = document.querySelector(`.${styles.profileView}`);
    profileViewer.classList.toggle(styles.active);
  };

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profile} onClick={handleClick}>
        <Image src={snap.profile.image} alt="Profile" width={40} height={40} />
      </div>
      <div className={styles.profileView}>
        <Image src={snap.profile.image} alt="Profile" width={40} height={40} />
        <p>{snap.profile.name}</p>
      </div>
    </div>
  );
}
