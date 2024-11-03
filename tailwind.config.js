/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2d314a",
        medium: "#424769",
        light: "#7077A1",
        tan: "#F6B17A",
        lightText: "#F5F5F5",
      },
    },
  },
  plugins: [],
}
