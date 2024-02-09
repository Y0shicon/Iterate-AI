"use client";

import { proxy } from "valtio";

const state = proxy({
  images: [],
  response: "",
  profile: {
    name: "John Doe",
    image: "/static/profile.webp",
  },
  prompt: {
    text: "Write a story about a dragon",
  },
});

export default state;
