import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://glistening-cat-6aad72.netlify.app',
  integrations: [preact()]
});