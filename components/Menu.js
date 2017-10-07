import { Link } from '../routes'

const Menu = () => (
  <div className="container">
    <Link prefetch route='homePage'>
      <a>Accueil </a>
    </Link>
    <Link prefetch route='blogPage'>
      <a>Blog </a>
    </Link>
    <Link prefetch route='contactPage'>
      <a>Contact </a>
    </Link>
  </div>
)

export default Menu
