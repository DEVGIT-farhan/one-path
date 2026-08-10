import imgDustyMauve from "@/assets/hijab-dusty-mauve-9a797b.png";
import imgDustyPlumMauve from "@/assets/hijab-dusty-plum-mauve-8c4a6b.png";
import imgCaramelNude from "@/assets/hijab-caramel-nude-b08966.png";
import imgMochaBrown from "@/assets/hijab-mocha-brown-6d3b07.png";
import imgRoyalBerryPink from "@/assets/hijab-royal-berry-pink-89023e.png";
import imgNavyBlue from "@/assets/hijab-navy-blue-152238.png";
import imgDustyRose from "@/assets/hijab-dusty-rose-dca1a1.png";
import imgSandBeige from "@/assets/hijab-sand-beige-e5d1b8.png";
import imgFrostedLavenderBlue from "@/assets/hijab-frosted-lavender-blue-b7c2ff.png";
import imgBabyBlossomPink from "@/assets/hijab-baby-blossom-pink-fec9d4.png";

export type Shawl = {
  name: string;
  hex: string;
  note: string;
  image: string;
};

export const CATEGORY = "Chiffon Shawl";
export const PRICE = 400;

export const shawls: Shawl[] = [
  {
    name: "Dusty Mauve",
    hex: "#9A797B",
    note: "Softened rosewood, quietly grounded.",
    image: imgDustyMauve,
  },
  {
    name: "Dusty Plum Mauve",
    hex: "#8C4A6B",
    note: "Deep plum with a velvet finish.",
    image: imgDustyPlumMauve,
  },
  {
    name: "Caramel Nude",
    hex: "#B08966",
    note: "Warm caramel for golden hours.",
    image: imgCaramelNude,
  },
  {
    name: "Mocha Brown",
    hex: "#6D3B07",
    note: "Rich espresso, endlessly wearable.",
    image: imgMochaBrown,
  },
  {
    name: "Royal Berry Pink",
    hex: "#89023E",
    note: "Jewel berry for evening occasions.",
    image: imgRoyalBerryPink,
  },
  {
    name: "Navy Blue",
    hex: "#152238",
    note: "Midnight navy, the modest classic.",
    image: imgNavyBlue,
  },
  {
    name: "Dusty Rose",
    hex: "#DCA1A1",
    note: "Muted rose that flatters every tone.",
    image: imgDustyRose,
  },
  {
    name: "Sand Beige",
    hex: "#E5D1B8",
    note: "Desert sand for daily ease.",
    image: imgSandBeige,
  },
  {
    name: "Frosted Lavender Blue",
    hex: "#B7C2FF",
    note: "Cool lavender haze, airy and light.",
    image: imgFrostedLavenderBlue,
  },
  {
    name: "Baby Blossom Pink",
    hex: "#FEC9D4",
    note: "Blossom pink, tender and fresh.",
    image: imgBabyBlossomPink,
  },
];
