module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "casscon-blue": "#5AA1CF",
        "casscon-white": "#F3F3F3"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
