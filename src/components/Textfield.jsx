// Importing styles
import styles from "@styles/Textfield.module.scss";

// Import GenerateButton component
import GenerateButton from "./GenerateButton";

// Import state management libraries
import { useSnapshot } from "valtio";
import state from "@/utils/state.js";

// Import React
import React from "react";

export default function Textfield() {
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    state.prompt = e.target.value;
  };

  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Write a prompt"
      />
      <GenerateButton />
    </div>
  );
}
