/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                sans: ['Helvetica Neue', 'sans-serif'],
                mono: ['Helvetica Neue', 'sans-serif'],
            },
            colors: {
                brand: {
                    pink: '#D3008C',
                    grey: '#7E7E7E',
                }
            }
        },
	},
	plugins: [],
}
