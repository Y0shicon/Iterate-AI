"use client";
import React from "react";

// Import the useState hook
import { useState } from "react";

// Import the Image component from the next/image module
import Image from "next/image";

export default function MainContent() {
  // Define state variables for the image
  const [image, setImage] = useState("");
  const [response, setResponse] = useState("");

  // Define a function to handle the POST request
  const handlePostRequest = async () => {
    // Send a POST request to the server
    const response = await fetch("/api/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    // Get the JSON from the response
    const json = await response.json();
    // Set the result state variable
    setImage(json.img);
    setResponse(json.gptResponse);
  };

  return (
    <>
      <button onClick={handlePostRequest}>Post data</button>
      <Image src={image} alt="Generated image" width={50} height={50} />
      <p>{response}</p>
    </>
  );
}
