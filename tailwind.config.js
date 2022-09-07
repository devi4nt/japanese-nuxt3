module.exports = {
  content: [
    `./pages/**/*.{vue,js,ts,jsx,tsx}`,
    `./components/**/*.{vue,js,ts,jsx,tsx}`,
    `./layouts/**/*.{vue,js,ts,jsx,tsx}`,
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        'custom-gray': {
          DEFAULT: '#333333',
        },
        'custom-green': {
          DEFAULT: '#28a745',
        },
        'custom-red': {
          DEFAULT: '#dc3545',
        },
      },
    },
  },
};
