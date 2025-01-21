import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import cloudflare from '@astrojs/cloudflare';

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon(), react(), sitemap(), robotsTxt()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "fr"]
  },
  output: "server",
  adapter: cloudflare()
});