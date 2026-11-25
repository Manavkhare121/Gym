import { imageData } from "./imageData";

export const navbarData = {
  logo: {
    src: imageData.logo,
    alt: "FITZONE",
    link: "#hero"
  },
  links: [
    { label: "Home", path: "#hero" },
    { label: "About", path: "#about" },
    { label: "Classes", path: "#classes" },
    { label: "Pricing", path: "#pricing" },
    { label: "Blog", path: "#blog" },
    { label: "Contact", path: "#contact" }
  ],
  button: {
    label: "Get started",
    path: "#pricing"
  }
};
