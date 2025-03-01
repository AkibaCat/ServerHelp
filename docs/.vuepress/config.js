module.exports = {
    title: '服务器帮助手册',
    description: '为解决您在服务器的各类问题',
    base: '/ServerHelp/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '玩法帮助', link: '/gamehelp/intensive'},
            { text: '更新日志', link: '/changelog/' },
            { text: '命令帮助', link: '/commandhelp/' },
        ],
        sidebar: [
            {
              title: '首页',
              collapsable: false,
              sidebarDepth: 1,
              children: [
                '',
                '/joinserver',
              ]
            },
            {
              title: '玩法帮助',
              collapsable: false,
              sidebarDepth: 1,
              children: [
                '/gamehelp/intensive',
                '/gamehelp/mcmmo',
                '/gamehelp/quickshop',
                '/gamehelp/residence'
              ]
            }
          ],
        displayAllHeaders: false,
        docsRepo: 'Autumn-Leaves24/ServerHelp',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页面',
        lastUpdated: '上次更新',
    }
}