/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-blue': '#4B6CB7', // Approximate blue from the sky
        'hero-text': '#E6E6FA', // Light text color for contrast
        'btn-blue': '#4A90E2', // Button color
      },
      backgroundImage: {
        'hero-bg': "url('/path-to-your-sky-image.jpg')", // Replace with your image path
      },
    },
  },
  plugins: [],
};