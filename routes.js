const routes = module.exports = require('next-routes')()

routes
.add({ name: 'home', pattern:'/', page: 'index' })
.add({ name: 'blog', pattern: '/blog', page: 'blog' })
.add({ name: 'post', pattern: '/blog/:slug', page: 'post' })
.add({ name: 'contact', pattern: '/contact', page: 'contact' })
