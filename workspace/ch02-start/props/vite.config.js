import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
      {
        find: "@pages",
        replacement: "/src/pages",
      },
      {
        find: "@components",
        replacement: "/src/components",
      },
      {
        find: "@styles",
        replacement: "/src/styles",
      },
      {
        find: "@hooks",
        replacement: "/src/hooks",
      },
    ],
  },
});
