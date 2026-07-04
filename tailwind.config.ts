import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061422",
          900: "#0B1F3A",
          800: "#122A4A",
          700: "#1B3A5F",
        },
        ocean: {
          500: "#0E88B5",
          600: "#0C6E93",
          700: "#0A5876",
        },
        turquoise: {
          400: "#3FD8C7",
          500: "#1FC2B0",
          600: "#17A395",
        },
        sand: {
          100: "#FBF4EA",
          200: "#F5E6D3",
          300: "#EAD5B6",
        },
        sunset: {
          400: "#F5A65B",
          500: "#EE8A3C",
          600: "#E1712A",
        },
        emerald: {
          500: "#0F9D6E",
          600: "#0C7F59",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "sunset-gradient": "linear-gradient(120deg, #EE8A3C 0%, #F5A65B 35%, #1FC2B0 100%)",
        "ocean-gradient": "linear-gradient(160deg, #0B1F3A 0%, #0A5876 55%, #17A395 100%)",
        "glass-sheen": "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)",
      },
      boxShadow: {
        premium: "0 25px 60px -15px rgba(11,31,58,0.35)",
        glow: "0 0 40px rgba(31,194,176,0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
