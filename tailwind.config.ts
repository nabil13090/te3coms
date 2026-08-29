import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#1E3A5F',
          light: '#E8EDF4',
          dark: '#152A45',
          bright: '#2563EB',
        },
        brand: {
          sky: '#0EA5E9',
          cobalt: '#2563EB',
          amber: '#F59E0B',
          coral: '#F97316',
          violet: '#7C3AED',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
}

export default config
