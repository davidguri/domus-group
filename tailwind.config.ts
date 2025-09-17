import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0ea5e9',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        },
        text: {
          50: '#f7f5ed',
          100: '#f0eadb',
          200: '#e1d6b7',
          300: '#d2c193',
          400: '#c3ad6f',
          500: '#b4984b',
          600: '#907a3c',
          700: '#6c5b2d',
          800: '#483d1e',
          900: '#241e0f',
          950: '#120f08'
        },
        background: {
          50: '#edf2f7',
          100: '#dbe6f0',
          200: '#b8cce0',
          300: '#94b2d1',
          400: '#7099c2',
          500: '#4d7fb3',
          600: '#3d668f',
          700: '#2e4c6b',
          800: '#1f3347',
          900: '#0f1924',
          950: '#080d12'
        },
        primary: {
          50: '#f9f2eb',
          100: '#f4e5d7',
          200: '#e9caaf',
          300: '#ddb088',
          400: '#d29560',
          500: '#c77b38',
          600: '#9f622d',
          700: '#774a22',
          800: '#503116',
          900: '#28190b',
          950: '#140c06'
        },
        secondary: {
          50: '#f1f3f4',
          100: '#e3e8e8',
          200: '#c7d0d1',
          300: '#abb9ba',
          400: '#8fa2a3',
          500: '#738b8c',
          600: '#5c6f70',
          700: '#455354',
          800: '#2e3738',
          900: '#171c1c',
          950: '#0b0e0e'
        },
        accent: {
          50: '#f0f3f4',
          100: '#e2e8e9',
          200: '#c4d0d4',
          300: '#a7b9be',
          400: '#8aa2a8',
          500: '#6c8a93',
          600: '#576f75',
          700: '#415358',
          800: '#2b373b',
          900: '#161c1d',
          950: '#0b0e0f'
        },
        success: colors.emerald,
        warning: colors.amber,
        danger: colors.rose,
        info: colors.sky
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'
        ]
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px'
        }
      }
    }
  },
  plugins: []
};

export default config;


