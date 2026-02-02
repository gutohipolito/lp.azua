/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'azua-dark': '#0a0a0a',
                'azua-card': '#111111',
                'azua-blue': '#1a202c',
                'azua-gold': '#d4af37',
                'text-light': '#f3f4f6',
                'text-muted': '#9ca3af',
                // Gradient Levels (Black -> Gray)
                'level-1': '#050505', // Pitch Black
                'level-2': '#0a0a0a', // Deep Black
                'level-3': '#111111', // Subtle Gray
                'level-4': '#171717', // Neutral 900
                'level-5': '#262626', // Neutral 800 (Visible Gray)
                'level-6': '#333333', // Neutral 700 (Lighter Gray - End Point)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
