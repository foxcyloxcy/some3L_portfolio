module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#1B0100',
        cream: '#FEFFF1',
        amber: '#FEE09A',
        copper: '#8A5438',
        'brown-700': '#603A2D',
        secondary: '#FEE09A',
        tertiary: '#603A2D',
        'black-100': '#301710',
        'black-200': '#1B0100',
        'white-100': '#FEFFF1',
      },
      boxShadow: {
        card: '0 30px 90px -25px rgba(27, 1, 0, 0.6)',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  plugins: [],
};
