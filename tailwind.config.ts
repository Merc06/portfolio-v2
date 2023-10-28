import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#171717',
        'secondary': '#2f2f2f',
        'accent': '#DA0037',
        'default': '#EDEDED',
      },
    },
  },
  plugins: [],
} satisfies Config;
