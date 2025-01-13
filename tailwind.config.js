/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scan': 'scan 2s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(-100px)' },
          '50%': { transform: 'translateY(100px)' },
        },
      },
      gridTemplateColumns: {
        '25': 'repeat(25, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
