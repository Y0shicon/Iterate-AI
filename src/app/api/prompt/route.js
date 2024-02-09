// Import necessary libraries
const OpenAI = require("openai");

// Next Response imported from the next/server module
import { NextResponse } from "next/server";

const model = "gpt-3.5-turbo-0125";
let messages = [
  {
    role: "system",
    content:
      'You will be provided with an app description. Your job is to come up with 3 app ideas each of which consist of a name and a list of 3 to 4 features that the app could have.\nProve the answer in json format only following the schema :\n{data : \n[{"name" : "<Name of the app>",\n"features" : [\n{"title" : "<Title of the feature>",\n"desc" : "<Description of the feature>"},]},\n{"name" : "<Name of the app>",\n"features" : [\n{"title" : "<Title of the feature>",\n"desc" : "<Description of the feature>"},]},\n{"name" : "<Name of the app>",\n"features" : [\n{"title" : "<Title of the feature>",\n"desc" : "<Description of the feature>"},]}\n]\n}',
  },
  {
    role: "user",
    content: "A gym app which tracks your workouts",
  },
  {
    role: "assistant",
    content:
      '{ "data": [\n  {\n    "name": "FitTracker",\n    "features": [\n      {\n        "title": "Workout Logging",\n        "desc": "Allows users to log their workouts, including exercise type, sets, reps, and weights."\n      },\n      {\n        "title": "Progress Tracking",\n        "desc": "Tracks users\' progress over time, showing improvements in strength, endurance, and overall fitness."\n      },\n      {\n        "title": "Exercise Library",\n        "desc": "Provides a comprehensive library of exercises with detailed instructions and videos for proper form and technique."\n      }\n    ]\n  },\n  {\n    "name": "GymGuide",\n    "features": [\n      {\n        "title": "Custom Workout Plans",\n        "desc": "Creates personalized workout plans based on users\' goals, fitness level, and available equipment."\n      },\n      {\n        "title": "Workout Reminders",\n        "desc": "Sends notifications to remind users of their scheduled workouts, helping them stay consistent and motivated."\n      },\n      {\n        "title": "Social Network",\n        "desc": "Connects users with other gym-goers, allowing them to share their progress, tips, and encourage each other."\n      }\n    ]\n  },\n  {\n    "name": "FitLog",\n    "features": [\n      {\n        "title": "Workout History",\n        "desc": "Keeps a detailed history of users\' workouts, allowing them to easily track their past exercises and progress."\n      },\n      {\n        "title": "Workout Plans",\n        "desc": "Offers pre-designed workout plans for different goals such as weight loss, muscle gain, or overall fitness improvement."\n      },\n      {\n        "title": "Workout Statistics",\n        "desc": "Generates statistics and charts based on users\' workout data, giving them insights into their performance and areas for improvement."\n      }\n    ]\n   }\n  ]\n}',
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
