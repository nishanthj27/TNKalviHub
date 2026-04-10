import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E8500A',
          secondary: '#1E3A5F',
          accent: '#F5A623',
          light: '#FFF5F0',
          dark: '#0F1B2D',
        },
      },
      fontFamily: {
        tamil: ['Noto Sans Tamil', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
