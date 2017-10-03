import Link from 'next/link'

const PostLink = ({post}) => (
  <li>
    <Link as={`blog${post.url.alias}`} href={`/post?uuid=${post.uuid}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default PostLink