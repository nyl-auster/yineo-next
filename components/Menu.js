import { Link, Router } from '../routes'

const Menu = () => (
  <div>
    <Link route='/'>
      <a>Accueil</a>
    </Link>
    <Link route='/blog'>
      <a>Blog</a>
    </Link>
    <Link route='/contact'>
      <a>Contact</a>
    </Link>
  </div>
)

export default Menu
