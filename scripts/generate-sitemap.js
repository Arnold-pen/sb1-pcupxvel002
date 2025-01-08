import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://mac-processor-ranking.com';

const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'daily'
  },
  {
    path: '/macbook-pro',
    priority: '0.9',
    changefreq: 'daily'
  },
  {
    path: '/macbook-air',
    priority: '0.9',
    changefreq: 'daily'
  },
  {
    path: '/mac-mini',
    priority: '0.9',
    changefreq: 'daily'
  },
  {
    path: '/imac',
    priority: '0.9',
    changefreq: 'daily'
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'weekly'
  }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${routes.map(route => `
    <url>
      <loc>${SITE_URL}${route.path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
      <xhtml:link rel="alternate" hreflang="zh-CN" href="${SITE_URL}${route.path}" />
      <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en${route.path}" />
    </url>
  `).join('')}
</urlset>`;

const outputPath = path.resolve(__dirname, '../dist/sitemap.xml');

// Ensure dist directory exists
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated successfully!');