/** @type {import('tailwindcss').Config} */
module.exports = {
  // O "*" significa "tudo dentro de src", e "{...}" cobre os formatos comuns
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "Montenegrin": ["MontenegrinGothicOne-Regular"],
        "HiburMono": ["HiburMono-Regular"],
      }
    },
  },
  plugins: [],
};