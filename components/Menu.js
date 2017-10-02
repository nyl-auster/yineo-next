import Link from 'next/link'

const Menu = () => (
  <div>
    <Link href="/">
      <a>Accueil</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </div>
)

export default Menu
