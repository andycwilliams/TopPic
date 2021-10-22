const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'photo-collage': "url('https://images.unsplash.com/photo-1533158307587-828f0a76ef46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80')"
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      transform: ['group-hover']
    },
  },
  plugins: [],
};