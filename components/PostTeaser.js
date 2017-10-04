import PostLink from './PostLink'

const PostTeaser = ({ post }) => (
  <div>
    <h2 className="title is-2">{post.title}</h2>
    <div className="content" dangerouslySetInnerHTML={{ __html: post.teaser }}></div>
    <PostLink post={post} />
    <hr />
  </div>
)

export default PostTeaser
