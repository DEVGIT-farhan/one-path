import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // GitHub Pages serves the site from the root of onepathfashion.com.
  base: "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
