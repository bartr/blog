import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BartR's Blog",
  description: "Software Engineering in the age of AI Agents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: 'How I AI',
        items: [
          { text: 'Episode 1', link: '/episode-01' },
          { text: 'Episode 2', link: '/episode-02' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/bartr' },
    //   { icon: 'linkedin', link: 'https://linkedin.com/in/bartrobertson' }
    // ],

    footer: {
      message: 'Contact Me: '
        + '<a href="mailto:bartr@outlook.com" target="_blank" rel="noopener">Email</a> | '
        + '<a href="https://github.com/bartr" target="_blank" rel="noopener">GitHub</a> | '
        + '<a href="https://linkedin.com/in/bartrobertson" target="_blank" rel="noopener">LinkedIn</a>',
      copyright: 'Copyright © 2025 bartr.dev'
    }
}
})
