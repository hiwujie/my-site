import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'hiwujie.top',
  description: 'AI 前沿思考 | Cutting-edge AI Thoughts | AI 最前線の思考',
  cleanUrls: true,
  lastUpdated: true,

  locales: {
    '/zh/': {
      lang: 'zh-CN',
      label: '中文',
      title: 'hiwujie.top',
      description: 'AI 前沿思考',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '文章', link: '/zh/posts/' },
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
      },
    },
    '/en/': {
      lang: 'en',
      label: 'English',
      title: 'hiwujie.top',
      description: 'Cutting-edge AI Thoughts',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Posts', link: '/en/posts/' },
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
      },
    },
    '/ja/': {
      lang: 'ja',
      label: '日本語',
      title: 'hiwujie.top',
      description: 'AI 最前線の思考',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '記事', link: '/ja/posts/' },
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
      },
    },
  },
})