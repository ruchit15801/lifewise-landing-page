/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D5DF6",
        accent: "#22C55E",
        darkBg: "#1E293B",
        darkSurface: "#334155",
        lightBg: "#F8FAFC"
      },
      boxShadow: {
        premium:
          "0 1px 0 rgba(255,255,255,0.25) inset, 0 10px 30px rgba(2,6,23,0.12)",
        lift: "0 20px 60px rgba(2,6,23,0.18)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"]
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        "shimmer-bg": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 10s ease-in-out infinite",
        "shimmer-bg": "shimmer-bg 12s ease-in-out infinite alternate"
      }
    }
  },
  plugins: []
};

