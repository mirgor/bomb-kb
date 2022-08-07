const { defaultTheme } = require('vuepress');
const { externalLinkIconPlugin } = require('@vuepress/plugin-external-link-icon');
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom');
const { searchPlugin } = require('@vuepress/plugin-search');

module.exports = {
    lang: `uk-UA`,
    title: `Міни в Україні`,
    description: `Довідник вибухонебезпечних предметів в Україні після нападу росії`,
    head: [[`link`, { rel: `icon`, href: `/images/logo.png` }]],
    theme: defaultTheme({
        // default theme config
        logo: '/images/logo.png',
        //https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar
        sidebar: 'auto',
        sidebarDepth: 1,
        contributors: false,
        lastUpdated: true,
        lastUpdatedText: "Оновлено",
        navbar: [
            {
                text: 'Курс з безпеки',
                link: '/',
            },
            {
                text: 'Довідник мін',
                link: '/catalog',
            },
        ],
    }),
    footer: [
        {
            text: "Latest Posts",
            link: "/catalog",
        },
        {
            text: "Facebook",
            link: "https://facebook.com/",
        },
        {
            text: "Twitter",
            link: "https://twitter.com",
        },
        {
            text: "Github",
            link: "https://github.com/",
        },
    ],
    plugins: [
        externalLinkIconPlugin({
            locales: {
                '/': {
                    openInNewWindow: 'open in new window',
                }
            }
        }),
        mediumZoomPlugin({
            // options
        }),
        searchPlugin({
            // exclude the homepage
            isSearchable: (page) => page.path !== '/',
            // allow searching the `tags` frontmatter
            getExtraFields: (page) => page.frontmatter.tags ?? [],
            getExtraFields: (page) => page.frontmatter.keywords ?? [],
            getExtraFields: (page) => page.frontmatter.aliases ?? [],
        }),

    ],
}