/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f6',
          100: '#fce7ef',
          200: '#fad0e0',
          300: '#f5a8c5',
          400: '#ee72a0',
          500: '#e4437b',
          600: '#d1205a',
          700: '#b41548',
          800: '#9C2955',
          900: '#7c1f43',
          DEFAULT: '#9C2955',
        },
        cream: {
          50: '#FFFDFB',
          100: '#FCF8F1',
          200: '#F5EDE0',
          DEFAULT: '#FCF8F1',
        },
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
