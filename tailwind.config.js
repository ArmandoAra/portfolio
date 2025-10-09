/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jelly: {
          "0%, 100%": { transform: "scaleX(1)" },
          "25%": { transform: "scaleX(1.1)" },
          "50%": { transform: "scaleX(0.9)" },
          "75%": { transform: "scaleX(1.05)" },
        },
      },
      animation: {
        jelly: "jelly 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
      },
    },
  },
  plugins: [],
};
