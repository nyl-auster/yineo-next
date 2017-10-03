import Link from 'next/link'

const PostLink = ({post}) => (
  <li>
    <Link href={`/blog${post.url.alias}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default PostLink