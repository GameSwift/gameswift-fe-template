import { type Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontWeight: {
      // only use 300 and 500 for Poppins(secondary) and 500 for Apex Mk3(main) (see src/styles/fonts.ts)
      normal: '300',
      bold: '500'
    },
    extend: {
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '5rem' // 80px
      },
      screens: {
        xs: '480px',
        xxs: '360px'
      },
      colors: {
        primary: {
          DEFAULT: '#FDC244',
          400: '#FCDA7C',
          500: '#FDC244',
          600: '#E3A736'
        },
        disabled: {
          DEFAULT: '#917539',
          500: '#917539'
        },
        background: {
          DEFAULT: '#1F2128',
          500: '#1F2128',
          400: '#16171C'
        },
        'background-secondary': {
          DEFAULT: '#26282E',
          500: '#26282E'
        },
        success: {
          DEFAULT: '#5EE37B',
          500: '#5EE37B'
        },
        error: {
          DEFAULT: '#F94C41',
          500: '#F94C41'
        },
        gray: {
          DEFAULT: '#8F9093',
          300: '#D2D3D4',
          400: '#B1B3B5',
          500: '#8F9093'
        }
      },
      fontFamily: {
        main: 'var(--font-main)',
        secondary: 'var(--font-secondary)'
      }
    }
  },
  plugins: [animatePlugin]
} satisfies Config

export default config
