import { defineConfig } from "vite-plus";

// Preview only the deployable files, without a TanStack rendering server.
export default defineConfig({
  appType: "mpa",
  build: { outDir: "dist/client" },
  preview: {
    // Portless 0.15 injects Vite Plus flags for dev; preview reads its environment.
    port: Number(process.env.PORT) || 4173,
    host: process.env.HOST || "127.0.0.1",
    strictPort: true,
  },
});
