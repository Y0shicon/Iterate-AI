// Import necessary libraries
const OpenAI = require("openai");

// Next Response imported from the next/server module
import { NextResponse } from "next/server";

// Return the result of the chat completion
export async function POST(request) {
  try {
    // Create a new OpenAI object
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    // Send a completion request to the OpenAI API
    const image = await openai.images.generate({
      model: "dall-e-2",
      prompt: "Gym app icon",
      quality: "standard",
      size: "512x512",
      n: 3,
    });

    // Return the result of the completion
    return NextResponse.json({
      img: image.data,
    });
  } catch (error) {
    // Return an error response if there is an error
    console.error(error);
    return NextResponse.error(error);
  }
}
