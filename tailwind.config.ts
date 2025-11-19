import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0091ff",
          yellow: "#ffe94d",
          green: "#40ff9c",
          blue: "#0066ff",
          dark: "#151b2b"
        }
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #ffe94d 0%, #40ff9c 40%, #0091ff 100%)"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },
  plugins: [],
};

export default config;
