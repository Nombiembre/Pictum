import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";


import react from "@astrojs/react";

import sitemap from '@inox-tools/sitemap-ext';

import robotsTxt from "astro-robots-txt";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://pictum.vercel.app/",
  integrations: [tailwind(), icon(), react(), sitemap(), robotsTxt()],

  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "fr"]
  },

  output: "static",
  adapter: vercel(),
});
