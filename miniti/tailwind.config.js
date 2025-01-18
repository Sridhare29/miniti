/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out infinite 1.5s',
      },
      boxShadow: {
        'xl': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      }
    },
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '1080px'},
      'md-lg': {'max': '991px'},
      'md': {'max': '768px'},
      'sm': {'max': '576px'},
      'xs': {'max': '480px'},
      '2xs': {'max': '340px'},
    },
  },
  plugins: [],
}