import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "selector",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "code": ['var(--font-fira-code)'],
      "sans": ['var(--font-inter)'],
    },
    extend: {},
  },
  plugins: [],
}
export default config
