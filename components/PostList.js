import PostAsTeaser from './PostAsTeaser'
import Loader from './Loader'
import Pagination from './Pagination'

const PostList = ({ data }) => {
  return (
    <div>
      <h1 className="title is-1">Dernier billets de blog</h1>
      <div className="posts content">
        {data.postsQuery.results.map(post =>
          <div key={post.uuid}>
            <PostAsTeaser post={post} />
          </div>
        )}
        <Pagination totalOfResults={data.postsQuery.count} route="BlogPage" />
      </div>
    </div>
  )
}

export default PostList
