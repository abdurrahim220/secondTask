/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "#21201F",
        "primary-background": "#F5F4F2",
        "secondary-background":"#ffffff"
      },
    },
  },
  plugins: [],
};
