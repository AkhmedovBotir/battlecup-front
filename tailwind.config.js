/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2s linear infinite',
        'bounce': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'walk': 'walk 10s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'firefly1': 'firefly 4s ease-in-out infinite',
        'firefly2': 'firefly 6s ease-in-out infinite',
        'firefly3': 'firefly 8s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' }
        },
        walk: {
          '0%': { transform: 'translateX(-100vw) rotate(12deg)' },
          '100%': { transform: 'translateX(100vw) rotate(12deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        firefly: {
          '0%': { 
            transform: 'translate(0, 0)',
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translate(100vw, -100vh)',
            opacity: '0'
          }
        }
      }
    },
  },
  plugins: [],
}
