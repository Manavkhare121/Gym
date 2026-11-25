import { imageData } from "./imageData";

export const heroData = {
  rating: {
    stars: 5,
    text: "Rated 5.0 on Google",
    googleIcon: imageData.googleIcon
  },
  headingParts: [
    "Your",
    "journey",
    "to",
    "fitness",
    "starts",
    "here"
  ],
  primaryButton: {
    label: "Get started",
    link: "#pricing"
  },
  backgroundImage: imageData.heroBg,
  // athleteImage: imageData.heroAthlete,
  contactInfo: {
    address: "27 division St New York Ny 10002, USA",
    email: "agency.framer8@gmail.com",
    phone: "+1 800 123 654 987"
  }
};
