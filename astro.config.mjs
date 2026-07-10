// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://jfernandezdev.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  vite: {
      plugins: [tailwindcss()]
	},

  integrations: [react()]
});