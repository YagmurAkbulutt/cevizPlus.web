/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E7D32', // Deep green - representing nature and growth
        secondary: '#4CAF50', // Medium green - representing healthy plants
        accent: '#66BB6A', // Light green - representing fresh leaves
        tertiary: '#8BC34A', // Bright green - representing vitality
        brown: '#5D4037', // Walnut brown - representing walnut wood
        background: '#F8FDF8', // Very light green background
        foreground: '#2D3E2D', // Dark green text for readability
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};