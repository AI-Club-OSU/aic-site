import { defineConfig } from "vite-plus";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";

// Give generated HTML and initial hydration the same Oregon-time snapshot.
const eventDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Los_Angeles",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

export default defineConfig({
  define: { "import.meta.env.BUILD_DATE": JSON.stringify(eventDate) },
  plugins: [
    tanstackStart({
      prerender: { enabled: true, crawlLinks: false, failOnError: true },
    }),
    react(),
  ],
  lint: { ignorePatterns: ["src/routeTree.gen.ts"], options: { typeAware: true, typeCheck: true } },
  fmt: { ignorePatterns: ["src/routeTree.gen.ts"] },
});
