import Link from 'next/link'

const PostLink = ({ post }) => (
  <div>
    <Link prefetch as={`blog${post.url.alias}`} href={`/post?uuid=${post.uuid}`}>
      <a>Lire plus</a>
    </Link>
  </div>  
)

export default PostLink