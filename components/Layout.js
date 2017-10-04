import Link from 'next/link'
import Header from './Header'
import Head from 'next/head'
import Menu from './Menu'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>YINEO - développement React, Next.js, Vue.js et Nuxt.js</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Menu />
    {children}
  </div>
)

export default Layout
