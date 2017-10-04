import { Link, Router } from '../routes'

const Menu = () => (
  <div className="container">
    <Link prefetch route='home'>
      <a>Accueil </a>
    </Link>
    <Link prefetch route='blog'>
      <a>Blog </a>
    </Link>
    <Link prefetch route='contact'>
      <a>Contact </a>
    </Link>
  </div>
)

export default Menu
