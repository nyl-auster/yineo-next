import Tags from './Tags'

const PostFull = ({ post }) => (
  <div>
    <h1 className="title is-1">{post.title}</h1>
    <div className="content" dangerouslySetInnerHTML={{ __html: post.body }}></div>
    <Tags tags={post.tags} />
  </div>
)

export default PostFull
