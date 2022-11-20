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
            }
        },
    },
    plugins: [],
}
