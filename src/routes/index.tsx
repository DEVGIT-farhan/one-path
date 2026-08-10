import { createFileRoute } from "@tanstack/react-router";
import CataloguePage from "@/components/CataloguePage";

const title = "One Path Fashion — Chiffon Shawl Catalogue in 10 Shades";
const description =
  "Modesty is the highest elegance. Explore the One Path Fashion chiffon shawl in ten considered shades, from Royal Berry Pink to Frosted Lavender Blue.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CataloguePage,
});
