/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3', 
        secondary: '#ff9f00', 
        background: '#f4f4f9', 
        text: '#333333',
      },
    },
  },
  plugins: [],
};

