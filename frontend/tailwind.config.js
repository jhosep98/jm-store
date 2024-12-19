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
          divider: "#f6f7fd",
        },
      },
      dark: {
        colors: {
          divider: "#1e1e1e",
        },
      }
    },
  }),
];
