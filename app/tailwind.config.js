/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#E1CEF2",
        footerMidnight: "#213239",
        gridPink: "#FFE2F7",
        gridBlue: "#DDEEEE",
        gridGreen: "#78BFBC",
        gridYellow: "#FFF4B7",
        gridMidnight: "#213239",
        gridGrey: "#ECECEC",
      },
    },
  },
  plugins: [],
};
