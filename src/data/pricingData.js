export const pricingHeader = {
  headingParts: ["Join", "gymnax", "select", "your", "membership"]
};

export const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    title: "one day pass",
    price: 15,
    currency: "$",
    duration: "Per Day",
    isPopular: false,
    features: [
      "24 hours access",
      "Unlimited classses",
      "Flexibale classes",
      "BMi Tracker",
      "Personal trainer"
    ],
    buttonText: "Choose Package",
    buttonLink: "#contact"
  },
  {
    id: 2,
    name: "Standard Plan",
    title: "Monthly Pass",
    price: 49,
    currency: "$",
    duration: "Per month",
    isPopular: true,
    features: [
      "24 hours access",
      "Unlimited classses",
      "Flexibale classes",
      "BMi Tracker",
      "Personal trainer"
    ],
    buttonText: "Choose Package",
    buttonLink: "#contact"
  },
  {
    id: 3,
    name: "Premium Plan",
    title: "Yearly Pass",
    price: 199,
    currency: "$",
    duration: "Per month",
    isPopular: false,
    features: [
      "24 hours access",
      "Unlimited classses",
      "Flexibale classes",
      "BMi Tracker",
      "Personal trainer"
    ],
    buttonText: "Choose Package",
    buttonLink: "#contact"
  }
];
