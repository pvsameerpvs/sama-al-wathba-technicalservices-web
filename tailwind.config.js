/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1e40af",
        "brand-yellow": "#fbbf24",
        "brand-green": "#10b981",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(to right, #fbbf24, #10b981, #1e40af)",
      },
    },
  },
  plugins: [],
};
