const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')
.add('blog', '/blog', 'postList')
.add('blog-post', '/blog/:slug', 'post')
