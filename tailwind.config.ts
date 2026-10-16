import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#070A12",
        midnight: "#0B1224",
        panel: "#0E172E",
        cyanSignal: "#69E1FF",
        amberSignal: "#FFBF69",
        violetNeural: "#9D7BFF",
        emeraldTelemetry: "#34D399",
        softWhite: "#F2F5FA",
        slateSecondary: "#94A3B8",
        slateMuted: "#64748B"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"]
      },
      backgroundImage: {
        "observatory-radial":
          "radial-gradient(circle at 50% 0%, rgba(105, 225, 255, 0.12), rgba(11, 18, 36, 0.4) 45%, rgba(7, 10, 18, 1) 80%)"
      }
    }
  },
  plugins: []
};

export default config;
