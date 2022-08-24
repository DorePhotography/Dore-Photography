/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'Abel': ['Abel','sans-serif']
    },
    backgroundSize:{
      '10%' : '10%',
    },
    extend: {
      backgroundImage: {
        'landing-img': "url('./images/homePage/Landing.jpg')",
        
      },
      animation: {
        'slideshow': 'slideshow 2s linear infinite',
        'slideshow2': 'slideshow2 18s linear infinite',
        
      },
    },
      keyframes: {
        slideshow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideshow2: {
          '100%': { transform: 'translateX(0)' },
        },
    },
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [],
}