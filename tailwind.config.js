/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.twig",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'nevada': {
                    DEFAULT: '#60777f',
                    50: '#f4f7f7',
                    100: '#e3e8ea',
                    200: '#cad5d7',
                    300: '#a5b6bb',
                    400: '#799097',
                    500: '#60777f',
                    600: '#50626a',
                    700: '#455259',
                    800: '#3e474c',
                    900: '#373e42',
                },
            },
            boxShadow: {
                'around': '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)'
            }
        },
    },
    plugins: [],
}
