import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'hiwujie.top',
  description: 'AI 前沿思考 | Cutting-edge AI Thoughts | AI 最前線の思考',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  markdown: {
    image: {
      lazyLoading: true,
    },
  },

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+SC:wght@100..900&family=Noto+Sans+JP:wght@100..900&display=swap', rel: 'stylesheet' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'og:title', content: 'hiwujie.top - AI 前沿思考' }],
    ['meta', { property: 'og:description', content: '记录关于 AI 前沿的思考与探索' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://hiwujie.top' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'hiwujie.top - AI 前沿思考' }],
    ['meta', { name: 'twitter:description', content: '记录关于 AI 前沿的思考与探索' }],
  ],

  // 本地搜索插件只在根级 themeConfig 中配置 provider 才会启用
  themeConfig: {
    search: {
      provider: 'local',
    },
  },

  locales: {
    zh: {
      lang: 'zh-CN',
      label: '中文',
      title: 'hiwujie.top',
      description: 'AI 前沿思考',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '关于', link: '/zh/about/' },
        ],
        sidebar: [
          {
            text: 'AI 前沿思考',
            items: [
              { text: 'AI 推理的范式转变', link: '/zh/posts/ai-reasoning-paradigm-shift' },
            ],
          },
        ],
        outline: {
          label: '目录',
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
        darkModeSwitchLabel: '深色模式',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '语言',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文章',
              },
              modal: {
                noResultsText: '没有找到相关结果',
                resetButtonTitle: '清除搜索条件',
                displayDetails: '显示详细列表',
              },
            },
          },
        },
        footer: {
          message: '由 <a href="https://github.com/hiwujie">Jie Wu</a> 创作',
          copyright: '基于 VitePress 构建',
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/hiwujie' },
        ],
      },
    },
    en: {
      lang: 'en',
      label: 'English',
      title: 'hiwujie.top',
      description: 'Cutting-edge AI Thoughts',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about/' },
        ],
        sidebar: [
          {
            text: 'AI Thoughts',
            items: [
              { text: 'The Paradigm Shift in AI Reasoning', link: '/en/posts/ai-reasoning-paradigm-shift' },
            ],
          },
        ],
        outline: {
          label: 'On this page',
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle: 'Switch to dark mode',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Language',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search articles',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Reset search',
                displayDetails: 'Show detailed list',
              },
            },
          },
        },
        footer: {
          message: 'Created by <a href="https://github.com/hiwujie">Jie Wu</a>',
          copyright: 'Built with VitePress',
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/hiwujie' },
        ],
      },
    },
    ja: {
      lang: 'ja',
      label: '日本語',
      title: 'hiwujie.top',
      description: 'AI 最前線の思考',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'について', link: '/ja/about/' },
        ],
        sidebar: [
          {
            text: 'AI 最前線の思考',
            items: [
              { text: 'AI 推論のパラダイムシフト', link: '/ja/posts/ai-reasoning-paradigm-shift' },
            ],
          },
        ],
        outline: {
          label: '目次',
        },
        docFooter: {
          prev: '前へ',
          next: '次へ',
        },
        darkModeSwitchLabel: '表示モード',
        lightModeSwitchTitle: 'ライトモードに切り替え',
        darkModeSwitchTitle: 'ダークモードに切り替え',
        sidebarMenuLabel: 'メニュー',
        returnToTopLabel: 'トップへ戻る',
        langMenuLabel: '言語',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '記事を検索',
              },
              modal: {
                noResultsText: '結果が見つかりませんでした',
                resetButtonTitle: '検索条件をクリア',
                displayDetails: '詳細リストを表示',
              },
            },
          },
        },
        footer: {
          message: '<a href="https://github.com/hiwujie">Jie Wu</a> によって作成されました',
          copyright: 'VitePress で構築',
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/hiwujie' },
        ],
      },
    },
  },
})