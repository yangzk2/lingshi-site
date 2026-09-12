import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '灵狮 LingShi',
  description: '企业级 AI 工作台 —— 让每一位员工都拥有安全、可控的企业 AI 助手',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/lion.svg' }]],
  cleanUrls: true,
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  // GitHub 项目页路径前缀(https://yangzk2.github.io/lingshi-site/);绑定自定义域名后改为 '/'
  base: '/lingshi-site/',

  themeConfig: {
    logo: '/lion.svg',
    siteTitle: '灵狮 LingShi',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '安装指南',
        items: [
          { text: '网页版', link: '/guide/install-web' },
          { text: '桌面端', link: '/guide/install-desktop' },
          { text: '管理端', link: '/guide/console' }
        ]
      },
      { text: '产品介绍', link: '/guide/intro' },
      { text: '产品路线图', link: '/roadmap' },
      {
        text: 'GitHub',
        items: [
          { text: '主仓库', link: 'https://github.com/yangzk2/lingshi' },
          { text: '提 Issue', link: 'https://github.com/yangzk2/lingshi/issues' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '产品',
          items: [
            { text: '产品介绍', link: '/guide/intro' },
            { text: '产品路线图', link: '/roadmap' }
          ]
        },
        {
          text: '安装指南',
          items: [
            { text: '网页版', link: '/guide/install-web' },
            { text: '桌面端', link: '/guide/install-desktop' },
            { text: '管理端', link: '/guide/console' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/yangzk2/lingshi' }],

    footer: {
      message: '企业知识库内容不落地员工电脑 · 个人数据不出员工电脑',
      copyright: 'Copyright © 2026 灵狮 LingShi'
    },

    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单'
  }
})
