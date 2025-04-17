module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          200: "#b2bbc9",
          900: "#333333",
          "900_cc": "#333333cc",
          "900_19": "#33333319",
          "900_99": "#33333399",
          "900_66": "#33333366",
          "900_33": "#33333333",
          "900_7f": "#3333337f",
          "900_7c": "#3333337c",
        },
        orange: { 50: "#fef3e6", 600: "#f98b02" },
        white: { A700: "#ffffff", A700_19: "#ffffff19", A700_33: "#ffffff33", A700_4c: "#ffffff4c" },
        black: { "900_63": "#00000063" },
        gray: { 200: "#efefef", 600: "#828282" },
        yellow: { 800: "#e1af33" },
      },
      boxShadow: { xs: "0px 4px 12px 0px #3751ff" },
      fontFamily: { opensans: "Open Sans", amita: "Amita", poppins: "Poppins" },
      opacity: { 0.7: 0.7 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
