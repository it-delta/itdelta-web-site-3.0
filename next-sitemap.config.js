/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://itdelta.ru',
    generateRobotsTxt: true, // (optional)
    // ...other options
    robotsTxtOptions: {
        policies: [
            { 
                userAgent: '*', 
                allow: '/',
                disallow: '/*etext=2202'
            },
        ]
    }
}