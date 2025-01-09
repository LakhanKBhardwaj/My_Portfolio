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
        mediumTealGreen: 'rgb(120, 171, 149)',
        charcoal: 'rgba(41, 41, 41, 1)',
        whiteLowOpacity: 'rgba(255, 255, 255, 0.1)',
        white250: 'rgba(250, 250, 250, 1)'
      },
      boxShadow: {
        customNavTabGlow: '0 0 15px var(--custom-cyan), 0 0 30px var(--custom-cyan), 0 0 45px var(--custom-cyan)',
        headerBoxShadow : '0 0 24px 0 rgba(0, 0, 0, 0.08)'
      },
      borderColor: {
        homeBorderColor: 'rgba(255, 255, 255, 0.1)',
        skillsBoxBorder: 'rgba(143, 143, 143, 0.25)'
      },
      container :{
        padding: 'calc(1.5rem * 0.5);',
        center: true
      },
      animation: {
        slideTop: 'slideTop 1s ease forwards',
        slideRight: 'slideRight 1s ease forwards',
        slideLeft: 'slideLeft 1s ease forwards',
        slideBottom: 'slideBottom 1s ease forwards',
        border: 'border 4s linear infinite',
       
        explode: "explode 1s forwards",
        desplode: "desplode 1s forwards",
        hireExplode: "hireExplode 0.7s forwards",
        hireDesplode: "hireDesplode 0.7s forwards",
        rotatedBg: 'rotatedBg 10s infinite linear',

      },
      screens: {
        'header-visibility': { min: '992px' }, // Custom breakpoint for min-width: 991px
        'header-text': { max: '785px' }, // Custom breakpoint for max-width: 785pxpx
        'banner-content': {max: '1206px'},
        'Profile-img': {max: '1206px'}
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
          "100%": { width: "400px", height: "400px", marginLeft: "-200px", marginTop: "-200px", backgroundColor: "rgba(30, 41, 59, 1)" },
        },
        desplode: {
          "0%": { width: "400px", height: "400px", marginLeft: "-200px", marginTop: "-200px", backgroundColor: "rgba(30, 41, 59, 1)" },
          "100%": { width: "0px", height: "0px", marginLeft: "0px", marginTop: "0px", backgroundColor: "rgba(129, 80, 108,0.6)" },
        },
        hireExplode: {
          "0%": { width: "0px", height: "0px", marginLeft: "0px", marginTop: "0px", backgroundColor: "rgba(30, 41, 59, 0.8)" },
          "100%": { width: "400px", height: "400px", marginLeft: "-200px", marginTop: "-200px", backgroundColor: "rgba(30, 41, 59, 1)" },
        },
        hireDesplode: {
          "0%": { width: "400px", height: "400px", marginLeft: "-200px", marginTop: "-200px", backgroundColor: "rgba(30, 41, 59, 1)" },
          "100%": { width: "0px", height: "0px", marginLeft: "0px", marginTop: "0px", backgroundColor: "rgba(30, 41, 59, 0.8)" },
        },

        rotatedBg: {
          '0%': { transform: 'rotate(11.163deg)' },
          '50%': { transform: 'rotate(-11.163deg)' },
          '100%': { transform: 'rotate(11.163deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
