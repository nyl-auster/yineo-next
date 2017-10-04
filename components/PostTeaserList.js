import PostTeaser from './PostTeaser'

const PostTeaserList = ({ posts }) => 
  <div className="posts content">
    { posts.map(post =>
      <div key={post.uuid}>
        <PostTeaser post={post} />
      </div>
    )}
  </div>

export default PostTeaserList
