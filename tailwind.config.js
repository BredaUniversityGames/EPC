/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.twig",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            boxShadow: {
                'around': '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)'
            },
            minHeight: {
                '16': '4rem',
            },
        },
    },
    plugins: [],
}
