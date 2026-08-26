// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// ---------------------------------------------------------------------------
// THE ONLY LINE YOU CHANGE WHEN YOU BUY A DOMAIN.
// Today:  https://christianchungs.github.io
// Later:  https://your-domain.com   (and add the domain in GitHub > Settings > Pages)
// ---------------------------------------------------------------------------
const SITE = 'https://christianchungs.github.io';

export default defineConfig({
  site: SITE,
  integrations: [react(), mdx(), sitemap()],
  build: { format: 'directory' },
});
