import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #903AFF, #FE34B9)',
      },
      colors: {
        primary: 'var(--primary-color)',

        purpleBlue: 'var(--purple-blue)',
        shadePurple: 'var(--shade-purple)',
        shadePink: 'var(--shade-pink)',
      },
      screens: {
        'xs': '475px',
        'extraSizeMd': '900px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
export default config
