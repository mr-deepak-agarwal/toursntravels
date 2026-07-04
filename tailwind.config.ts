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
          500: "#12729A",
          600: "#0F5C7D",
          700: "#0C4A66",
        },
        turquoise: {
          400: "#5FBFAC",
          500: "#2F9C89",
          600: "#227A6B",
        },
        sand: {
          100: "#FBF3E6",
          200: "#F2E1C4",
          300: "#E6C795",
        },
        sunset: {
          400: "#E2984F",
          500: "#C97A32",
          600: "#A65F23",
        },
        emerald: {
          500: "#1C7A52",
          600: "#155E40",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "sunset-gradient": "linear-gradient(120deg, #C97A32 0%, #E2984F 35%, #2F9C89 100%)",
        "ocean-gradient": "linear-gradient(160deg, #0B1F3A 0%, #0C4A66 55%, #227A6B 100%)",
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
