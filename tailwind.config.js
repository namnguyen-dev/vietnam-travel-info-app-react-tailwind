module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // animation keyframes
      keyframes: {
        // fade-in-down
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        // scale-up-top-right
        'scale-up-top-right': {
          '0%': { transform: 'scale(.5)', 'transform-origin': 'top right' },
          '100%': { transform: 'scale(1)', 'transform-origin': 'top right' },
        },

        // scale-up-vertical-top
        'scale-up-vertical-top': {
          '0%': { transform: 'scaleY(.4)', 'transform-origin': 'center top' },
          '100%': { transform: 'scaleY(1)', 'transform-origin': 'center top' },
        },

        // scale-up-top
        'scale-up-top': {
          '0%': { transform: 'scale(.5)', 'transform-origin': 'center top' },
          '100%': { transform: 'scale(1)', 'transform-origin': 'center top' },
        },
      },

      animation: {
        'fade-in-down': 'fade-in-down 0.7s ease-in',
        'scale-up-top-right': 'scale-up-top-right 0.5s ease-in',
        'scale-up-vertical-top': 'scale-up-vertical-top 0.6s linear',
        'scale-up-top': 'scale-up-top 0.6s ease-in',
      },

      // font-family
      fontFamily: {
        expletus: ['Expletus Sans', 'cursive'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
