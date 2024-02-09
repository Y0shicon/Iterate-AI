"use client";

import styles from "@styles/Navbar.module.scss";

// Import necessary libraries
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.wrapper}>
      <Image
        src="/static/iterate_ai_logo.jpeg"
        alt="Iterate AI logo"
        width={60}
        height={60}
      />
      <div className={styles.links}>
        <Link href="/"> Home </Link>
        <Link href="/explore"> Explore </Link>
        <Link href="/ideas"> Ideas </Link>
        <Link href="/about"> About </Link>
        <button className={styles.createButton}>Create</button>
        <Profile />
      </div>
    </nav>
  );
}

export function Profile() {
  const handleClick = () => {
    const profileViewer = document.querySelector(`.${styles.profileView}`);
    profileViewer.classList.toggle(styles.active);
  };
  return (
    <div className={styles.profileWrapper} onClick={handleClick}>
      <div className={styles.profile}>
        <Image
          src="/static/profile.webp"
          alt="Profile"
          width={40}
          height={40}
        />
      </div>
      <div className={styles.profileView}>
        <Image
          src="/static/profile.webp"
          alt="Profile"
          width={40}
          height={40}
        />
        <p>John Doe</p>
      </div>
    </div>
  );
}
