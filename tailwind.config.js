/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
import { transform } from "next/dist/build/swc";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      KeyframeEffect:{
        swipper:{
          '0%':{transform: 'translateX(0)'},
          '100%':{transform:'translateX(-100%)'},
        }
      },
      animation: {
        'swipe': 'swipper 2s linear infinite'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
