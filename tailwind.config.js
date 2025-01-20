/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 0.8s linear infinite',
      },
    },
  },
  plugins: [],
}