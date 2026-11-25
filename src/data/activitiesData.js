import { imageData } from "./imageData";

export const activitiesData = {
  sectionTitle: "Fitness Journey at Gymnax Club",
  sectionSubtitle: "Corefit Club is more than just a place to work out it's destination for health, wellness, and personal growth.",
  activities: [
    {
      id: 1,
      title: "Core Crusher",
      description: "Activities like running, cycling, or using cardio machines to improve heart health and endurance.",
      image: imageData.trainingPersonal,
      buttonText: "Learn More",
      link: "#classes"
    },
    {
      id: 2,
      title: "Lower Body Burn",
      description: "Build power and endurance in your legs with intense lower-body sessions that target glutes, quads.",
      image: imageData.trainingWeight,
      buttonText: "Learn More",
      link: "#classes"
    },
    {
      id: 3,
      title: "Functional Fitness",
      description: "Train your body for real-life move with functional exercises that boost strength, mobility.",
      image: imageData.trainingHiit,
      buttonText: "Learn More",
      link: "#classes"
    }
  ]
};
