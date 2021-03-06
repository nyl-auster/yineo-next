const routes = module.exports = require('next-routes')()

routes
.add({ name: 'HomePage', pattern:'/', page: 'HomePage' })
.add({ name: 'PostPage', pattern: '/blog/:slug', page: 'PostPage' })
.add({ name: 'PostListPage', pattern: '/blog', page: 'PostListPage' })
.add({ name: 'ContactPage', pattern: '/contact', page: 'ContactPage' })
