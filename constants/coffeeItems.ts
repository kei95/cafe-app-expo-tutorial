import { ImageSourcePropType } from "react-native";

export type Coffee = {
  id: number;
  name: string;
  price: string;
  volume: string;
  stars: string;
  image: ImageSourcePropType;
  desc: string;
};
export const COFFEE_ITEMS: Coffee[] = [
  {
    id: 1,
    name: "Black Coffee",
    price: "25.50",
    volume: "116 ml",
    stars: "4.6",
    image: require("../assets/images/coffee1.png"),
    desc: "The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "15.50",
    volume: "110 ml",
    stars: "4.3",
    image: require("../assets/images/coffee2.png"),
    desc: "The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.",
  },
  {
    id: 3,
    name: "Espresso",
    price: "30.00",
    volume: "100 ml",
    stars: "4.0",
    image: require("../assets/images/coffee3.png"),
    desc: "The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.",
  },
  {
    id: 4,
    name: "Latte",
    price: "10.30",
    volume: "80 ml",
    stars: "3.5",
    image: require("../assets/images/coffee4.png"),
    desc: "The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.",
  },
  {
    id: 5,
    name: "Mocha",
    price: "23.10",
    volume: "120 ml",
    stars: "4.7",
    image: require("../assets/images/coffee5.png"),
    desc: "The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.",
  },
];
