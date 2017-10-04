import { Link, Router } from '../routes'

const PostLink = ({ post }) => 
  <div>
    <Link route='post' params={{slug: post.url.alias.replace('/', '')}}>
      <a className="button">Lire plus</a>
    </Link>
  </div>  


export default PostLink