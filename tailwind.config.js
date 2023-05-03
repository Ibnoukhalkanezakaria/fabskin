/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryClr: "#0F4536",
        secondaryClr: "#FFFFFF",
        color3: "#F5F3EB",
        color4: "#010101",
      },
    },
  },
  plugins: [],
};
