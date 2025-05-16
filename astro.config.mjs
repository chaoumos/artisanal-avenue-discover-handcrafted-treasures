import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://artisanal-avenue-discover-handcrafted-treasures.example.com'
});