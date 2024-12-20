import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",

  // nextui
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];

export const darkMode = "class";

export const theme = {
  extend: {
    keyframes: {
      "translate-y-loop": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(100%)" },
      },
    },
    animation: {
      "translate-y-loop": "translate-y-loop 2s infinite",
    },
  },
};

export const plugins = [
  nextui({
    themes: {
      light: {
        colors: {
          divider: "#f4f7fd",
          background: "#ffffff",
          content1: "#f6f7fd",
          foreground: "#353E6C",
        },
      },
      dark: {
        colors: {
          divider: "#2C2C2E",
          background: "#0D0F1F",
          content1: "#26262E",
          foreground: "#fff",
        },
      },
    },
  }),
];
