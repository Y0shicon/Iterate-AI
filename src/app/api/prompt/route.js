// Import necessary libraries
const OpenAI = require("openai");

// Next Response imported from the next/server module
import { NextResponse } from "next/server";

const model = "gpt-3.5-turbo-0125";
let messages = [
  {
    role: "system",
    content:
      'You will be provided with an app description. Your job is to come up with 3 app ideas each of which consist of a name and a list of 3 to 4 features that the app could have.\nProve the answer in json format only following the schema :\n[{"name" : "<Name of the app>",\n"features" : [\n{"title" : "<Title of the feature>",\n"desc" : "<Description of the feature>"},]},\n{"name" : "<Name of the app>",\n"features" : [\n{"title" : "<Title of the feature>",\n"desc" : "<Description of the feature>"},]},\n{"name" : "<Name of the app>",\n"features" : [\n{"title" : "<Title of the feature>",\n"desc" : "<Description of the feature>"},]}\n]',
  },
  {
    role: "user",
    content: "A gym app which tracks your workouts",
  },
  {
    role: "assistant",
    content:
      '[{"name": "FitTrack",\n   "features": [\n      {"title": "Workout Tracker",\n       "desc": "Allows users to track and log their workouts, including exercises, sets, reps, and weights."},\n      {"title": "Progress Monitoring",\n       "desc": "Provides visual and statistical analysis of progress over time, including graphs and charts."},\n      {"title": "Customized Workouts",\n       "desc": "Offers pre-made workout plans or the ability to create personalized workout routines."},\n      {"title": "Reminders and Notifications",\n       "desc": "Sends reminders and notifications to motivate users to stick to their workout schedule."}\n      ]},\n      \n   {"name": "FitLog",\n   "features": [\n      {"title": "Workout Diary",\n       "desc": "Allows users to keep a detailed diary of their workouts, including exercises, duration, and intensity."},\n      {"title": "Goal Setting",\n       "desc": "Enables users to set fitness goals and track their progress towards achieving them."},\n      {"title": "Community Support",\n       "desc": "Connects users with a community of fitness enthusiasts for support, motivation, and sharing workout tips."},\n      {"title": "Workout History",\n       "desc": "Keeps a record of past workouts for users to review and compare their performance over time."}\n      ]},\n      \n   {"name": "FitBuddy",\n   "features": [\n      {"title": "Workout Partner Finder",\n       "desc": "Helps users find workout partners based on location, fitness goals, and workout preferences."},\n      {"title": "Shared Workouts",\n       "desc": "Allows users to create and share workout routines with their workout buddies."},\n      {"title": "Motivational Challenges",\n       "desc": "Organizes fitness challenges and competitions between workout buddies to help motivate each other."},\n      {"title": "Messaging and Chat",\n       "desc": "Enables users to communicate and coordinate workouts with their workout partners through in-app messaging."}\n      ]}\n]',
  },
];

export async function POST(request) {
  const { prompt } = await request.json();
  messages = [
    ...messages,
    {
      role: "user",
      content: prompt + "app idea",
    },
  ];
  try {
    // Create a new OpenAI object
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await openai.chat.completions.create({
      model: model,
      response_format: { type: "json_object" },
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
