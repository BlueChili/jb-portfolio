/** @type {import('tailwindcss').Config} */
export default {
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        theme: {
                extend: {
                        screens: {
                                laptop: '1440px',
                        },
                        fontFamily: {
                                sans: ['Helvetica Neue', 'sans-serif'],
                                mono: ['Helvetica Neue', 'sans-serif'],
                        },
                        colors: {
                                brand: {
                                        pink: '#D3008C',
                                        grey: '#7E7E7E',
                                        lightgrey: '#D3D3D3',
                                        emerald: '#00C09E',
                                        red: '#DE0000',
                                        blue: '#0059DE',
                                        'browser-purple': '#7879F1',
                                        'secondary-text': '#4d4d4d',
                                },
                        },
                        boxShadow: {
                                'inner-pink': '-1px 1px 0px 0px rgba(255, 255, 255, 0.4) inset, 1px -1px 0px 0px rgba(255, 255, 255, 0.1) inset',
                                'outer-shadow': '-4px 4px 38px 0px rgba(0, 0, 0, 0.4)',
                              },
                        spacing: {
                                13: '3.25rem',
                                15: '3.75rem',
                                17: '4.25rem',
                                18: '4.5rem',
                                19: '4.75rem',
                        },
    /*                    logocolors:  {
                                'white': '#fff',             
                        }, */
                },
        },
        safelist: [
            {
                pattern: /flex-row/,
                variants: ['sm', 'md', 'lg', 'xl', 'laptop', '2xl'],
            },
            {
                pattern: /flex-row-reverse/,
                variants: ['sm', 'md', 'lg', 'xl', 'laptop', '2xl'],
            },
        ],
        plugins: [],
};
