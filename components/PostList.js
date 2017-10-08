import PostAsTeaser from './PostAsTeaser'
import Loader from './Loader'
import Pagination from './Pagination'
import config from '../next.config.js'

const PostList = ({ data }) => {
  return (
    <div>
      <h1 className="title is-1">Dernier billets de blog</h1>
      <Pagination resultsByPage={config.postsPerPage} totalOfResults={data.postsQuery.count} route="PostListPage" />
      <div className="posts content">
        {data.postsQuery.results.map(post =>
          <div key={post.uuid}>
            <PostAsTeaser post={post} />
          </div>
        )}
      </div>
      <Pagination resultsByPage={config.postsPerPage} totalOfResults={data.postsQuery.count} route="PostListPage" />
    </div>
  )
}

export default PostList
