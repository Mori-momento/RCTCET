/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      "3xl": [
        "4.875rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
    },
  },
  plugins: [],
};
