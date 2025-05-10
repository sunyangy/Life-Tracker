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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        "15": "repeat(15, minmax(0, 1fr))",
        "20": "repeat(20, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
