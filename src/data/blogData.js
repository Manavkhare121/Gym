import { imageData } from "./imageData";

export const blogData = {
  sectionTitleParts: ["Fitness", "Knowledge", "Hub"],
  buttonText: "Read All",
  articles: [
    {
      id: 1,
      title: "BUILDING A SUSTAINABLE FITNESS ROUTINE YOU CAN MAINTAIN",
      description: "The best fitness routine is one you can maintain long term. Extreme plans often lead to burnout, while sustainable routines create lasting results.",
      image: imageData.blogRoutine,
      link: "#blog"
    },
    {
      id: 2,
      title: "HOW TO STAY MOTIVATED WHEN FITNESS PROGRESS SLOWS DOWN",
      description: "Plateaus are a natural part of any fitness journey. Progress is rarely linear, and motivation often fluctuates. Understanding this helps you stay consistent during challenging periods.",
      image: imageData.blogMotivation,
      link: "#blog"
    },
    {
      id: 3,
      title: "THE ROLE OF CORE STRENGTH IN TOTAL BODY PERFORMANCE",
      description: "The core is the foundation of movement. A strong core improves posture, balance, and power transfer across the body. Core strength goes far beyond visible abs.",
      image: imageData.blogCore,
      link: "#blog"
    }
  ]
};
