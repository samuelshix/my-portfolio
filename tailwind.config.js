module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            mob: "375px",
            tablet: "768px",
            laptop: "1024px",
            laptopl: "1440px",
            desktop: "1280px",
        },
        extend: {
            keyframes: {
                flow: {
                    '0%': { 'background-position': '0% 0%' },
                    '20%': { 'background-position': '25% 10%' },
                    '40%': { 'background-position': '50% 30%' },
                    '60%': { 'background-position': '75% 40%' },
                    '80%': { 'background-position': '100% 70%' },
                    '100%': { 'background-position': '0% 100%' },
                },
            },
            animation: {
                flow: 'flow 20s linear infinite',
            },
        },
    },
    plugins: [],
};
