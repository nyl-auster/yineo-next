import Link from 'next/link'
import Header from './Header'
import Menu from './Menu'

const Layout = ({children}) => (
  <div>
    <Header />
    <Menu />
    {children}
  </div>
)

export default Layout
