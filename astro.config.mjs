import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sondinhvan.github.io',
  output: 'static',
  redirects: {
    '/research/projects': '/research/research_theme',
  },
});
