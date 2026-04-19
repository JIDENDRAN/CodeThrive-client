/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    screens: {
      xs: "360px",   // small mobiles
      sm: "400px",   // mobiles
      md: "768px",   // tablets
      lg: "1024px",  // laptops
      xl: "1280px",  // desktops
      "2xl": "1536px", // large screens
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
