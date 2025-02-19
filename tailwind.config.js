/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "5prc": "5%",
        xs: "370px",
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
      // fontSize: {
      //   pageTitle: "1.5rem", //h3, 24px
      //   framesTitle: "1.125rem", //h4, 18px
      //   categTitle: "1rem", //h5, 16px
      //   weelsDashboardTitle: "0.875rem", //h6, 14px
      //   textGraySmallSmall: "0.875rem", //14px
      // },
    },
  },
  plugins: [require("daisyui")],
};
