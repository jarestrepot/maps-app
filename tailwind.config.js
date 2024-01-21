/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    screens: {
      '3xl': '1800px'
    },
    color: {
      'san-marino': {
        '50': '#f2f6fc',
        '100': '#e2ebf7',
        '200': '#cbddf2',
        '300': '#a8c7e8',
        '400': '#7eaadc',
        '500': '#5f8ed2',
        '600': '#4a73c4',
        '700': '#4162b4',
        '800': '#3a5193',
        '900': '#334675',
        '950': '#232c48',
      },
      'lima': {
        '50': '#f4faeb',
        '100': '#e7f3d4',
        '200': '#d0e9ad',
        '300': '#b0d97d',
        '400': '#8dc44a',
        '500': '#74ac36',
        '600': '#598927',
        '700': '#456922',
        '800': '#395420',
        '900': '#32481f',
        '950': '#18270c',
      },

    }
  },
};
export const plugins = [];

