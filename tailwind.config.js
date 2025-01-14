/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "5prc": "5%",
      },
      colors: {
        sidebarColor: "#2f2cd8",
        framesColor: "#ffffff",
        big: "#1f2c73",
        small: "#7184ad",
        riseingPercentageColor: "#12a347",
        fallingPercentageColor: "#dc2626",
        bkGd: "#F6F9FC",
      },
      fontSize: {
        pageTitle: "text-2xl", //h3, 24px
        framesTitle: "text-lg", //h4, 18px
        categTitle: "text-base", //h5, 16px
        weelsDashboardTitle: "text-sm", //h6, 14px
        textGraySmall: "text-sm", //14px
      },
    },
  },
  plugins: [],
};
