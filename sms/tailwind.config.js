/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'brand-deep': '#1b0440',
        'accent-teal': '#00efd1',
        'accent-deepblue': '#2a1bd9',
        'soft-pink': '#feeef0',
        'heading-white': '#f8f3f8'
      },
      borderRadius: {
        'lg-xl': '18px'
      }
    }
  },
  plugins: []
}
