/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0D10",
        primary: "#2576F0",
        secondary: "#1E498A",
        text: {
          primary: "#FFFFFF",
          secondary: "#8B95A9",
        },
        border: "#181C25",
      },
    },
  },
  plugins: [],
};
