"use client";
import React from "react";

// Import the useState hook
import { useState } from "react";

// Import the Image component from the next/image module
import Image from "next/image";

export default function MainContent() {
  // Define state variables for the image
  const [images, setImages] = useState([]);
  const [response, setResponse] = useState("");

  // Define a function to handle the POST request
  const handlePostRequest = async () => {
    // Send a POST request to the server
    const response = await fetch("/api/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    // Get the JSON from the response
    const json = await response.json();
    console.log(json);
    // Set the result state variable
    setImages(json.img);
  };

  const handlePromptRequest = async () => {
    // Send a POST request to the server
    const response = await fetch("/api/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    // Get the JSON from the response
    const json = await response.json();
    // Set the result state variable
    setResponse(json.gptResponse);
  };

  return (
    <section>
      <button
        onClick={() => {
          handlePostRequest();
          handlePromptRequest();
        }}
      >
        Post data
      </button>
      <Image
        src={images[0]?.url}
        alt="Generated image"
        width={50}
        height={50}
      />
      <p>{response}</p>
    </section>
  );
}
