import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17140f",
        charcoal: "#4b443e",
        charcoal2: "#3a342f",
        paper: "#f3ece1",
        paper2: "#e9e0d0",
        brick: "#e91e25",
        brickdk: "#7c2166",
        sand: "#cabfa9",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      maxWidth: { site: "1120px" },
    },
  },
} satisfies Config;
