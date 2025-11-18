/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
   
        sans: ["var(--font-poppins)", "sans-serif"],
        
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        
      },
    },
  },
  plugins: [],
};
