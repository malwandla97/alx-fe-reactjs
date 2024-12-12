// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',  // Add this line to make sure Tailwind checks React components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  