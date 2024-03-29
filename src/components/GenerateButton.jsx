"use client";

// Import styles
import styles from "@styles/Textfield.module.scss";

// Import state management libraries
import { useSnapshot } from "valtio";
import state from "@/utils/state.js";

export default function GenerateButton() {
  const snap = useSnapshot(state);

  // Define a function to handle the POST request
  const handlePostRequest = async () => {
    const prompt = state.prompt;

    // Reset the images state variable
    state.images = [];

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
    // Set the result state variable
    state.images = json.img;
  };

  const handlePromptRequest = async () => {
    const prompt = state.prompt;

    // Reset the response state variable
    state.response = [];

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
    const gptResponse = JSON.parse(json.gptResponse);
    state.response = gptResponse.data;
  };

  return (
    <button
      className={styles.generateButton}
      onClick={() => {
        handlePostRequest();
        handlePromptRequest();
        state.isLoading = true;
      }}
      disabled={snap.isLoading}
    >
      Generate
    </button>
  );
}
