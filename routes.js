const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')
.add('blog', '/blog', 'postList')
.add('post', '/blog/:slug', 'post')
