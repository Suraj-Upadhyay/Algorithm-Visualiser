import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Algorithm-Visualiser/",
  plugins: [react()],
  server: {
    port: 3001
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
});
