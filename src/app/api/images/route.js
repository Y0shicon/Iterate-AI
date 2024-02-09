// Import necessary libraries
const OpenAI = require("openai");

// Next Response imported from the next/server module
import { NextResponse } from "next/server";

// Return the result of the chat completion
export async function POST(request) {
  const { prompt } = await request.json();
  try {
    // Create a new OpenAI object
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    // Send a completion request to the OpenAI API
    const image = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt + "app idea icon stylish 2d modern 1:1 aspect ratio",
      quality: "standard",
      size: "256x256",
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
