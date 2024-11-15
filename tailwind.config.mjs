/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                accent: "var(--accent)",
                "text-primary": "var(--text-primary)",
                "socials-background": "var(--socials-background)",
                "socials-border": "var(--socials-border)",
                "header-bg": "var(--header-bg)",
            },
        },
    },
    plugins: [],
};
