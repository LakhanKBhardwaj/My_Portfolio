import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        verdana: ['Verdana', 'sans-serif'],
      },
      colors: {
        customCyan: 'var(--custom-cyan)',
      },
      boxShadow: {
        customNavTabGlow: '0 0 15px var(--custom-cyan), 0 0 30px var(--custom-cyan), 0 0 45px var(--custom-cyan)',
      },
      animation: {
        slideTop: 'slideTop 1s ease forwards',
        slideRight: 'slideRight 1s ease forwards',
        slideLeft: 'slideLeft 1s ease forwards',
        slideBottom: 'slideBottom 1s ease forwards',
      },
      keyframes: {
        slideTop: {
          '0%': { transform: 'translateY(-100%)'},
          '100%': { transform: 'translateY(0)'},
        },
        slideRight: {
          '0%': {transform: 'translateX(100px)'},
          '100%': {transform: 'translateX(0px)'},
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0px)'},
        },
        slideBottom: {
          '0%': {transform: 'translateY(100px)'},
          '100%': {transform: 'translateY(0px)'},
        },
      },
    },
  },
  plugins: [],
}
export default config
