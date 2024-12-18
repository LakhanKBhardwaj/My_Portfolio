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
        customOragne: 'var(--custom-orange-rgb)',
      },
      boxShadow: {
        customNavTabGlow: '0 0 15px var(--custom-cyan), 0 0 30px var(--custom-cyan), 0 0 45px var(--custom-cyan)',
      },
      animation: {
        slideTop: 'slideTop 1s ease forwards',
        slideRight: 'slideRight 1s ease forwards',
        slideLeft: 'slideLeft 1s ease forwards',
        slideBottom: 'slideBottom 1s ease forwards',
        border: 'border 4s linear infinite',
       
        explode: "explode 1s forwards",
        desplode: "desplode 1s forwards",

      },
      keyframes: {
        slideTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0px)' },
        },
        slideBottom: {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        border: {
          to: { '--border-angle': '360deg' },
        },
       
        explode: {
          "0%": { width: "0px", height: "0px", marginLeft: "0px", marginTop: "0px", backgroundColor: "rgba(42, 53, 80,0.2)" },
          "100%": { width: "400px", height: "400px", marginLeft: "-200px", marginTop: "-200px", backgroundColor: "rgba(250, 201, 21, 0.8)" },
        },
        desplode: {
          "0%": { width: "400px", height: "400px", marginLeft: "-200px", marginTop: "-200px", backgroundColor: "rgba(250, 201, 21,0.8)" },
          "100%": { width: "0px", height: "0px", marginLeft: "0px", marginTop: "0px", backgroundColor: "rgba(129, 80, 108,0.6)" },
        },
      },
      // animation: {
      //   spin: "spin 2s linear infinite",
      //   "spin-slow": "spin 3s linear infinite",
      //   "spin-fast": "spin 1.5s linear infinite",
      // },
      // keyframes: {
      //   spin: {
      //     "0%": { transform: "rotate(0deg)" },
      //     "100%": { transform: "rotate(360deg)" },
      //   },
      // },
    },
  },
  plugins: [],
}
export default config
