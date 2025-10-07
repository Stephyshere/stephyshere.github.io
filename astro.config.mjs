import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://stephyshere.github.io',
  integrations: [tailwind()]
});
