import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: process.env["GITHUB_ACTIONS"] === "true" ? "/one-path/" : "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
