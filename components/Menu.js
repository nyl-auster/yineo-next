import { Link } from '../routes'

const Menu = () => (
  <div className="container">
    <Link prefetch route='HomePage'>
      <a>Accueil </a>
    </Link>
    <Link prefetch route='BlogPage'>
      <a>Blog </a>
    </Link>
    <Link prefetch route='ContactPage'>
      <a>Contact </a>
    </Link>
  </div>
)

export default Menu
