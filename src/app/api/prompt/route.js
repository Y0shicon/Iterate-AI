// Import necessary libraries
const OpenAI = require("openai");

// Next Response imported from the next/server module
import { NextResponse } from "next/server";

const model = "gpt-3.5-turbo-0125";
const messages = [
  {
    role: "system",
    content:
      "You will be provided with an app description. Your job is to come up with a 3 app ideas each of which consist of a name and a list of 3 to 4 features that the app could have in the following json format.\nName : \nFeatures : \n1. \n2.",
  },
  {
    role: "user",
    content: "A gym app that tracks your workouts",
  },
  {
    role: "assistant",
    content:
      "App 1:\nName: FitTrack\nFeatures:\n1. Track Workouts: Users can log their workouts including exercises, sets, reps, and weights.\n2. Workout Plans: Provide pre-designed workout plans for different goals such as weight loss, muscle gain, or strength training.\n3. Progress Tracking: Show users their progress over time through charts and statistics.\n4. Personal Trainer: Connect users with certified trainers for personalized workout plans and guidance.\n\nApp 2:\nName: GymBuddy\nFeatures:\n1. Exercise Library: Provide a comprehensive library of exercises with detailed descriptions and videos for proper form.\n2. Workout Scheduler: Create and schedule personalized workout routines based on user preferences and fitness level.\n3. Social Community: Connect with other gym-goers, share progress photos, and provide support and motivation to each other.\n4. Workout Reminders: Set reminders for upcoming workouts to keep users consistent and accountable.\n\nApp 3:\nName: FitFolio\nFeatures:\n1. Workout Tracker: Automatically track and record workouts using GPS and sensors in the user's phone or wearable devices.\n2. Virtual Trainer: Use AI technology to guide users through their workouts, providing real-time feedback and corrections.\n3. Nutrition Tracking: Allow users to log and track their daily food intake to ensure a balanced diet.\n4. Challenges and Rewards: Offer challenges and rewards to keep users engaged and motivated, such as completing a certain number of workouts in a month to unlock special features or discounts.",
  },
];

export async function POST(request) {
  try {
    // Create a new OpenAI object
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await openai.chat.completions.create({
      model: model,
      messages: messages,
      temperature: 0.8,
      max_tokens: 450,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // const stream = await OpenAIStream(response);
    // return new Response(stream);

    // Return a JSON response
    return NextResponse.json({
      gptResponse: response.choices[0].message.content,
    });
  } catch (error) {
    // Return an error response if there is an error
    console.error(error);
    return NextResponse.error(error);
  }
}
