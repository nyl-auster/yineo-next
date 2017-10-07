const routes = module.exports = require('next-routes')()

routes
.add({ name: 'homePage', pattern:'/', page: 'homePage' })
.add({ name: 'blogPage', pattern: '/blog', page: 'blogPage' })
.add({ name: 'postPage', pattern: '/blog/:slug', page: 'postPage' })
.add({ name: 'contactPage', pattern: '/contact', page: 'contactPage' })
