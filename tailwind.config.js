/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'hillman-gold': '#F2CB05',    // interactive gold
        'hillman-maroon': '#7B1E24',  // accent maroon
        'background': {
          DEFAULT: '#FAFAFA',     // warm off-white
          card: '#FFFFFF',        // pure white for cards
        },
        'surface': {
          DEFAULT: '#FFFFFF',     // white surface
          tinted: 'rgba(123, 30, 36, 0.05)',   // very light maroon tint
        },
        'text': {
          DEFAULT: '#212121',   // dark text
          secondary: '#333333', // slightly lighter text
          muted: 'rgba(33, 33, 33, 0.7)',
        },
        'divider': {
          DEFAULT: '#E0E0E0', // light gray
          accent: 'rgba(123, 30, 36, 0.1)',   // subtle maroon
        },
      },
    },
  },
  plugins: [],
}; 