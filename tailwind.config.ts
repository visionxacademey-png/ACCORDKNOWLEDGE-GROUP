import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#1e3a5f",
          850: "#142944",
          900: "#0b1a2e",
          950: "#060f1b",
        },
        gold: {
          50: "#fdfbf5",
          100: "#fbf6e8",
          200: "#f5e8c6",
          300: "#ecd69d",
          400: "#dfbd68",
          500: "#cca139",
          600: "#b58728",
          700: "#94691f",
          800: "#79541f",
          900: "#65451e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 4px 20px -2px rgba(11, 26, 46, 0.06), 0 2px 6px -1px rgba(11, 26, 46, 0.03)",
        "card-hover": "0 12px 30px -4px rgba(11, 26, 46, 0.12), 0 4px 10px -2px rgba(11, 26, 46, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;

