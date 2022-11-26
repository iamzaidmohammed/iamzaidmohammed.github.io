/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        NeonGreen: "hsl(150, 100%, 66%)",
        DarkMode: "#003049",
        NavColor: "#002039",
      },
      backgroundImage: {
        heroBg: "url('/src/images/circles.svg')",
      },
    },
  },
  plugins: [],
};
