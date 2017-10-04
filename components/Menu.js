import { Link, Router } from '../routes'

const Menu = () => (
  <div className="container">
    <Link route='home'>
      <a>Accueil </a>
    </Link>
    <Link route='blog'>
      <a>Blog </a>
    </Link>
    <Link route='contact'>
      <a>Contact </a>
    </Link>
  </div>
)

export default Menu
