import { defineConfig } from 'vitepress';
import sidebar from './sidebar.mjs';

function rewriteReadmeToIndex(id) {
  if (id === 'README.md') {
    return 'index.md';
  }

  return id.replace(/\/README\.md$/, '/index.md');
}

export default defineConfig({
  title: 'xlswriter',
  description: 'Documentation for the xlswriter PHP extension',
  base: '/php-ext-xlswriter/',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/php-ext-xlswriter/favicon.png' }]
  ],
  cleanUrls: true,
  rewrites: rewriteReadmeToIndex,
  themeConfig: {
    siteTitle: 'xlswriter',
    sidebar,
    editLink: {
      pattern: 'https://github.com/scaler-tech/php-ext-xlswriter/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
      text: 'Last updated'
    },
    externalLinkIcon: true,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/scaler-tech/php-ext-xlswriter' }
    ]
  }
});
