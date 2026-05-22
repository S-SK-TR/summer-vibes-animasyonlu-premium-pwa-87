import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'solstice': {
          '50': 'hsl(45, 100%, 95%)',
          '100': 'hsl(45, 100%, 90%)',
          '200': 'hsl(45, 100%, 80%)',
          '300': 'hsl(45, 100%, 70%)',
          '400': 'hsl(45, 100%, 60%)',
          '500': 'hsl(45, 100%, 50%)',
          '600': 'hsl(45, 100%, 40%)',
          '700': 'hsl(45, 100%, 30%)',
          '800': 'hsl(45, 100%, 20%)',
          '900': 'hsl(45, 100%, 10%)',
          '950': 'hsl(45, 100%, 5%)'
        },
        'ocean': {
          '50': 'hsl(195, 100%, 95%)',
          '100': 'hsl(195, 100%, 90%)',
          '200': 'hsl(195, 100%, 80%)',
          '300': 'hsl(195, 100%, 70%)',
          '400': 'hsl(195, 100%, 60%)',
          '500': 'hsl(195, 100%, 50%)',
          '600': 'hsl(195, 100%, 40%)',
          '700': 'hsl(195, 100%, 30%)',
          '800': 'hsl(195, 100%, 20%)',
          '900': 'hsl(195, 100%, 10%)',
          '950': 'hsl(195, 100%, 5%)'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif']
      },
      backgroundImage: {
        'solstice-gradient': 'linear-gradient(135deg, #FDB813 0%, #FF9E00 50%, #FF6B6B 100%)',
        'ocean-gradient': 'linear-gradient(135deg, #00A8CC 0%, #00D2FC 50%, #30E3CA 100%)'
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(253, 184, 19, 0.3)'
      },
      backdropBlur: {
        'glass': '12px'
      },
      borderRadius: {
        'glass': '20px'
      }
    }
  },
  plugins: []
} as Config