import { Link } from '../routes'

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      { tags.map((tag, index) =>
        <Link key={index} route="PostListPage" params={{ tag: tag.url.alias.replace('/', '')}}>
          <a className="tag is-medium is-light"> {tag.name} </a>
        </Link>
      )}
    </div>
  )
}

export default Tags
