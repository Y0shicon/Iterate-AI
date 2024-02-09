"use client";

// Import styles
import styles from "@styles/Textfield.module.scss";

// Import state management libraries
import { useSnapshot } from "valtio";
import state from "@/utils/state.js";

export default function GenerateButton() {
  // Define a function to handle the POST request
  const handlePostRequest = async () => {
    const prompt = state.prompt;

    // Send a POST request to the server
    const response = await fetch("/api/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });
    // Get the JSON from the response
    const json = await response.json();
    console.log(json);
    // Set the result state variable
    state.images = json.img;
  };

  const handlePromptRequest = async () => {
    const prompt = state.prompt;

    // Send a POST request to the server
    const response = await fetch("/api/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });
    // Get the JSON from the response
    const json = await response.json();
    // Set the result state variable
    state.response = JSON.parse(json.gptResponse);
  };

  return (
    <button
      className={styles.generateButton}
      onClick={() => {
        handlePostRequest();
        handlePromptRequest();
      }}
    >
      Generate
    </button>
  );
}
