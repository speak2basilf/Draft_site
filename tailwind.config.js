/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'cliniglobal': {
          'clini': '#1BA7C9',
          'global': '#F67E3C',
        }
      }
    },
  },
  plugins: [],
};
