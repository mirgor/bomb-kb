const { defaultTheme } = require('vuepress');
//const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics');

module.exports = {
    lang: `uk-UA`,
    title: `Міни в Україні`,
    description: `Довідник вибухонебезпечних предметів в Україні після нападау росії`,
    head: [[`link`, { rel: `icon`, href: `/images/logo.png` }]],
    theme: defaultTheme({
        // default theme config
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
    plugins: [
        // googleAnalyticsPlugin({
        //     id: 'G-XXXXXXXXXX'
        // }),
    ],
}