/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        text: ["Rubik"],
      },
      colors: {
        // sidebarColor: "#2f2cd8",
        // framesColor: "#ffffff",
        // bigWritingColor: "#1f2c73",
        // smallWritingColor: "#7184ad",
        // riseingPercentageColor: "#12a347",
        // fallingPercentageColor: "#dc2626",
      },
      fontSize: {
        pageTitle: "size-6",
      },
    },
  },
  plugins: [],
};
