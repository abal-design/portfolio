/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F172A',
          slate: '#1E293B',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          white: '#F8FAFC',
          gray: '#94A3B8',
          border: '#334155'
        }
      },
      boxShadow: {
        soft: '0 20px 80px rgba(15, 23, 42, 0.22)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 120px rgba(59, 130, 246, 0.18)'
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        'premium-radial': 'radial-gradient(circle at top left, rgba(59,130,246,.22), transparent 34%), radial-gradient(circle at top right, rgba(6,182,212,.18), transparent 26%), radial-gradient(circle at bottom center, rgba(30,41,59,.42), transparent 30%)'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 2.25s linear infinite',
        pulseGlow: 'pulseGlow 3.2s ease-in-out infinite'
      }
    }
  },
  plugins: []
};