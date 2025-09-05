/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // Indigo (modern SaaS primary)
          light: '#6366F1',
          dark: '#4338CA',
        },
        secondary: {
          DEFAULT: '#F59E0B', // Amber (for highlights / CTA accents)
          light: '#FBBF24',
          dark: '#B45309',
        },
        neutral: {
          DEFAULT: '#6B7280', // Gray for body text
          light: '#9CA3AF',
          dark: '#374151',
        },
        background: '#F9FAFB', // Very light gray background
        surface: '#FFFFFF', // White cards
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        btn: '0 4px 6px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
