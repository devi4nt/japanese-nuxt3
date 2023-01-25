/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        'custom-gray': {
          DEFAULT: '#333333'
        },
        'custom-green': {
          DEFAULT: '#28a745'
        },
        'custom-red': {
          DEFAULT: '#dc3545'
        }
      }
    }
  },
  plugins: []
}
