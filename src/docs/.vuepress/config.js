module.exports = {
    title: 'PyLibSharp 使用文档',
    description: '本文档将带领你快速入门上手 PyLibSharp 库',
    themeConfig: {
        logo: 'https://i.loli.net/2020/10/14/Q3NPTLuC4no16ye.png',
        search: true,
        searchMaxSuggestions: 5,
        smoothScroll: true,
        lastUpdated: '上一次编辑',
        repo: 'Yukrai103/Sora',
        repoLabel: 'GitHub',
        docsRepo: 'Yukrai103/sora_docs_dev',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: false,
        editLinkText: '编辑此页',
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'API', link: '/API/Sora.md' },
            { text: '更新日志', link: '/updatelog/' },
        ],
        displayAllHeaders: true,
        activeHeaderLinks: true,
        sidebar: {
            '/guide/': [{
                    title: '使用指南',
                    path: '/guide/',
                    collapsable: false,
                    sidebarDepth: -1,
                    children: [
                        '/guide/'
                    ]
                },
                {
                    title: '开始使用',
                    path: '/guide/gettingstart/',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '/guide/gettingstart/',
                        '/guide/gettingstart/changemainfunction',
                        '/guide/gettingstart/setupserver',
                        '/guide/gettingstart/firstbot'
                    ]
                },
                {
                    title: '奇怪的语法糖增加了！',
                    path: '/guide/tips/',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '/guide/tips/'
                    ]
                }
            ],
            '/API/': [{
                title: 'API',
                path: '/API/Sora.md',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/API/Sora.md'
                ]
            }]
        }
    },

}