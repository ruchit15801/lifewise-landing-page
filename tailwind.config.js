/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D5DF6",
        accent: "#22C55E",
        backgroundDark: "#0F172A",
        backgroundLight: "#F8FAFC"
      },
      boxShadow: {
        "soft-glow":
          "0 18px 45px rgba(15, 23, 42, 0.55), 0 0 0 1px rgba(148, 163, 184, 0.2)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      },
      backgroundImage: {
        "radial-faded":
          "radial-gradient(circle at top, rgba(109,93,246,0.3), transparent 60%), radial-gradient(circle at bottom, rgba(34,197,94,0.18), transparent 55%)"
      }
    }
  },
  plugins: []
};

