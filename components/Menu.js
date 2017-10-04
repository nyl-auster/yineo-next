import Link from 'next/link'

const Menu = () => (
  <div>
    <Link prefetch href="/">
      <a>Accueil</a>
    </Link>
    <Link prefetch href="/blog">
      <a>Blog</a>
    </Link>
    <Link prefetch href="/contact">
      <a>Contact</a>
    </Link>
  </div>
)

export default Menu
