/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // disable dark mode completely
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // your source files
    "./node_modules/daisyui/dist/**/*.js", // include DaisyUI components
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // only allow light theme
    darkTheme: "light", // optional, just to be safe
  },
};
