import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), mdx(), react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro"
    }
  }
});