import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: 'site' must be the production URL — used for canonical URLs,
// sitemap entries, RSS feed links, and Open Graph absolute URLs.
// If you ever move off devopinions.com, change this single value.
export default defineConfig({
  site: 'https://devopinions.com',
  integrations: [
    sitemap({
      // Sitemap.xml is auto-generated at build time from all pages.
      // Excluded from sitemap: draft posts (handled via content collection filter).
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  // Markdown config — syntax highlighting + GitHub-flavoured rendering
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
  // Build settings tuned for SEO performance
  build: {
    inlineStylesheets: 'auto',
  },
});
