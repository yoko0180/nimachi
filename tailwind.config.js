/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["luxury", "retro"],
  },
}

