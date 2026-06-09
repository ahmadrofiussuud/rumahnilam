import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          "forest-green": "#2D4A1E",
          cream: "#F5EFE0",
          gold: "#B8963E",
          green: "#2D4A1E",
        },
        agronilam: {
          green: "#2D4A1E",
          cream: "#F5EFE0",
          gold: "#B8963E",
          "green-light": "#3c612b",
          "green-dark": "#203415",
          "gold-light": "#cfad4d",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "brand-sm": "0.25rem",
        "brand-md": "0.5rem",
        "brand-lg": "1rem",
        "brand-xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
