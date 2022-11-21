/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('./herobg.jpg')",
            },
            fontFamily: {
                GTAmericaExtendedRegular: "GT America Extended Regular",
            },
        }
    },
    plugins: []
};