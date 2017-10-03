import PostLink from './PostLink'

const PostTeaser = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: post.teaser }}></div>
    <PostLink post={post} />
  </div>
)

export default PostTeaser
