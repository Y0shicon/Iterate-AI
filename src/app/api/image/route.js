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
      prompt: "Gym app icon black and white",
      quality: "standard",
      size: "256x256",
    });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You will be provided with an app description. Your job is to come up with a name and list 5 to 7 features that the app could have in the following format.\nName : \nFeatures : \n1.\n2.\n3.\n",
        },
        {
          role: "user",
          content: "A gym app that tracks your workouts",
        },
        {
          role: "assistant",
          content:
            "Name : FitTrack\n\nFeatures :\n1. Workout Tracking: The app allows you to track and record your workouts, including exercises, sets, reps, and weights.\n2. Personalized Workouts: FitTrack creates customized workout plans based on your fitness goals, level of experience, and available equipment.\n3. Exercise Library: Access a vast collection of exercise demonstrations with proper form and technique to ensure you perform each exercise correctly.\n4. Progress Tracking: Monitor your fitness progress over time with visual charts and statistics, helping you stay motivated and reach your goals.\n5. Challenges and Achievements: Engage in fitness challenges and earn achievements for completing certain workouts or reaching specific milestones.\n6. Workout Reminders: Set reminders to stay on track with your workout schedule and receive notifications when it's time to hit the gym.\n7. Community Support: Connect with a community of like-minded individuals, share your progress, and get inspired by others on their fitness journey.",
        },
      ],
      temperature: 0.8,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // Return the result of the completion
    return NextResponse.json({
      img: image.data[0].url,
      gptResponse: response.choices[0].message.content,
    });
  } catch (error) {
    // Return an error response if there is an error
    console.error(error);
    return NextResponse.error(error);
  }
}
