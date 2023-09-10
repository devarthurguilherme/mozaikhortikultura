/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize: {
        "myH1" : "52px",
        "myH3" : "20px"
      },
      colors: {
        "MyOrange" : "#fc9240",
        "MyGreen" : "#31ab6b",
        "BtnColor" : "#fc9d25",
        "BntHoverColor" : "FA9311",
        "HeaderHoverColor" : "1BAE70",
      },
      lineHeight: {
        "myLineHeightTablet" : "50px",
        "myLineHeightDesktop" : "55px"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

