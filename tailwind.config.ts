import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'paisley': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTIwIDVDMTcuMjM4NiA1IDEwLjc2NjkgMTIuNzU2NiAxMC43NjY5IDIwQzEwLjc2NjkgMjcuMjQzNCAxNy4yMzg2IDM1IDIwIDM1QzIyLjc2MTQgMzUgMjkuMjMzMSAyNy4yNDM0IDI5LjIzMzEgMjBDMjkuMjMzMSAxMi43NTY2IDIyLjc2MTQgNSAyMCA1WiIgZmlsbD0iIzAwMDAwMDEwIi8+IDwvc3ZnPg==')",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sanskrit': ['Noto Sans Devanagari', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // Traditional Indian Wedding Theme Colors (Maroon, Gold, Cream)
        primary: {
          50: '#fdf2f2', // Lightest Maroon
          100: '#fbe7e7',
          200: '#f7d4d4',
          300: '#f2baba',
          400: '#ed9f9f',
          500: '#800000', // Deep Maroon
          600: '#660000',
          700: '#4d0000',
          800: '#330000',
          900: '#1a0000',
        },
        secondary: {
          50: '#fffdf2', // Lightest Gold
          100: '#fffbe7',
          200: '#fff7d4',
          300: '#fff2ba',
          400: '#ffed9f',
          500: '#FFD700', // Gold
          600: '#CCAE00',
          700: '#998200',
          800: '#665700',
          900: '#332b00',
        },
        accent: {
          50: '#fdfdf2', // Lightest Cream
          100: '#fbfbe7',
          200: '#f7f7d4',
          300: '#f2f2ba',
          400: '#eded9f',
          500: '#FFFDD0', // Cream
          600: '#CCC8A6',
          700: '#99967D',
          800: '#666453',
          900: '#33322A',
        },
        
        // Original shadcn colors (adjusting to new theme if necessary)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))',
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))',
        // },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        // accent: {
        //   DEFAULT: 'hsl(var(--accent))',
        //   foreground: 'hsl(var(--accent-foreground))',
        // },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'sparkle': {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'pulse-gold': 'pulse-gold 2s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
