/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        progress: {
          low: '#EF4444',      // czerwony <75%
          mid: '#F59E0B',      // pomarańczowy 75–99%
          high: '#D4AF37',     // złoty ≥100%
        },
      },
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
}


