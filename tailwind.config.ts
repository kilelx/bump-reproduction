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
        "primary-orange": "#f94f40",
        "beige":"#f6f0cd",
        "secondary-green": "#10664F",
        "tertiary-yellow": "#DEEF38"
      },
      fontFamily: {
        "clash-display": ['var(--font-clash-display)'],
      },
      boxShadow: {
        "btn": "3px 3px #f6f0cd"
      }
    },
  },
  plugins: [],
};
export default config;
