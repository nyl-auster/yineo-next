import { Link } from '../routes'

const Menu = () => (
  <div className="container">
    <div className="level">
      <div className="level-left">
        <Link prefetch route='HomePage'>
          <a className="level-item">Accueil </a>
        </Link>
        <Link prefetch route='PostListPage'>
          <a className="level-item">Blog </a>
        </Link>
        <Link prefetch route='ContactPage'>
          <a className="level-item">Contact </a>
        </Link>
      </div>
    </div>
  </div>
)

export default Menu
