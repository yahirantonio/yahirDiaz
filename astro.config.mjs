// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://yahirdiaz.net/',
  integrations: [icon({ iconDir: './src/icons' }), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});