import { Config } from 'tailwindcss'

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
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '2.25rem', // 36px
      '4xl': '3rem', // 48px
      '5xl': '5rem' // 80px
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FDC244',
          50: '#FFFDF5',
          100: '#FFFCED',
          200: '#FFF6D1',
          300: '#FFEFB5',
          400: '#FCDA7C',
          500: '#FDC244',
          600: '#E3A736',
          700: '#BD8026',
          800: '#F9FAFB',
          900: '#F9FAFB'
        },
        background: {
          DEFAULT: '#1F2128',
          50: '#F2F4F5',
          100: '#E6E9EB',
          200: '#BDC4C9',
          300: '#99A0A8',
          400: '#585D69',
          500: '#1F2128',
          600: '#191B24',
          700: '#12141F',
          800: '#0C0E1A',
          900: '#304f73'
        },
        success: {
          DEFAULT: '#25fa61',
          50: '#F5FCF9',
          100: '#EDFCF6',
          200: '#D2F7E5',
          300: '#BAF5D4',
          400: '#8AEBAA',
          500: '#5EE37B',
          600: '#4BCC65',
          700: '#35AB4B',
          800: '#228733',
          900: '#12661F'
        },
        error: {
          DEFAULT: '#F94C41',
          50: '#FFFAF5',
          100: '#FFF6ED',
          200: '#FFE4D1',
          300: '#FCCBB1',
          400: '#FC9379',
          500: '#F94C41',
          600: '#E03F34',
          700: '#BA2D23',
          800: '#961E18',
          900: '#70120D'
        },
        gray: {
          DEFAULT: '#8F9093',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E3E4E6',
          300: '#D2D3D4',
          400: '#B1B3B5',
          500: '#8F9093',
          600: '#737785',
          700: '#50566E',
          800: '#343B59',
          900: '#1D2442'
        }
      },
      fontFamily: {
        main: 'var(--font-main)',
        secondary: 'var(--font-secondary)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
