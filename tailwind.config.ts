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
        green: {
          neon: '#22c55e',
          bright: '#4ade80',
          dark: '#16a34a',
        },
        bg: {
          '0': '#000000',
          '1': '#020a04',
          '2': '#041008',
          '3': '#06180c',
          '4': '#0a2015',
        },
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        exo: ['var(--font-exo)'],
      },
    },
  },
  plugins: [],
}

export default config
