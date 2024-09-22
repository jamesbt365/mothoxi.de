import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://mothoxi.de",
    integrations: [tailwind()],
});
