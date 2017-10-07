import ReadMore from './ReadMore'
import PostImage from './PostImage'

const PostAsTeaser = ({ post }) => {
  return (
    <div>
      <h2 className="title is-2">{post.title}</h2>
       <PostImage post={post} />
      <div className="content" dangerouslySetInnerHTML={{ __html: post.teaser.substring(0, 700) }}></div>
      <ReadMore route='postPage' params={{ slug: post.url.alias.replace('/', '') }} />
      <hr />
    </div>
  )
}

export default PostAsTeaser
