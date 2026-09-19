/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070f',
          card: '#0c1021',
          border: '#1e293b',
          cyan: '#00f0ff',
          purple: '#7000ff',
          green: '#00ff66'
        }
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle, rgba(0, 240, 255, 0.05) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
