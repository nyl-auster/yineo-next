import Link from 'next/link'
import Header from './Header'
import Head from 'next/head'
import Menu from './Menu'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>YINEO - développement React, Next.js, Vue.js et Nuxt.js</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/css/bulma-5.1.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/app.css" />
    </Head>
    <Header />
    <Menu />
    <div className="container">
      {children}
    </div>
  </div>
)

export default Layout
