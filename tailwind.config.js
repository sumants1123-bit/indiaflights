/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: { DEFAULT: 'var(--background)' },
        foreground: { DEFAULT: 'var(--foreground)' },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: { DEFAULT: 'var(--border)' },
        input: { DEFAULT: 'var(--input)' },
        ring: { DEFAULT: 'var(--ring)' },
        'gold-light': { DEFAULT: 'var(--gold-light)' },
        maroon: { DEFAULT: 'var(--maroon)' },
        charcoal: { DEFAULT: 'var(--charcoal)' },
        sandstone: { DEFAULT: 'var(--sandstone)' },
        ivory: { DEFAULT: 'var(--ivory)' },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) - 0.25rem)',
        md: 'var(--radius)',
        lg: 'calc(var(--radius) + 0.25rem)',
        xl: 'calc(var(--radius) + 0.5rem)',
        '2xl': 'calc(var(--radius) + 1rem)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(28, 26, 23, 0.08)',
        'warm-md': '0 8px 24px rgba(28, 26, 23, 0.10)',
        'warm-lg': '0 20px 60px rgba(28, 26, 23, 0.12)',
        'warm-xl': '0 32px 80px rgba(28, 26, 23, 0.16)',
        'gold': '0 8px 24px rgba(200, 150, 90, 0.35)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FAF8F3 0%, #F0EBE1 100%)',
        'gradient-hero': 'linear-gradient(to top, rgba(28,26,23,0.92) 0%, rgba(28,26,23,0.55) 45%, rgba(28,26,23,0.15) 100%)',
        'gradient-saffron': 'linear-gradient(135deg, #C8965A 0%, #E8C48A 50%, #C8965A 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};